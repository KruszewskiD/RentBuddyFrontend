import { useState, useContext, createContext, useEffect, ReactNode } from "react";
import type { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios'
import axios from "axios";
import * as SecureStore from "expo-secure-store";

// 🛠️ Typy dla stanu autoryzacji
interface AuthState {
  token: string | null;
  authenticated: boolean | null;
}

// 🛠️ Typy dla kontekstu autoryzacji
interface AuthContextProps {
  authState: AuthState;
  onRegister: (
    first_name: string,
    last_name: string,
    email: string,
    username: string,
    password: string,
    phone_number: string,
    role?: string
) => Promise<any>;

  onLogin: (username: string, password: string) => Promise<any>;
  onLogout: () => Promise<void>;
}

// TODO: przenieść do .env
const TOKEN_KEY = "tokenDoApki"
export const API_URL = "http://localhost:3000"

// 🛠️ Domyślny kontekst (pusty)
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// 🛠️ Hook do używania kontekstu
export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// 🛠️ Typ propsów dla AuthProvider
interface AuthProviderProps {
  children: ReactNode;
}

// 🟢 AuthProvider: zarządza autoryzacją użytkownika
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authState, setAuthState] = useState<AuthState>({ token: null, authenticated: null });

  // 🔄 Sprawdza, czy token jest zapisany
  useEffect(() => {
    const loadToken = async () => {
      try {
        const token = await SecureStore.getItemAsync(TOKEN_KEY);
        console.log("TOKEN ZAPISANY W SECURE STORE:", token);
  
        if (token) {
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          setAuthState({ token, authenticated: true });
        } else {
          setAuthState({ token: null, authenticated: false });
        }
      } catch (error) {
        console.error("BŁĄD PODCZAS ODCZYTU TOKENU:", error);
        setAuthState({ token: null, authenticated: false });
      }
    };
  
    loadToken();
  }, []);
  

  // 🟢 Rejestracja użytkownika
  const register = async (first_name: string, last_name: string, email: string, username: string, password: string, phone_number: string, role?: string) => {
    try {
      console.log(first_name, last_name, email, username, password, phone_number, role="user")
      return await axios.post(`${API_URL}/signup`, { first_name, last_name, email, username, password, phone_number, role: "user" });
    } catch (e) {
      return { error: true, msg: (e as any).response?.data?.msg || "Registration failed" };
    }
  };

  // 🟢 Logowanie użytkownika
  const login = async (username: string, password: string) => {
    try {
      const result = await axios.post(`${API_URL}/login`, { username, password });
      console.log(result.data)
      setAuthState({ token: result.data.token, authenticated: true });
      axios.defaults.headers.common["Authorization"] = `Bearer ${result.data.token}`;
      await SecureStore.setItemAsync(TOKEN_KEY, result.data.token);
      return result;
    } catch (e) {
      return { error: true, msg: (e as any).response?.data?.msg || e };
    }
  };

  // 🟢 Wylogowanie użytkownika
  const logout = async () => {
    await SecureStore.deleteItemAsync(TOKEN_KEY);
    axios.defaults.headers.common["Authorization"] = "";
    setAuthState({ token: null, authenticated: false });
    console.log(authState)
  };

  return <AuthContext.Provider value={{ authState, onRegister: register, onLogin: login, onLogout: logout }}>{children}</AuthContext.Provider>;
};
