import Dropdown from "@/components/Multipurpose/DropdownWithModal";
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
      <View style={{ flex: 1, padding: 10 }}>
        <SimpleText>Wybierz mieszkanie:</SimpleText>
        <Dropdown
          options={["1", "2", "3"]} // Przekazanie opcji
          value={selectedOption} // Aktualnie wybrana opcja
          setValue={setSelectedOption} // Funkcja aktualizująca wybraną opcję
        />
        <LabelInput label="Kwota:" />
        <SimpleButton title="Stwórz fakturę" onPress={() => {}} />
      </View>
    </GestureHandlerRootView>
  );
};
export default CreateInvoiceScreen;
