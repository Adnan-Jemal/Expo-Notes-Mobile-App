import { Redirect, Stack } from "expo-router";

const ProtectedLayout = () => {
  const user = false;
  if (user) {
    return <Redirect href={"/login"} />;
  }
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default ProtectedLayout;
