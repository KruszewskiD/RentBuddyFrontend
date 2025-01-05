import { Stack } from "expo-router";

const MeetingsLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default MeetingsLayout;
