import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { invoices } from "@/constants/dummy_data/invoices";
import { useEffect } from "react";
import InvoiceCard from "@/components/Invoices/InvoiceCard";
import { issues } from "@/constants/dummy_data/issues";
import IssueCard from "@/components/Issues/IssueCard";
import SimpleButton from "@/components/Multipurpose/SimpleButton";
const IssueScreen = () => {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  console.log(id);
  const data = issues.filter(
    (issue) => issue.issue_id.toString() === id
  );

  useEffect(() => {
    navigation.setOptions({ title: data[0].title});
  }, [data, id]);

  return (
  <>
    <IssueCard data={data[0]} length={1}/>
    <SimpleButton title="Potwierdź rozwiązanie problemu" onPress={() => {}} />
  </>);
};

export default IssueScreen;
