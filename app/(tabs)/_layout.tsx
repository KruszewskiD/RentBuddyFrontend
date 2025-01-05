import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="flats" options={{ title: "Mieszkania" }} />
      <Tabs.Screen name="invoices" options={{ title: "Faktury" }} />
      <Tabs.Screen name="meetings" options={{ title: "Spotkania" }} />
      <Tabs.Screen name="problems" options={{ title: "Problemy" }} />
    </Tabs>
  );
};

export default TabsLayout;
