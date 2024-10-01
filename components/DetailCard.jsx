import { View, Text } from 'react-native'
import React from 'react'
import { ArrowUpIcon, CurrencyDollarIcon, WalletIcon } from 'react-native-heroicons/outline'

const DetailCard = () => {
  return (
    <View className="bg-white p-3 rounded-xl">
      <View className="bg-gray-100 w-1/4 rounded-2xl justify-center items-center p-2">
        <WalletIcon color={"#000"} size={25}/>
      </View>
      <Text className="font-semibold text-lg">Consumer Loan</Text>
      <Text className="py-2 text-gray-500">- KES<Text>8,345,334</Text></Text>
      <Text className="bg-green-100 text-green-900 rounded-md p-1">Payment in 30 days</Text>
    </View>
  )
}

export default DetailCard