import { View, Text, ScrollView,AppState, Alert } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChatBubbleLeftEllipsisIcon, CheckBadgeIcon, CheckCircleIcon, ChevronLeftIcon } from 'react-native-heroicons/solid'
import { Button, Input } from '@rneui/themed';
import { supabase } from './../libs/supabase';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import Avatar from '../components/Avatar';

AppState.addEventListener('change',(state) => {
  if(state === 'active'){
    supabase.auth.startAutoRefresh()
  }else{
    supabase.auth.stopAutoRefresh()
  }
})

const Register = () => {

  const [loading, setLoading] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState('');
  const [step,setStep] = useState(1);
  const [formData,setFormData] = useState({
    nationalId: '',
    phoneNumber: '',
    email: '',
    password: '',
    username:'',
    fullname:'',
    username:'',
    accountNumber:''
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  
  async function signUpWithEmail(){
    setLoading(true);
    const {
      data,
      error:signUpError
    } = await supabase.auth.signUp({
      email:formData.email,
      password:formData.password,
    });

    if(signUpError){
      Alert.alert(signUpError.message);
      console.error(signUpError)
      setLoading(false);
      return;
    }

    const user = data.user;
   
    const {error} = await supabase
      .from('profiles')
      .update(
        {
  
          avatar_url: avatarUrl,
          updated_at: new Date(),
          id_number: formData.nationalId,
          phone_number: formData.phoneNumber,
          full_name:formData.fullname,
          username:formData.username,
          account_number:formData.accountNumber
        })
        .eq('id', user.id);

      if(error){
        Alert.alert(error.message);
        console.log(error.message);
        setLoading(false);
        return;
      }
    Alert.alert("Please check your inbox for email verification!");
    
    setLoading(false);

  } 


  return (
    <GestureHandlerRootView>
       <View className="h-screen justify-between">
       <SafeAreaView className="pt-7 mx-7 sticky justify-between items-center top-0 z-50 pb-5 flex-row">
        <ChevronLeftIcon color={"black"}/>
        <Text className="font-bold text-xl">Register</Text>
        <ChatBubbleLeftEllipsisIcon color={"#2196F3"} size={30}/>
      </SafeAreaView>
      <ScrollView contentContainerStyle={{ paddingBottom: 20,justifyContent:"center",paddingLeft:20, paddingRight:20,marginTop:10,gap:10}}>
        <Text className="font-semibold text-xl">Create Your Profile</Text>
        <View className="flex-row gap-2 mb-4">
          <CheckCircleIcon size={20} color={"#2196F3"}/>
          <Text className="text-gray-600">Already a Jamii Member?</Text>
        </View>
        {step === 1 && (
          <>
            <Input 
              label={"National Id "} 
              placeholder={"Enter Your Id number"}
              value={formData.nationalId}
              onChangeText={(text) => setFormData({...formData,nationalId:text})}
              autoCapitalize='none'/>
            <Input 
              label={"Account number"} 
              placeholder={"Enter account number"}
              value={formData.accountNumber}
              onChangeText={(text) => setFormData({...formData,accountNumber:text})}
              autoCapitalize='none'/>
            <Input 
              label={"Phone number"} 
              placeholder={"Enter phone number"}
              value={formData.phoneNumber}
              onChangeText={(text) => setFormData({...formData,phoneNumber:text})}
              autoCapitalize='none'/>
            <Button title={"Next"} onPress={handleNext} disabled={!formData.nationalId || !formData.phoneNumber || !formData.accountNumber} />
          </>
        )}
          
      
        {step === 2 && (
          <>
            <Input 
              label={"Full Name"} 
              placeholder={"Enter your Full name"}
              value={formData.fullname}
              onChangeText={(text) => setFormData({...formData,fullname:text})}
              autoCapitalize='none'
              />
              
           <Input 
              label={"Email address"} 
              placeholder={"Enter email address"}
              value={formData.email}
              onChangeText={(text) => setFormData({...formData,email:text})}
              autoCapitalize='none'/>
          
              <Button title={"Next"} onPress={handleNext} disabled={!formData.fullname || !formData.email} />
          </>
        )}
        {step === 3 && (
          <>
                <View className="items-center">
                <Avatar
      url={avatarUrl}
      size={150}
      onUpload={(url) => setAvatarUrl(url)}
    />
       
             <Input 
              label={"Username"} 
              placeholder={"Enter your username"}
              value={formData.username}
              onChangeText={(text) => setFormData({...formData,username:text})}
              autoCapitalize='none'
              />

            <Input 
              label={"Password"} 
              placeholder={"Enter email password"}
              value={formData.password}
              secureTextEntry={true}
              onChangeText={(text) => setFormData({...formData,password:text})}
              autoCapitalize='none'
              />
 
     <View className="w-3/4">
     <Button title={"Register"} disabled={loading} onPress={() => signUpWithEmail()}/>
     </View>
  </View>
            
          </>
        )}
      </ScrollView>
     
    
      
    </View>
    </GestureHandlerRootView>
   
  )
}

export default Register