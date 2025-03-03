import FlatCard from "@/components/Flats/FlatCard";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";
import SimpleButton from "@/components/Multipurpose/SimpleButton";
import SimpleText from "@/components/Multipurpose/SimpleText";
import axios from "axios";
import { TFlat } from "@/types/TFlat";

const FlatScreen = () => {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  const [flatData, setFlatData] = useState<TFlat | null>(null);

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:3000/property/${id}`,
    })
      .then((response) => {
        setFlatData(response.data);
      })
      .catch((error) => {
        console.error("Błąd podczas pobierania danych:", error);
      });
      
  }, []);

  useEffect(() => {
    if (flatData) {
      navigation.setOptions({ title: `${flatData.street} ${flatData.street_number}` });
    }
  }, [flatData, navigation]); // <== Uruchomi się tylko gdy `flatData` się zmieni


  return (
    <View style={{ flex: 1 }}>
      {flatData ? (
        <>
          <FlatCard data={flatData} length={0} index={1} />
          <SimpleText>{flatData.description}</SimpleText>
          <View style={{ gap: 20, margin:20, flex: 1 }}>
            <SimpleButton title="Wystaw fakturę" onPress={() => router.push("/create-invoice")} />
            {flatData.tenant_id ? (
              <SimpleButton title="Usuń najemcę" onPress={() => {}} />
            ) : (
              <SimpleButton title="Dodaj najemcę" onPress={() => {}} />
            )}
            <SimpleButton title="Umów wizytę" onPress={() => router.push("/(app)/create-meeting")} />
            <SimpleButton title="Zgłoś problem" onPress={() => router.push("/(app)/create-issue")} />
          </View>
        </>
      ) : (
        <SimpleText>Ładowanie danych...</SimpleText>
      )}
    </View>
  );
};

export default FlatScreen;
