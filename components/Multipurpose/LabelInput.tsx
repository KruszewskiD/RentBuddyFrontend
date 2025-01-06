import { Text, TextInput, View } from "react-native";

type TLabelInput = {
  label: string;
  onChangeText?: (text: string) => void;
};

const LabelInput = ({ label, onChangeText }: TLabelInput) => {
  return (
    <View style={{ borderWidth: 1, flexDirection: "row", gap: 5 }}>
      <Text style={{ fontWeight: "bold" }}>{label}</Text>
      <TextInput style={{ flex: 1 }} onChangeText={onChangeText}></TextInput>
    </View>
  );
};

export default LabelInput;
