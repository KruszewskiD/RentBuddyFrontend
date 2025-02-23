import InputWithIcon from "@/components/Multipurpose/InputWithIcon";
import LabelInput from "@/components/Multipurpose/LabelInput";
import SimpleButton from "@/components/Multipurpose/SimpleButton";
import SimpleText from "@/components/Multipurpose/SimpleText";
import { View } from "react-native";

const CreatIssueScreen = () => {
  return (
    <View style={{ gap: 20, paddingVertical:10, paddingHorizontal:10 }}>
      <View style={{ gap: 10 }}>
        <InputWithIcon placeholder="Tytuł" icon="❌" onChangeText={()=>{}}/>
        <InputWithIcon placeholder="Opis problemu" icon="📨" onChangeText={()=>{}}/>
        <InputWithIcon placeholder="Data powstania problemu" icon="📅" onChangeText={()=>{}}/>
      </View>
      <View>
        <SimpleButton title="Zgłoś problem" onPress={() => {}} />
      </View>
    </View>
  );
};

export default CreatIssueScreen;
