import { Text, View } from "react-native";
import { TMeeting } from "@/types/TMeeting";
import SimpleText from "../Multipurpose/SimpleText";

const MeetingCard = ({ data, index, length }: { data: TMeeting, index?:number, length:number }) => {
  return (
    <View style={{ flexDirection: "column", borderBottomWidth: index==length-1?0:1, borderTopLeftRadius: index==0?20:0, borderTopRightRadius: index==0?20:0, borderBottomLeftRadius: index===length-1?20:0,borderBottomRightRadius: index===length-1?20:0, padding:10, backgroundColor: "#ddd", borderColor:"#ccc"}}>
      <SimpleText style={{fontWeight:"bold", fontSize:16}}>{data.title}</SimpleText>
      <SimpleText style={{ fontSize:12}}>{new Date(data.start_time).toLocaleString("pl-PL", { dateStyle: "long", timeStyle: "short" })}</SimpleText>
      <SimpleText style={{ fontSize:14}}>Status: {data.status.toUpperCase()}</SimpleText>
    </View>
  );
};

export default MeetingCard;
