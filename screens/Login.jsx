import { View, Text, ScrollView, AppState, Alert} from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChatBubbleLeftEllipsisIcon, ChevronLeftIcon } from 'react-native-heroicons/solid'
import { Button, Input } from '@rneui/themed'
import { supabase } from '../libs/supabase'

AppState.addEventListener('change',(state) => {
  if(state === 'active'){
    supabase.auth.startAutoRefresh()
  }else{
    supabase.auth.stopAutoRefresh()
  }
})

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function signInWithEmail(){
    setLoading(true);
    const {error} = await supabase.auth.signInWithPassword({
      email:email,
      password:password,
    });
    if(error)Alert.alert(error.message)
      setLoading(false)
  }



  return (
  
       <View className="justify-between ">
      <SafeAreaView className="pt-7 mx-7 sticky justify-between items-center top-0 z-50 pb-5 flex-row">
        <ChevronLeftIcon color={"black"}/>
        <Text className="font-bold text-xl">Login</Text>
        <ChatBubbleLeftEllipsisIcon color={"#2196F3"} size={30}/>
      </SafeAreaView>
      <ScrollView contentContainerStyle={{ paddingBottom: 20,justifyContent:"center",paddingLeft:20, paddingRight:20,marginTop:10,gap:10}}>
        <Text className="font-semibold text-xl">Hello there,</Text>
        <Text className="text-gray-600 mb-4">Login to continue.Remember,your password is yours,do not share it with anyone</Text>
      <Input 
        label={"Email address or mobile number"}
        placeholder={"Email address or mobile number"} 
        leftIcon={{type:"font-awesome",name:"envelope"}}
        onChangeText={(text) => setEmail(text)}
        value={email}
        autoCapitalize={"none"}/>
      
      <Input 
        label={"Password"} 
        placeholder={"Enter Password"}
        leftIcon={{type:"font-awesome",name:"lock"}}
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
        autoCapitalize='none'
        />
      <Text className="font-semibold text-[#2196F3]">Forgot your password?</Text>
     
      </ScrollView>
      <View className="mx-7 mb-3">
        <Button title="Login" disabled={loading} onPress={() => signInWithEmail()}/>
      </View>
    </View>
 
   
  )
}

export default Login;