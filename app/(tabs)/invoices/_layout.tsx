import { Stack } from "expo-router";

const InvoicesLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default InvoicesLayout;
