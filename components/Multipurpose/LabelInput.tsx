import { Text, TextInput, View } from "react-native";

type TLabelInput = {
  label: string;
  onChangeText?: (text: string) => void;
};

const LabelInput = ({ label, onChangeText }: TLabelInput) => {
  return (
    <View style={{ flexDirection: "column", gap: 5 }}>
      <Text style={{ fontWeight: "bold" }}>{label}</Text>
      <TextInput
        style={{ borderWidth: 1, paddingVertical: 10, paddingHorizontal: 5 }}
        onChangeText={onChangeText}
      ></TextInput>
    </View>
  );
};

export default LabelInput;
