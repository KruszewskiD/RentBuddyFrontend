import { Stack } from "expo-router";

const ProblemsLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default ProblemsLayout;
