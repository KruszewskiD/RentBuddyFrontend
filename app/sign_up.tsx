import { Text, View, StyleSheet, FlatList, Pressable, SectionList, TextInput, Button, SafeAreaView } from "react-native";
import { Link, router } from "expo-router";
import FlatCard from "@/components/Flats/FlatCard";
import InvoiceCard from "@/components/Invoices/InvoiceCard";
import AddButton from "@/components/Multipurpose/AddButton";
import InputWithIcon from "@/components/Multipurpose/InputWithIcon";
import SimpleButton from "@/components/Multipurpose/SimpleButton";
const SignupScreen = () => {
  const rentAsArray = "rent".split("")
  const buddyAsArray = "buddy".split("")
  return(
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
      <View style={{flex:1, justifyContent:"space-between"}}> 
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
          {
            rentAsArray.map((letter,index)=><Text key={index} style={{fontSize:50}}>{letter}</Text>)
          }
        </View>
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
          {
            buddyAsArray.map((letter,index)=><Text key={index} style={{fontSize:50}}>{letter}</Text>)
          }
        </View>
      </View>
      <View style={{flex:4, gap:20, marginTop:30}}>
        {/* INPUTY */}
          <View style={{gap:10}}>
              <InputWithIcon placeholder="email" icon="👤" onChangeText={(text)=>{}} />
              <InputWithIcon placeholder="hasło" icon="🫥" secureTextEntry onChangeText={(text)=>{}}/>
              <InputWithIcon placeholder="powtórz hasło" icon="🫥" secureTextEntry onChangeText={(text)=>{}}/>
          </View>
          <View style={{gap:10}}>
             <SimpleButton title="Zakładam konto!" onPress={()=>{}}/>
             <SimpleButton title="Masz konto? Zaloguj się!" onPress={()=>{router.back()}}/>
          </View>
      </View>
    </View>
    </SafeAreaView>
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

export default SignupScreen;
