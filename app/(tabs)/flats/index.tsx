import {
  Text,
  View,
  StyleSheet,
  Button,
  FlatList,
  Pressable,
} from "react-native";
import { properties } from "../../../constants/dummy_data/properites";
import FlatCard from "@/components/Flats/FlatCard";
import { Link } from "expo-router";
import AddButton from "@/components/Multipurpose/AddButton";
const FlatsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={properties}
        keyExtractor={(flat) => flat.property_id.toString()}
        renderItem={({ item }) => {
          return (
            // <Link href={`/(tabs)/flats/${item.property_id}`} asChild>
            <Link href={`/flats/${item.property_id}`} asChild>
              <Pressable>
                <FlatCard data={item} />
              </Pressable>
            </Link>
          );
        }}
        contentContainerStyle={{ gap: 10 }}
      ></FlatList>
      <AddButton href="/create-flat" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 18,
  },
});

export default FlatsScreen;
