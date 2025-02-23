
import MeetingCard from "@/components/Meetings/MeetingCard";
import { meetings } from "@/constants/dummy_data/meetings";
import { Link } from "expo-router";
import { Text, View, StyleSheet, SectionList, Pressable } from "react-native";

const MeetingsScreen = () => {
  const userId = 2
  const scheduledMeetings = {title:"Umówione spotkania", data:meetings.filter((meeting)=>{return meeting.participant_id===userId}).filter((meeting)=>{return meeting.status!=="accepted"})}
  const meetingsInvitation = {title:"Zaproszenia", data:meetings.filter((meeting)=>{return meeting.creator_id===userId||meeting.participant_id===userId}).filter((meeting)=>{return meeting.status==="accepted"})}
  const sectionListData = []
  sectionListData.push(meetingsInvitation)
  sectionListData.push(scheduledMeetings)
  console.log(sectionListData)
  return (
    <View style={styles.container}>
      <SectionList
        sections={sectionListData}
        keyExtractor={(meeting) => meeting.meeting_id.toString()}
        renderItem={({ item, index, section }) => {
          return (
            <Link href={`/meetings/${item.meeting_id}`} asChild>
              <Pressable>
                <MeetingCard data={item} index={index} length={section.data.length}/>
              </Pressable>
            </Link>
          );
        }}
        stickySectionHeadersEnabled={false}
        renderSectionHeader={({section}) => (
          <>
          <Text style={{fontWeight:"bold", fontSize:24, marginVertical:5}}>{section.title}</Text>
          {section.data.length === 0 && (
            <Text style={{ fontStyle: 'italic', color: 'gray', marginHorizontal:"auto", marginVertical:20 }}>Brak mieszkań w tej kategorii :(</Text>
          )}
          </>
        )}
        
      />





    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal:10
  },
  text: {
    fontSize: 18,
  },
});

export default MeetingsScreen;
