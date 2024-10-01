import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowDownIcon, ArrowUpIcon, } from 'react-native-heroicons/outline'
import { useUserData } from '../store/AppContext'

const TransactionHistoryScreen = ({route}) => {

    const {transaction} = route.params;

    
  const formattedDate = new Date(transaction.transaction_date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long', // You can use 'short' for abbreviations (Jan, Feb, etc.)
    day: 'numeric',
  });

  const isSent = transaction.from_account === true;
  const isReceived = transaction.to_account === false;
    
  return (
    <View className="mx-3 py-4 bg-blue-50 min-h-screen">
  
    <ScrollView contentContainerStyle={{gap:20}}>
     <View className="items-center gap-2 pt-7">
    {isReceived ? (
          <View className="bg-green-500 h-20 w-20 rounded-full justify-center items-center">
          <ArrowDownIcon color={"#fff"} size={45}/>
        </View>
    ):(
        <View className="bg-red-500 h-20 w-20 rounded-full justify-center items-center">
        <ArrowUpIcon color={"#fff"} size={45}/>
      </View>
    )}
      <Text className="text-xl font-bold">{isReceived ? "Payment received" : "Payment sent"}</Text>
     </View>
     <View className="gap-4">
      <View className="border border-gray-200"/>
      <View className="flex-row items-center justify-between">
        <Text className="text-lg">From</Text>
        <Text className="font-bold text-lg text-gray-500">{transaction.sender_name}</Text>
      </View>
      <View className="border border-gray-200"/>
     </View>
     <View className="gap-4">
      <View className="flex-row items-center justify-between">
        <Text className="text-lg">Bank Account</Text>
        <Text className="font-bold text-lg text-gray-500">{transaction.from_account}</Text>
      </View>
      <View className="border border-gray-200"/>
     </View>
     <View className="gap-4">
      <View className="flex-row items-center justify-between">
        <Text className="text-lg">To</Text>
        <Text className="font-bold text-lg text-gray-500">{transaction.receiver_name}</Text>
      </View>
      <View className="border border-gray-200"/>
     </View>
     <View className="gap-4">
      <View className="flex-row items-center justify-between">
        <Text className="text-lg">Bank Account</Text>
        <Text className="font-bold text-lg text-gray-500">{transaction.to_account}</Text>
      </View>
      <View className="border border-gray-200"/>
     </View>
     <View className="gap-4">
      <View className="flex-row items-center justify-between">
        <Text className="text-lg">Date</Text>
        <Text className="font-bold text-lg text-gray-500">{formattedDate}</Text>
      </View>
      <View className="border border-gray-200"/>
     </View>
     <View className="gap-4">
      <View className="flex-row items-center justify-between">
        <Text className="text-lg">Amount</Text>
        <Text className={`font-bold text-lg ${isReceived ? "text-green-500" : "text-red-500"}`}>{isReceived ? "+" : "-"} KES {transaction.amount}</Text>
      </View>
      <View className="border border-gray-200"/>
     </View>
    </ScrollView>
  </View>
  )
}

export default TransactionHistoryScreen