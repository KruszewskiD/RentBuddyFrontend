import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { View, ActivityIndicator } from "react-native";

export default function RootLayout() {
  return (
    <AuthProvider>
      <AuthLayout />
    </AuthProvider>
  );
}

function AuthLayout() {
  const { authState } = useAuth(); // Nasz stan autoryzacji
  const router = useRouter();

  // Używamy useEffect do przekierowania w zależności od stanu authState
  useEffect(() => {
    if (authState?.authenticated === true) {
      // Użytkownik zalogowany, przekierowanie do głównej aplikacji
      router.replace("/(app)"); // Upewnij się, że masz poprawny endpoint!
    } else if (authState?.authenticated === false) {
      // Użytkownik niezalogowany, przekierowanie do login
      router.replace("/login");
    }
  }, [authState, router]);

  if (authState?.authenticated === null) {
    // Ładowanie stanu autoryzacji, gdy jeszcze nie jest załadowany
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // Jeśli użytkownik nie jest zalogowany
  if (authState?.authenticated === false) {
    return (
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" />
        <Stack.Screen name="sign_up" />
      </Stack>
    );
  }

  // Jeśli użytkownik jest zalogowany
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(app)" />
    </Stack>
  );
}
