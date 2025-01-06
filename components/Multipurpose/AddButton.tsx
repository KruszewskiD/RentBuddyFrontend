import { Href, router, useNavigation } from "expo-router";
import { Pressable, Text, View } from "react-native";

const AddButton = ({ href }: { href: Href }) => {
  return (
    <Pressable
      onPress={() => {
        router.push(href);
      }}
    >
      <View
        style={[
          {
            position: "absolute",
            bottom: 10,
            right: 10,
            width: 50,
            height: 50,
            backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
          },
        ]}
      >
        <Text style={{ color: "white", fontSize: 30 }}>+</Text>
      </View>
    </Pressable>
  );
};

export default AddButton;
