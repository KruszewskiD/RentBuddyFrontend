import { Text, View, StyleSheet, Button } from "react-native";

const Flats = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ekran Mieszkań</Text>
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

export default Flats;
