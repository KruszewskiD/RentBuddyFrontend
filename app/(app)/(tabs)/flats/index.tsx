import {
  Text,
  View,
  StyleSheet,
  Button,
  FlatList,
  Pressable,
  SectionList,
} from "react-native";
import { properties } from "../../../../constants/dummy_data/properites";
import FlatCard from "@/components/Flats/FlatCard";
import { Link } from "expo-router";
const FlatsScreen = () => {
  const userId = 2
  const rented = {title:"Wynajęte", data:properties.filter((property)=>{return property.tenant_id===userId})}
  const owned = {title:"Moje Mieszkania", data:properties.filter((property)=>{return property.owner_id===userId})}
  const sectionListData = []
  sectionListData.push(rented)
  sectionListData.push(owned)
  console.log(sectionListData)
  return (
    <View style={styles.container}>
      <SectionList
        sections={sectionListData}
        keyExtractor={(flat) => flat.property_id.toString()}
        renderItem={({ item, index, section }) => {
          return (
            // <Link href={`/(tabs)/flats/${item.property_id}`} asChild>
            <Link href={`/flats/${item.property_id}`} asChild>
              <Pressable>
                <FlatCard data={item} index={index} length={section.data.length}/>
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

export default FlatsScreen;
