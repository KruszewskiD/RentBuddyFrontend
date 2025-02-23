import IssueCard from "@/components/Issues/IssueCard";
import MeetingCard from "@/components/Meetings/MeetingCard";
import { issues } from "@/constants/dummy_data/issues";
import { Link } from "expo-router";
import { Text, View, StyleSheet, Button, SectionList, Pressable } from "react-native";

const ProblemsScreen = () => {
  const userId = 2
  const reportedProblems = {title:"Zgłoszone problemy", data:issues.filter((issue)=>{return issue.tenant_id===userId}).filter((issue)=>{return issue.resolve_status !== "resolved"})}
  const problemsToSolve = {title:"Problemy do rozwiązania", data:issues.filter((issue)=>{return issue.owner_id===userId}).filter((issue)=>{return issue.resolve_status==="pending"})}
  const sectionListData = []
  sectionListData.push(problemsToSolve)
  sectionListData.push(reportedProblems)
  console.log(sectionListData)
  return (
    <View style={styles.container}>
      <SectionList
        sections={sectionListData}
        keyExtractor={(item) => item.issue_id.toString()}
        renderItem={({ item, index, section }) => {
          return (
            <Link href={`/issues/${item.issue_id.toString()}`} asChild>
              <Pressable>
                <IssueCard data={item} index={index} length={section.data.length}/>
              </Pressable>
            </Link>
          );
        }}
        stickySectionHeadersEnabled={false}
        renderSectionHeader={({section}) => (
          <>
          <Text style={{fontWeight:"bold", fontSize:24, marginVertical:5}}>{section.title}</Text>
          {section.data.length === 0 && (
            <Text style={{ fontStyle: 'italic', color: 'gray', marginHorizontal:"auto", marginVertical:20 }}>Brak problemów w tej kategorii :)</Text>
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

export default ProblemsScreen;
