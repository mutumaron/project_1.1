import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowDownIcon, ChevronLeftIcon, TrashIcon } from 'react-native-heroicons/outline'

const NotificationDetail = () => {
  return (
    <View className="mx-3 py-4 bg-blue-50 min-h-screen">
      <SafeAreaView className="flex-row justify-between items-center">
        <ChevronLeftIcon color={"#000"} size={30}/>
        <Text className="text-lg font-bold">Notification Details</Text>
        <TrashIcon color={"red"} size={30}/>
      </SafeAreaView>
      <ScrollView contentContainerStyle={{gap:20}}>
       <View className="items-center gap-2 pt-7">
       <View className="bg-blue-500 h-20 w-20 rounded-full justify-center items-center">
          <ArrowDownIcon color={"#fff"} size={45}/>
        </View>
        <Text className="text-xl font-bold">Payment received</Text>
       </View>
       <View className="gap-4">
        <View className="border border-gray-200"/>
        <View className="flex-row items-center justify-between">
          <Text className="text-lg">From</Text>
          <Text className="font-bold text-lg text-gray-500">Rolex Mutethia</Text>
        </View>
        <View className="border border-gray-200"/>
       </View>
       <View className="gap-4">
        <View className="flex-row items-center justify-between">
          <Text className="text-lg">Bank Account</Text>
          <Text className="font-bold text-lg text-gray-500">345563787663</Text>
        </View>
        <View className="border border-gray-200"/>
       </View>
       <View className="gap-4">
        <View className="flex-row items-center justify-between">
          <Text className="text-lg">Date</Text>
          <Text className="font-bold text-lg text-gray-500">Sep 25,2024 10:45 AM</Text>
        </View>
        <View className="border border-gray-200"/>
       </View>
       <View className="gap-4">
        <View className="flex-row items-center justify-between">
          <Text className="text-lg">Amount</Text>
          <Text className="font-bold text-lg text-gray-500">KES 1200</Text>
        </View>
        <View className="border border-gray-200"/>
       </View>
      </ScrollView>
    </View>
  )
}

export default NotificationDetail