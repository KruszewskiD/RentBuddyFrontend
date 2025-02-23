import { Text, View } from "react-native";
import { TFlat } from "@/types/TFlat";
import SimpleText from "../Multipurpose/SimpleText";

const FlatCard = ({ data, index, length }: { data: TFlat, index?:number, length:number }) => {
  return (
    <View style={{ flexDirection: "column", borderBottomWidth: index==length-1?0:1, borderTopLeftRadius: index==0?20:0, borderTopRightRadius: index==0?20:0, borderBottomLeftRadius: index===length-1?20:0,borderBottomRightRadius: index===length-1?20:0, padding:10, backgroundColor: "#ddd", borderColor:"#ccc"}}>
      <SimpleText style={{fontWeight:"bold", fontSize:16}}>{data.title}</SimpleText>
      <SimpleText>{data.city}, {data.street} {data.street_number}</SimpleText>
      <SimpleText>Status: {data.tenant_id?"Wynajęte":"Wolne"}</SimpleText>
    </View>
  );
};

export default FlatCard;
