import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ArrowDownLeftIcon, ArrowUpLeftIcon, UserIcon } from 'react-native-heroicons/outline'

const TransactionCard = ({item,onclick}) => {

  if(!item){
    return (
      <View className="bg-white mb-2 py-3 rounded-lg">
      <Text className="text-center">No Transactions Found</Text>
      </View>
    )
  }
  const {
    amount,
    from_account,
    to_account,
    sender_name,
    receiver_name,
    status,
    transaction_date
  } = item;

  const formattedDate = new Date(transaction_date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long', // You can use 'short' for abbreviations (Jan, Feb, etc.)
    day: 'numeric',
  });

  const isSent = true;
  const isReceived = true


  return ( 
    <TouchableOpacity onPress={() => onclick(item)} className="bg-white mb-2 py-3 rounded-lg">
       <Text className="pb-2 font-bold text-gray-500">{formattedDate}</Text>
        <View className="flex-row justify-between items-center">
            <View className="flex-row gap-3">
               {isReceived ? (
                 <View className="bg-green-400 rounded-xl p-3 items-center justify-center">
                 <ArrowDownLeftIcon size={25} color={"#fff"}/>
             </View>
               ):(
                <View className="bg-red-400 rounded-xl p-3 items-center justify-center">
                <ArrowUpLeftIcon size={25} color={"#fff"}/>
            </View>
               )}
                <View>
                <Text className="text-lg font-semibold">{receiver_name}</Text>
                <Text className="text-gray-500">{isReceived ? "Received" : "Sent"}</Text>
                </View>
            </View>
          {isReceived ? (
              <View>
              <Text className="text-green-600">+KES <Text>{amount}</Text></Text>
              <Text className="text-xs pt-2 text-gray-400">Bank transaction</Text>
              </View>
          ): (
            <View>
            <Text className="text-orange-600">-KES <Text>{amount}</Text></Text>
            <Text className="text-xs pt-2 text-gray-400">Bank transaction</Text>
            </View>
          )}

        </View>
        
    </TouchableOpacity>
  )
}

export default TransactionCard