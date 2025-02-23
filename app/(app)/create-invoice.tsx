import Dropdown from "@/components/Multipurpose/DropdownWithModal";
import InputWithIcon from "@/components/Multipurpose/InputWithIcon";
import LabelInput from "@/components/Multipurpose/LabelInput";
import SimpleButton from "@/components/Multipurpose/SimpleButton";
import SimpleText from "@/components/Multipurpose/SimpleText";
import { useEffect, useState } from "react";

import { Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const CreateInvoiceScreen = () => {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 10, gap:10 }}>
        <InputWithIcon placeholder="Tytuł faktury" icon="🧾" onChangeText={()=>{}}/>
        <InputWithIcon placeholder="Wartość faktury" icon="💵" onChangeText={()=>{}}/>
        <InputWithIcon placeholder="Data płatności" icon="📅" onChangeText={()=>{}}/>
        <SimpleButton title="Stwórz fakturę" onPress={() => {}} />
      </View>
    </GestureHandlerRootView>
  );
};
export default CreateInvoiceScreen;
