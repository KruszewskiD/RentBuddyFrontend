import { Stack } from "expo-router";

const FlatsLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Mieszkania" }} />
    </Stack>
  );
};

export default FlatsLayout;
