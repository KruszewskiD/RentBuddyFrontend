import { Text, TextInput, View } from "react-native";


const InputWithIcon = ({placeholder, icon, secureTextEntry, onChangeText }:{placeholder:string, icon:string, secureTextEntry?:boolean, onChangeText:(arg0: string)=>void}) => {
  return (
    <View style={{borderWidth:1, flexDirection:"row", borderRadius:10, borderColor:"#aaa"}}>
        <View style={{justifyContent:"center", alignItems:"center", marginHorizontal:10}}>
        <Text>{ icon }</Text>
        </View>
        <TextInput style={{height: 40,  padding: 10, fontSize:20, flex:1}} 
          secureTextEntry={secureTextEntry} 
          placeholder={placeholder} 
          autoCapitalize="none"
          onChangeText={onChangeText}/>
    </View>

  )
};

export default InputWithIcon;
