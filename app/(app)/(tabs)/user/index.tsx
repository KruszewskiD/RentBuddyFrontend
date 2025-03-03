import SimpleButton from "@/components/Multipurpose/SimpleButton";
import { useAuth } from "@/context/AuthContext";
import { Text, View, StyleSheet, Button } from "react-native";

const UserScreen = () => {
  const {authState, onLogout} = useAuth()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ekran Usera</Text>
      <SimpleButton onPress={onLogout} title="Wyloguj"></SimpleButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
});

export default UserScreen;
