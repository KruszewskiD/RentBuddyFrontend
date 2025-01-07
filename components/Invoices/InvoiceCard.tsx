import { Text, View } from "react-native";
import SimpleText from "../Multipurpose/SimpleText";
import { TInvoice } from "@/types/TInvoice";

const InvoiceCard = ({ invoiceData }: { invoiceData: TInvoice }) => {
  return (
    <View
      style={[
        { flexDirection: "column", borderWidth: 1, flex: 1 },
        { backgroundColor: invoiceData.status == "paid" ? "green" : "red" },
      ]}
    >
      <SimpleText>Id: {invoiceData.invoice_id.toString()}</SimpleText>
      <SimpleText>Ilość: {invoiceData.amount.toString()} PLN</SimpleText>
      <SimpleText>
        Wysłane przez ID: {invoiceData.sender_id.toString()}
      </SimpleText>
      <SimpleText>
        Odebrane przez ID: {invoiceData.receiver_id.toString()}
      </SimpleText>
      <SimpleText>Stworzone: {invoiceData.created_at}</SimpleText>
      <SimpleText>Ostatnia aktualizacja: {invoiceData.updated_at}</SimpleText>
      <SimpleText>Status: {invoiceData.status}</SimpleText>
    </View>
  );
};

export default InvoiceCard;
