import { View, Text, Image } from 'react-native'
import React from 'react'
import { EyeSlashIcon } from 'react-native-heroicons/outline'

export default function BalanceCard() {
  return (
    <View className="mx-7 p-2 my-12 bg-gray-200 shadow-2xl rounded-lg">
      <View className="flex-row justify-between">
        <Text className="font-semibold text-lg">My Balance</Text>
        <View className="flex-row gap-2">
            <Text className="text-[#2196F3]">Hide Balance</Text>
            <EyeSlashIcon size={25} color={"#2196F3"}/>
        </View>
      </View>
    <View className="flex-row items-center justify-between">
     <Text className=" text-lg font-semibold py-">KES <Text className="text-gray-600"> 2,000,000</Text></Text>
     <Image 
         source={{
                uri:'https://links.papareact.com/wru'
            }}
            className="h-7 w-7 bg-white p-4 rounded-full"/>
    </View>     
    </View>
  )
}