import { Text, View } from "react-native";
import { TFlat } from "@/types/TFlat";

const FlatCard = ({ data }: { data: TFlat }) => {
  return (
    <View style={{ flexDirection: "column", borderWidth: 1 }}>
      <Text>Id:{data.property_id}</Text>
      <Text>Adres: {data.address}</Text>
      <Text>Właściciel:{data.owner_id}</Text>
      <Text>Najemca:{data.tenant_id || "undefined"}</Text>
    </View>
  );
};

export default FlatCard;
