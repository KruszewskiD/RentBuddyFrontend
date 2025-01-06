import { GestureResponderEvent, Pressable, Text, View } from "react-native";

type TSimpleButton = {
  title: string;
  onPress: (callbackFn: GestureResponderEvent) => void;
};

const SimpleButton = ({ title, onPress }: TSimpleButton) => {
  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          backgroundColor: "green",
          width: 150,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 3,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default SimpleButton;
