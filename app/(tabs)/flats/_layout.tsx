import { Stack } from "expo-router";

const FlatsLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default FlatsLayout;
