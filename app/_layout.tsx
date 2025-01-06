import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="[id]" options={{ headerBackTitle: "Mieszkania" }} />
      <Stack.Screen
        name="create-flat"
        options={{ headerBackTitle: "Mieszkania", title: "Dodaj Mieszkanie" }}
      />
    </Stack>
  );
};

export default Layout;
