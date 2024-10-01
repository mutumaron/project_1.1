import { View, Text } from 'react-native'
import React from 'react'
import { EllipsisHorizontalIcon } from 'react-native-heroicons/outline'

export default function BankCard({balance}) {
  return (
    <View className="bg-[#2F2D2E] gap-2 p-4 rounded-3xl shadow-xl w-[320px]">
        <View className="flex-row justify-between items-start">
            <View>
                <Text className="text-gray-400 font-bold text-sm pb-2">BALANCE</Text>
                <Text className="text-white font-bold text-xl">KES <Text>{balance}</Text></Text>
            </View>
            <EllipsisHorizontalIcon color={"#fff"} size={25}/>
        </View>
        <View>
            <Text className="text-gray-400 font-bold text-sm pb-1">CARD NUMBER</Text>
            <Text className ="text-white font-bold text-xl">
                <EllipsisHorizontalIcon color={"#fff"}/>
                980988
            </Text>
        </View>
        <View className="flex-row items-center justify-between">
            <Text className="text-gray-400 font-bold text-sm pb-1">EXPIRY</Text>
            <Text className="text-gray-500 font-bold text-xl">
                12/ 25
            </Text>
        </View>

    </View>
  )
}