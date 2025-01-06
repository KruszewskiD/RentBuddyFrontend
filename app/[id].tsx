import FlatCard from "@/components/Flats/FlatCard";
import { IFlatCard } from "@/interfaces/IFlatCard";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { properties } from "@/constants/dummy_data/properites";
import { useEffect } from "react";
const FlatScreen = () => {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  console.log(id);
  const data = properties.filter(
    (property) => property.property_id.toString() === id
  );

  useEffect(() => {
    navigation.setOptions({ title: data[0].address.split(",")[0] });
  }, [data, id]);

  return <FlatCard data={data[0]} />;
};

export default FlatScreen;
