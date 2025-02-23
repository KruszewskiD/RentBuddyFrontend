import { Redirect, Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="flats/[id]"
        options={{ headerBackTitle: "Mieszkania" }}
      />
      <Stack.Screen
        name="invoices/[id]"
        options={{ headerBackTitle: "Faktury" }}
      />
      <Stack.Screen
        name="create-flat"
        options={{ headerBackTitle: "Mieszkania", title: "Dodaj Mieszkanie" }}
      />
      <Stack.Screen
        name="create-invoice"
        options={{ headerBackTitle: "Faktury", title: "Dodaj Fakturę" }}
      />
      <Stack.Screen
          name="create-issue"
          options={{ title: "Zgłoś problem" }}
        />

      <Stack.Screen
          name="create-meeting"
          options={{ title: "Zaplanuj wizytę" }}
        />
    </Stack>

      
  );
};

export default Layout;
