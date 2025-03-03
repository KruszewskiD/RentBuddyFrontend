import { Text, View, StyleSheet, FlatList, Pressable, SectionList, TextInput, Button, SafeAreaView } from "react-native";
import { Link, router } from "expo-router";
import FlatCard from "@/components/Flats/FlatCard";
import InvoiceCard from "@/components/Invoices/InvoiceCard";
import AddButton from "@/components/Multipurpose/AddButton";
import InputWithIcon from "@/components/Multipurpose/InputWithIcon";
import SimpleButton from "@/components/Multipurpose/SimpleButton";
import SimpleText from "@/components/Multipurpose/SimpleText";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";


const SignupScreen = () => {
  const [signupData, setSignupData] = useState<{first_name: string, last_name: string, email: string, username: string, password: string, passwordRepeated:string, phone_number: string, role?: string}>({
    first_name:"",
    last_name: "",
    email:"",
    username:"",
    password:"",
    passwordRepeated:"",
    phone_number:"",
    role: "user"
  })
  const {onRegister, onLogin} = useAuth()

  const signupHandler = async ()=>{
    console.log(signupData)
    const hasNull = Object.values(signupData).some(value => value === "")
    if(hasNull){
      alert("Uzupełnij wszystkie wymagane pola!")
    }else{
      if(signupData.password!==signupData.passwordRepeated){
        alert("Hasła nie są takie same!")
        return
    }
    const result = await onRegister(signupData.first_name, signupData.last_name, signupData.email, signupData.username, signupData.password, signupData.phone_number)
      if(result && result.error){
        alert(result.msg)
      }else{
        const result = await onLogin!(signupData.username, signupData.password);
        if(result && result.error){
          alert(result.msg)
        }
      }
    }
  }

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
          <View style={{marginVertical:10}}>
                <SimpleText>Dane kontaktowe</SimpleText>
              </View>
              <InputWithIcon placeholder="Imię" icon="👤" onChangeText={(text)=>{
                setSignupData((prevData)=>{return {...prevData, first_name:text}})
              }} />
              <InputWithIcon placeholder="Nazwisko" icon="🧔‍♂️" onChangeText={(text)=>{
                 setSignupData((prevData)=>{return {...prevData, last_name:text}})
              }} />
              <InputWithIcon placeholder="Numer telefonu" icon="☎️" onChangeText={(text)=>{
                 setSignupData((prevData)=>{return {...prevData, phone_number:text}})
              }} />
              <InputWithIcon placeholder="E-mail" icon="📧" onChangeText={(text)=>{
                 setSignupData((prevData)=>{return {...prevData, email:text}})
              }} />
              <View style={{marginVertical:10}}>
                <SimpleText>Dane do logowania</SimpleText>
              </View>
              <InputWithIcon placeholder="Nazwa uzytkownika" icon="👨‍💻" onChangeText={(text)=>{
                 setSignupData((prevData)=>{return {...prevData, username:text}})
              }} />
              <InputWithIcon placeholder="Hasło" icon="🫥" secureTextEntry onChangeText={(text)=>{
                 setSignupData((prevData)=>{return {...prevData, password:text}})
              }}/>
              <InputWithIcon placeholder="Powtórz hasło" icon="🫥" secureTextEntry onChangeText={(text)=>{
                 setSignupData((prevData)=>{return {...prevData, passwordRepeated:text}})
              }}/>
          </View>
          <View style={{gap:10}}>
             <SimpleButton title="Zakładam konto!" onPress={signupHandler}/>
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
