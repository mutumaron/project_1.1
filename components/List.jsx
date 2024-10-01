import { View, Text } from 'react-native'
import React from 'react'
import { ShieldCheckIcon } from 'react-native-heroicons/outline'

const List = ({title}) => {
  return (
    <View className="flex-row gap-2 items-center pb-1">
        <ShieldCheckIcon size={20} color={"#2196F3"}/>
      <Text className="text-gray-500">{title}</Text>
    </View>
  )
}

export default List