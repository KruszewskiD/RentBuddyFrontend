import {  View } from "react-native";
import { TInvitation } from "@/types/TInvitation";
import SimpleText from "../Multipurpose/SimpleText";

const InvitationCard = ({ data, index, length }: { data: TInvitation, index?:number, length:number }) => {
  return (
    <View style={{ flexDirection: "column", borderBottomWidth: index==length-1?0:1, borderTopLeftRadius: index==0?20:0, borderTopRightRadius: index==0?20:0, borderBottomLeftRadius: index===length-1?20:0,borderBottomRightRadius: index===length-1?20:0, padding:10, backgroundColor: "#ddd", borderColor:"#ccc"}}>
      <SimpleText style={{fontWeight:"bold", fontSize:16}}>{data.property_id}</SimpleText>
      <SimpleText>{data.status}</SimpleText>
    </View>
  );
};

export default InvitationCard;
