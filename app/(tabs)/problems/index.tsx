import { Text, View, StyleSheet, Button } from "react-native";

const Problems = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ekran Problemów</Text>
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

export default Problems;
