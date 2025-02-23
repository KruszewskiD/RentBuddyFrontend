import InputWithIcon from "@/components/Multipurpose/InputWithIcon";
import LabelInput from "@/components/Multipurpose/LabelInput";
import SimpleButton from "@/components/Multipurpose/SimpleButton";
import SimpleText from "@/components/Multipurpose/SimpleText";
import { View } from "react-native";

const CreatMeetingScreen = () => {
  return (
    <View style={{ gap: 20, paddingVertical:10, paddingHorizontal:10 }}>
      <View style={{ gap: 10 }}>
        <InputWithIcon placeholder="Tytuł" icon="🤝" onChangeText={()=>{}}/>
        <InputWithIcon placeholder="Opis spotkania" icon="🤷‍♂️" onChangeText={()=>{}}/>
        <InputWithIcon placeholder="Data spotkania DD/MM/RRRR" icon="📅" onChangeText={()=>{}}/>
        <InputWithIcon placeholder="Godzina spotkania GG:MM" icon="⏰" onChangeText={()=>{}}/>
        <InputWithIcon placeholder="Czas trwania w minutach" icon="⏳" onChangeText={()=>{}}/>
      </View>
      <View>
        <SimpleButton title="Zaplanuj wizytę" onPress={() => {}} />
      </View>
    </View>
  );
};

export default CreatMeetingScreen;
