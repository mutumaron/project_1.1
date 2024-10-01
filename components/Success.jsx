import { View, Text } from 'react-native'
import React from 'react'
import { CheckIcon } from 'react-native-heroicons/outline'

const Success = ({transactionDetails}) => {
  return (
    <View className="items-center justify-between h-full pb-6">
      <Text className="p-3 font-bold text-lg">Payment Succesful</Text>
      <View className="rounded-full p-5 w-24 h-24 justify-center items-center bg-green-600">
      <CheckIcon color={"#fff"} size={60}/>
      </View>
      <Text className="font-semibold text-lg p-7">KES {transactionDetails.amount}</Text>
      <View>
        <Text className="font-semibold text-lg text-gray-500 p-2">Transfer to</Text>
        <Text className="font-semibold p-2">{transactionDetails.receiverName}</Text>
      </View>
      <Text className="pb-5 text-gray-500">{transactionDetails.timestamp}</Text>
    </View>
  )
}

export default Success