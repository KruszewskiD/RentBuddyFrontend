import InputWithIcon from "@/components/Multipurpose/InputWithIcon";
import LabelInput from "@/components/Multipurpose/LabelInput";
import SimpleButton from "@/components/Multipurpose/SimpleButton";
import SimpleText from "@/components/Multipurpose/SimpleText";
import { View } from "react-native";

const CreatFlatScreen = () => {
  return (
    <View style={{ gap: 20, paddingVertical:10, paddingHorizontal:10 }}>
      <View style={{ gap: 10 }}>
        <InputWithIcon placeholder="Tytuł" icon="🏠" onChangeText={()=>{}}/>
        <InputWithIcon placeholder="Miasto" icon="🗺️" onChangeText={()=>{}}/>
        <InputWithIcon placeholder="Ulica" icon="📍" onChangeText={()=>{}}/>
        <InputWithIcon placeholder="Numer domu/mieszkania" icon="🔢" onChangeText={()=>{}}/>
        <InputWithIcon placeholder="Opis" icon="🔢" onChangeText={()=>{}}/>
      </View>
      <View>
        <SimpleButton title="Stwórz mieszkanie" onPress={() => {}} />
      </View>
    </View>
  );
};

export default CreatFlatScreen;
