import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { invoices } from "@/constants/dummy_data/invoices";
import { useEffect } from "react";
import MeetingCard from "@/components/Meetings/MeetingCard";
import { meetings } from "@/constants/dummy_data/meetings";
import SimpleButton from "@/components/Multipurpose/SimpleButton";
const MeetingScreen = () => {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  console.log(id);
  const data = meetings.filter(
    (meeting) => meeting.meeting_id.toString() === id
  );

  useEffect(() => {
    navigation.setOptions({ title: data[0].title});
  }, [data, id]);

  return (
  <>
  <MeetingCard data={data[0]} length={1}/>
  <SimpleButton title="Zaakceptuj spotkanie" onPress={() => {}} />
  <SimpleButton title="Odrzuć spotkanie" onPress={() => {}} />
  </>
  );
};

export default MeetingScreen;
