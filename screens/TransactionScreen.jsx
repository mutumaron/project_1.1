import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React,{useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationButton from '../components/NavigationButton';
import { Button, Input } from '@rneui/themed'
import { supabase } from '../libs/supabase';



const TransactionScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown:false,
    })
  },[]);  

  return (
    <View className="flex-1 mx-2 bg-blue-50">
      <SafeAreaView className="pt-7 mx-7 sticky top-0 z-50 pb-5">
          <Text className="font-semibold text-xl text-center">Menu</Text>
      </SafeAreaView>
      <ScrollView contentContainerStyle={{ paddingBottom: 20,justifyContent:"center",paddingLeft:20, paddingRight:20,marginTop:10,gap:10}}>
      <NavigationButton route={"Notification"} title={"Notification"} content={"Jamii Yetu Sacco offers a variety of loan products tailored to meet the needs"} icon={"bell"}/>
      <NavigationButton route={"Savings"} title={"Savings"} content={"Jamii Yetu Sacco offers a variety of loan products tailored to meet the needs"} icon={"notes"}/>
      <NavigationButton route={"Loans"} title={"Loans"} content={"Jamii Yetu Sacco offers a variety of loan products tailored to meet the needs"} icon={"credit"}/>
      <NavigationButton route={"Contact"} title={"Contact/Support"} content={"Jamii Yetu Sacco offers a variety of loan products tailored to meet the needs"} icon={"phone"}/>
      <View className="pt-5">
        <Button title={"Log Out"} onPress={() => supabase.auth.signOut()}/>
      </View>
      </ScrollView>
    </View>
  );
};

export default TransactionScreen