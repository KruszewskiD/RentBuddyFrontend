import { Text, View, StyleSheet, FlatList, Pressable } from "react-native";
import { invoices } from "../../../constants/dummy_data/invoices";
import { Link } from "expo-router";
import FlatCard from "@/components/Flats/FlatCard";
import InvoiceCard from "@/components/Invoices/InvoiceCard";
import AddButton from "@/components/Multipurpose/AddButton";
const InvoicesScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={invoices}
        keyExtractor={(flat) => flat.property_id.toString()}
        renderItem={({ item }) => {
          return (
            <Link href={`/invoices/${item.invoice_id}`} asChild>
              <Pressable>
                <InvoiceCard invoiceData={item} />
              </Pressable>
            </Link>
          );
        }}
        contentContainerStyle={{ gap: 10 }}
      ></FlatList>
      <AddButton href="/create-invoice" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 18,
  },
});

export default InvoicesScreen;
