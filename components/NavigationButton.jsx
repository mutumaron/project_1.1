import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { BanknotesIcon, BellIcon, CreditCardIcon, PhoneArrowUpRightIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';

const iconMap = {
  bell:BellIcon,
  phone:PhoneArrowUpRightIcon,
  notes:BanknotesIcon,
  credit:CreditCardIcon
}

const NavigationButton = ({icon,route,title,content}) => {
  const Icon = iconMap[icon];
    const navigation = useNavigation();
  return (
    <TouchableOpacity className="flex-row bg-white rounded-lg items-center my-2 p-2 gap-2" onPress={() => navigation.navigate(route)}>
        <View className="bg-[#2196F3] p-3 w-12 h-12 items-center justify-center rounded-full">
            <Icon color={"#fff"} size={30}/>
        </View>
        <View className="">
            <Text className="font-bold text-lg">{title}</Text>
            <Text className="text-gray-400">{content}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default NavigationButton