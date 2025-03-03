import FlatCard from "@/components/Flats/FlatCard";
import { router, useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { properties } from "@/constants/dummy_data/properites";
import { useEffect } from "react";
import { View } from "react-native";
import SimpleButton from "@/components/Multipurpose/SimpleButton";
import SimpleText from "@/components/Multipurpose/SimpleText";
import { invitations } from "@/constants/dummy_data/invitations";
const InvitationsScreen = () => {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  console.log(id);
  const data = properties.filter(
    (property) => property.property_id.toString() === id
  );

  const invitation = invitations.filter(
    (invitation) => {if(invitation.property_id.toString()===id)
      console.log(invitation)
       return invitation}
  )

  useEffect(() => {
    navigation.setOptions({ title: data[0].street+" "+data[0].street_number});
  }, [data, id]);

  return (
    <View style={{flex:1}}>
      <FlatCard data={data[0]} length={0} index={1}/>
      <SimpleText>{data[0].description}</SimpleText>
      {/* WARUNEK */}

      { invitation[0].status==="pending"?

      <View style={{ gap: 20, marginVertical: 20, flex:1}}>
        <SimpleButton title="Wystaw fakturę" onPress={() => {
          router.push("/create-invoice")
        }} />
      
      
      {/* WARUNEK */}
        {data[0].tenant_id ? (
          <SimpleButton title="Usuń najemcę" onPress={() => {}} />
        ) : (
          <SimpleButton title="Dodaj najemcę" onPress={() => {}} />
        )}
      {/* WARUNEK */}
      
      
      
        <SimpleButton title="Umów wizytę" onPress={() => {
          router.push("/(app)/create-meeting")
        }} />

        <SimpleButton title="Zgłoś problem" onPress={() => {
          router.push("/(app)/create-issue")
        }} /> 
         
      </View>
      :
      <View style={{ gap: 20, marginVertical: 20, flex:1}}>
        <SimpleButton title="Zaakceptuj zaproszenie" onPress={() => {
       }} />
       </View>
      }
      
    </View>
  );
};

export default InvitationsScreen;
