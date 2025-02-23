import { Text, View } from "react-native";
import { TFlat } from "@/types/TFlat";
import SimpleText from "../Multipurpose/SimpleText";
import { TIssue } from "@/types/TIssue";

const IssueCard = ({ data, index, length }: { data: TIssue, index?:number, length:number }) => {
  return (
    <View style={{ flexDirection: "column", borderBottomWidth: index==length-1?0:1, borderTopLeftRadius: index==0?20:0, borderTopRightRadius: index==0?20:0, borderBottomLeftRadius: index===length-1?20:0,borderBottomRightRadius: index===length-1?20:0, padding:10, backgroundColor: "#ddd", borderColor:"#ccc"}}>
      <SimpleText style={{fontWeight:"bold", fontSize:16}}>{data.title}</SimpleText>
      <SimpleText style={{ fontSize:12}}>{data.description}</SimpleText>
      <SimpleText style={{ fontSize:14}}>Status: {data.resolve_status.toUpperCase()}</SimpleText>
      <SimpleText style={{ fontSize:12}}>Zgłoszono: {new Date(data.date).toLocaleString("pl-PL", { dateStyle: "long", timeStyle: "short" })}</SimpleText>
    </View>
  );
};

export default IssueCard;
