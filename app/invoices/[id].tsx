import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { invoices } from "@/constants/dummy_data/invoices";
import { useEffect } from "react";
import InvoiceCard from "@/components/Invoices/InvoiceCard";
const InvoiceScreen = () => {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  console.log(id);
  const data = invoices.filter(
    (invoices) => invoices.invoice_id.toString() === id
  );

  useEffect(() => {
    navigation.setOptions({ title: data[0].invoice_id.toString() });
  }, [data, id]);

  return <InvoiceCard invoiceData={data[0]} />;
};

export default InvoiceScreen;
