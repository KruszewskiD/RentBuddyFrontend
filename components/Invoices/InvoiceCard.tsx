import { Text, View } from "react-native";
import SimpleText from "../Multipurpose/SimpleText";
import { TInvoice } from "@/types/TInvoice";

const InvoiceCard = ({ invoiceData, index, length }: { invoiceData: TInvoice, index?:number, length:number }) => {
  return (
    <View style={{ flexDirection: "column", borderBottomWidth: index==length-1?0:1, borderTopLeftRadius: index==0?20:0, borderTopRightRadius: index==0?20:0, borderBottomLeftRadius: index===length-1?20:0,borderBottomRightRadius: index===length-1?20:0, padding:10, backgroundColor: "#ddd", borderColor:"#ccc"}}>
      <SimpleText style={{fontWeight:"bold", fontSize:16}}>{invoiceData.invoice_title}</SimpleText>
      <SimpleText style={{fontSize:10}}>Zapłać do: {invoiceData.payment_deadline}</SimpleText>
      <SimpleText style={{ fontSize:14}}>{invoiceData.amount.toString()} PLN</SimpleText>
    </View>
  );
};

export default InvoiceCard;
