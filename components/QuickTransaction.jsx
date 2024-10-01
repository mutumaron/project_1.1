import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const QuickTransaction = ({item,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}> 
    <View className="bg-gray-700 items-center justify-center h-12 w-12 rounded-full">
  {item.image ? (    <Image
            source={item.image}
            className="h-11 w-11 bg-white p-4 rounded-full items-center justify-center"/>):(
              <Image
              source={require('../assets/images/mpesa-logo.png')}
              className="h-11 w-11 bg-white p-4 rounded-full items-center justify-center"/>
            )}
    </View>
      <Text className="text-gray-500 mt-1 text-center">{item.paybill_name}</Text>
    </TouchableOpacity>
  )
}

export default QuickTransaction