import LabelInput from "@/components/Multipurpose/LabelInput";
import SimpleButton from "@/components/Multipurpose/SimpleButton";
import SimpleText from "@/components/Multipurpose/SimpleText";
import { View } from "react-native";

const CreatFlatScreen = () => {
  return (
    <View style={{ gap: 10 }}>
      <SimpleText>Stwórz mieszkanie:</SimpleText>
      <View style={{ gap: 5 }}>
        <LabelInput label="Miasto:" />
        <LabelInput label="Kod pocztowy:" />
        <LabelInput label="Osiedle:" />
        <LabelInput label="Ulica:" />
        <LabelInput label="Numer domu:" />
        <LabelInput label="Numer mieszkania:" />
      </View>
      <View style={{ alignItems: "center" }}>
        <SimpleButton title="Przycisk" onPress={() => {}} />
      </View>
    </View>
  );
};

export default CreatFlatScreen;
