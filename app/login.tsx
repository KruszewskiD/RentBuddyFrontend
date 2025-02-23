import { Text, View, StyleSheet, FlatList, Pressable, SectionList, TextInput, Button } from "react-native";
import InputWithIcon from "@/components/Multipurpose/InputWithIcon";
import SimpleButton from "@/components/Multipurpose/SimpleButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import { useState } from "react";
const LoginScreen = () => {
  const rentAsArray = "rent".split("")
  const buddyAsArray = "buddy".split("")
  type ILoginData = {
    email?:string,
    password?:string
  }

  const [loginData, setLoginData] = useState<ILoginData>({})
  console.log(loginData)
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
              <InputWithIcon placeholder="email" icon="👤" onChangeText={(email)=>{
                setLoginData((loginData)=>{ return {...loginData, email}})
              }} />
              <InputWithIcon placeholder="hasło" icon="🫥" secureTextEntry onChangeText={(password)=>{
                setLoginData((loginData)=>{ return {...loginData, password}})
              }}  />
          </View>
          <View style={{gap:10, flex:1}}>
              <SimpleButton title="Zaloguj się!" onPress={()=>{
                if(loginData.email==="daniel@data.rocks"&&loginData.password==="Gortn1500*"){
                  router.replace("/(app)/(tabs)/flats/")
                }else{
                  router.replace("/(app)/(tabs)/flats/")

                }
              }}/>
              <SimpleButton title="Zarejestruj się!" onPress={()=>{router.push("/sign_up")}}/>
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

export default LoginScreen;
