import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ArrowDownIcon, ArrowRightIcon, ArrowUpIcon, ChevronRightIcon, KeyIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'

const iconMap = {
    down:ArrowDownIcon,
    right:ArrowRightIcon,
    key:KeyIcon,
    up:ArrowUpIcon
}

const Notification = ({color,item,icon,status,onPress}) => {
    const navigation = useNavigation();
    const Icon = iconMap[icon]

    const handlePress = () => {
      navigation.navigate('NotificationDetail');
    }
    
  return (
    <TouchableOpacity onPress={onPress} className="py-3 px-2 flex-row gap-4 items-center">
         <View className={`rounded-full ${color} justify-center items-center p-2 h-12 w-12`}>
            <Icon color={"#fff"}/>
        </View>
     <View className="flex-1">
     <View className="flex-row justify-between">
            <View>
                <Text className="text-lg font-semibold">New Transaction</Text>
                <Text className="text-gray-500">{item.message} sent you KES {item.amount}</Text>
                <Text className="text-gray-400 pt-1">{item.timestamp}</Text>
            </View>
            <View className="flex-row gap-2 items-center">
            {status ? (<View className={`${color} rounded-full h-3 w-3`}/>):(<View/>)}
            <ChevronRightIcon color={"gray"}/>
        </View>
        </View>
      
        <View className="border border-gray-200 mt-2"/>

     </View>
    </TouchableOpacity>
  )
}

export default Notification