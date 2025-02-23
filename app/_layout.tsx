import { Stack, useRouter, useSegments } from 'expo-router';
import { useState, useEffect } from 'react';

export default function RootLayout() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const router = useRouter();
  // const segments = useSegments();

  // useEffect(() => {
  //   const inAuthGroup = segments[0] === 'login' || segments[0] === 'sign_up';

  //   if (!isLoggedIn && !inAuthGroup) {
  //     router.replace('/login'); // Przekierowanie do login jeśli niezalogowany
  //   }

  //   if (isLoggedIn && inAuthGroup) {
  //     router.replace('/(app)'); // Po zalogowaniu → (app)/home
  //   }
  // }, [isLoggedIn, segments]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login"  />
      <Stack.Screen name="sign_up"  />
      <Stack.Screen name="(app)"  />
    </Stack>
  );
}
