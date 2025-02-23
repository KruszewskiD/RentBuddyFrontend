import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="flats"
        options={{ headerShown: false, title: "Mieszkania" }}
      />
      <Tabs.Screen name="invoices" options={{ title: "Faktury" }} />
      <Tabs.Screen name="meetings" options={{ title: "Spotkania" }} />
      <Tabs.Screen name="problems" options={{ title: "Problemy" }} />
      <Tabs.Screen name="invitations" options={{ title: "Zaproszenia" }} />
      <Tabs.Screen name="user" options={{ title: "Uzytkownik" }} />
    </Tabs>
  );
};

export default TabsLayout;
