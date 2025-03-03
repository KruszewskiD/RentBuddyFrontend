import {
  Text,
  View,
  StyleSheet,
  Button,
  FlatList,
  Pressable,
  SectionList,
} from "react-native";
import { invitations } from "../../../../constants/dummy_data/invitations";
import FlatCard from "@/components/Flats/FlatCard";
import { Link } from "expo-router";
import InvitationCard from "@/components/Invitations/InvitationCard";
const InvitationsScreen = () => {
  const userId = 2
  const sendedInvitations = {title:"Wysłane zaproszenia", data:invitations.filter((invitation)=>{return invitation.tenant_id===userId && invitation.status==="pending"})}
  const recivedInvitations = {title:"Zaproszenia", data:invitations.filter((invitation)=>{return invitation.owner_id===userId && invitation.status==="pending"})}
  const sectionListData = []
  sectionListData.push(recivedInvitations)
  sectionListData.push(sendedInvitations)
  console.log(sectionListData)
  return (
    <View style={styles.container}>
      <SectionList
        sections={sectionListData}
        keyExtractor={(flat) => flat.property_id.toString()}
        renderItem={({ item, index, section }) => {
          return (
            // <Link href={`/(tabs)/flats/${item.property_id}`} asChild>
            <Link href={`/invitations/${item.property_id}`} asChild>
              <Pressable>
                <InvitationCard data={item} index={index} length={section.data.length}/>
              </Pressable>
            </Link>
          );
        }}
        stickySectionHeadersEnabled={false}
        renderSectionHeader={({section}) => (
          <>
          <Text style={{fontWeight:"bold", fontSize:24, marginVertical:5}}>{section.title}</Text>
          {section.data.length === 0 && (
            <Text style={{ fontStyle: 'italic', color: 'gray', marginHorizontal:"auto", marginVertical:20 }}>Brak mieszkań w tej kategorii :(</Text>
          )}
          </>
        )}
        
      />





    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal:10
  },
  text: {
    fontSize: 18,
  },
});

export default InvitationsScreen;
