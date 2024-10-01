import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ArrowDownIcon } from 'react-native-heroicons/outline'

const Button = () => {
  return (
    <View className="bg-[#2196F3] py-2 px-5 items-center rounded-lg">
      <TouchableOpacity>
        <View className="flex-row gap-2">
            <Text className="text-white text-md font-semibold">Show More</Text>
            <ArrowDownIcon size={20} color={"white"}/>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Button