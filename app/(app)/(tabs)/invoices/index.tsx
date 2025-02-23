import { Text, View, StyleSheet, FlatList, Pressable, SectionList } from "react-native";
import { invoices } from "../../../../constants/dummy_data/invoices";
import { Link } from "expo-router";
import InvoiceCard from "@/components/Invoices/InvoiceCard";
const InvoicesScreen = () => {
  const userId = 2
  const sended = {title:"Wystawione", data:invoices.filter((invoice)=>{return invoice.sender_id===userId})}
  const recived = {title:"Do opłacenia", data:invoices.filter((invoice)=>{return invoice.receiver_id===userId})}
  const sectionListData = []
  sectionListData.push(recived)
  sectionListData.push(sended)
  console.log(sectionListData)
  return (
    <View style={styles.container}>

      <SectionList
        sections={sectionListData}
        keyExtractor={(flat) => flat.property_id.toString()}
        renderItem={({ item, index, section }) => {
          return (
            // <Link href={`/(tabs)/flats/${item.property_id}`} asChild>
            <Link href={`/invoices/${item.invoice_id}`} asChild>
              <Pressable>
                <InvoiceCard invoiceData={item} index={index} length={section.data.length}/>
              </Pressable>
            </Link>
          );
        }}
        stickySectionHeadersEnabled={false}
        renderSectionHeader={({section}) => (
          <>
          <Text style={{fontWeight:"bold", fontSize:24, marginVertical:5}}>{section.title}</Text>
          {section.data.length === 0 && (
            <Text style={{ fontStyle: 'italic', color: 'gray', marginHorizontal:"auto", marginVertical:20 }}>Brak faktur w tej kategorii :)</Text>
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

export default InvoicesScreen;
