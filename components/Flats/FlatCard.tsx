import { Text, View } from "react-native";
import { IFlatCard } from "@/interfaces/IFlatCard";

const FlatCard = ({ data }: { data: IFlatCard }) => {
  return (
    <View style={{ flex: 1, flexDirection: "column", borderWidth: 1 }}>
      <Text>Id:{data.property_id}</Text>
      <Text>Adres: {data.address}</Text>
      <Text>Właściciel:{data.owner_id}</Text>
      <Text>Najemca:{data.tenant_id || "undefined"}</Text>
    </View>
  );
};

export default FlatCard;
