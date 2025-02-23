import { GestureResponderEvent, Pressable, Text, View } from "react-native";

type TSimpleButton = {
  title: string;
  onPress: (callbackFn: GestureResponderEvent) => void;
};

const SimpleButton = ({ title, onPress }: TSimpleButton) => {
  return (
    <Pressable onPress={onPress}>
    <View style={{ flexDirection:"row", borderRadius:10, backgroundColor:"#ddd",padding:10, justifyContent:"center", alignItems:"center", borderWidth:1}}>
        <Text style={{fontSize:20, letterSpacing:1}}>{title}</Text>
    </View>
  </Pressable>
  );
};

export default SimpleButton;
