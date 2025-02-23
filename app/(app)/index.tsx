import { Redirect } from "expo-router";

const StartPageRedirect = () => {
  const isUserLoggedIn = false
  if (isUserLoggedIn)return <Redirect href="/flats" />;
  if (!isUserLoggedIn)return <Redirect href="/login" />;
};

export default StartPageRedirect;
