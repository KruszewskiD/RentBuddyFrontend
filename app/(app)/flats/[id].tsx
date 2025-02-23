import FlatCard from "@/components/Flats/FlatCard";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { properties } from "@/constants/dummy_data/properites";
import { useEffect } from "react";
import { View } from "react-native";
import SimpleButton from "@/components/Multipurpose/SimpleButton";
import SimpleText from "@/components/Multipurpose/SimpleText";
const FlatScreen = () => {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  console.log(id);
  const data = properties.filter(
    (property) => property.property_id.toString() === id
  );

  useEffect(() => {
    navigation.setOptions({ title: data[0].street+" "+data[0].street_number});
  }, [data, id]);

  return (
    <View style={{flex:1}}>
      <FlatCard data={data[0]} length={0} index={1}/>
      <SimpleText>{data[0].description}</SimpleText>
      <View style={{ gap: 20, marginVertical: 20, flex:1, backgroundColor:"red"}}>
        <SimpleButton title="Wystaw fakturę" onPress={() => {}} />

        {data[0].tenant_id ? (
          <SimpleButton title="Usuń najemcę" onPress={() => {}} />
        ) : (
          <SimpleButton title="Dodaj najemcę" onPress={() => {}} />
        )}

        <SimpleButton title="Umów wizytę" onPress={() => {}} />

        <SimpleButton title="Zgłoś problem" onPress={() => {}} />
      </View>
    </View>
  );
};

export default FlatScreen;
