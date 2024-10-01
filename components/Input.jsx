import { View, Text, TextInput } from 'react-native'
import React from 'react'

const Input = ({label,placeholder}) => {
  return (
    <View className="gap-2 mb-4">
    {label && <Text className="font-semibold">{label}</Text>}
      <TextInput className="bg-gray-200 p-3 rounded-lg" placeholder={placeholder}/>
    </View>
  )
}

export default Input