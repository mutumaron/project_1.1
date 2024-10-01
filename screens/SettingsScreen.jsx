import { View, Text, ScrollView, Image } from 'react-native'
import React,{useEffect, useState} from 'react'
import ToggleButton from '../components/ToggleButton'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronRightIcon } from 'react-native-heroicons/outline'
import { useUserData } from '../store/AppContext'
import { Button } from '@rneui/themed'
import Avatar from './../components/Avatar';

const SettingsScreen = () => {
  const { avatarUrl, loading, error } = useUserData();
  
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown:false,
    });
  }, []);
  return (
    <View className="mx-2 flex-1 ">
      <SafeAreaView className="pt-7 mx-7 sticky top-0 z-50 pb-5">
            <Text className="font-semibold text-xl text-center">Settings</Text>
    </SafeAreaView>
    <ScrollView contentContainerStyle={{ paddingBottom: 20,justifyContent:"center",paddingLeft:20, paddingRight:20}}>
   <View className="items-center">
   <View className="items-center mt-4 rounded-full bg-gray-400 p-2">
   {avatarUrl && (
                <Image 
                  source={{
                      uri: avatarUrl
                  }}
                  
                  className="h-20 w-20 bg-white p-4 rounded-full items-center"/>
            )}
      </View>
   </View>
      <View>
        <Text className="pt-7 font-bold text-gray-500 pb-3">Theme</Text>
        <View className="flex-row items-center justify-between bg-white rounded-lg shadow-xl px-2 py-3 ">
          <Text>Dark Mode</Text>
          <ToggleButton/>
        </View>
      </View>
      <View>
        <Text className="pt-7 font-bold text-gray-500 pb-3">Notification</Text>
       <View className="bg-white rounded-lg shadow-xl px-2 py-3">
       <View className="flex-row items-center justify-between  ">
          <View className="w-3/4 gap-2">
            <Text>Payment Alert</Text>
            <Text className="text-gray-500">Send notification when new payment received</Text>
          </View>
          <ToggleButton/>
        </View>
        <View className="w-full border-t border-gray-300 my-4" />
        <View className="flex-row justify-between">
          <Text>Notification Sound</Text>
          <View className="flex-row gap-1">
            <Text className="text-[#01BAEF]">Beep</Text>
            <ChevronRightIcon size={20} color={"black"}/>
          </View>
        </View>
       </View>
      </View>
      <View className="">
        <Text className="pt-7 font-bold text-gray-500 pb-3">Profile Settings</Text>
       <View className="bg-white rounded-lg shadow-xl px-2 py-3">
          <View>
          <View className="flex-row justify-between">
            <Text>Change UserName</Text>
            <ChevronRightIcon size={20} color={"black"}/>
          </View>
            <View className="w-full border-t border-gray-300 my-4" />
          </View>
          <View>
          <View className="flex-row justify-between">
            <Text>Update E-mail</Text>
            <ChevronRightIcon size={20} color={"black"}/>
          </View>
            <View className="w-full border-t border-gray-300 my-4" />
          </View>
          <View>
          <View>
          <View className="flex-row justify-between">
            <Text>Private Profile</Text>
            <ChevronRightIcon size={20} color={"black"}/>
          </View>
            <View className="w-full border-t border-gray-300 my-4" />
          </View>
          <View className="flex-row justify-between">
            <Text>Address</Text>
            <View className="flex-row gap-1">
              <Text className="text-[#01BAEF]">Edit</Text>
            <ChevronRightIcon size={20} color={"black"}/>
            </View>
          </View>
            <View className="w-full border-t border-gray-300 my-4" />
          </View>
       </View>
      </View>


      <View className="pt-7">
        <Text className=" font-bold text-gray-500 pb-3">Security</Text>
       <View className="bg-white rounded-lg shadow-xl px-2 py-3">
          <View>
          <View className="flex-row justify-between">
            <Text>Change UserName</Text>
            <ChevronRightIcon size={20} color={"black"}/>
          </View>
            <View className="w-full border-t border-gray-300 my-4" />
          </View>
          <View>
          <View className="flex-row justify-between items-center">
            <Text>2 factor Authentication</Text>
            <ToggleButton/>
          </View>
            <View className="w-full border-t border-gray-300 my-4" />
          </View>
          <View>
          <View className="flex-row justify-between">
            <Text>Change UserName</Text>
            <ChevronRightIcon size={20} color={"black"}/>
          </View>
            <View className="w-full border-t border-gray-300 my-4" />
          </View>
          </View>
          </View>
    </ScrollView>
    </View>
  )
}

export default SettingsScreen