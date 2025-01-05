import { Text, View, StyleSheet } from "react-native";

const Meetings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ekran Spotkań</Text>
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

export default Meetings;
