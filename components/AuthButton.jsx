import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';


const AuthButton = ({title,route}) => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity className="bg-transparent rounded-lg border-2 border-[#2196F3] mb-4" onPress={() => navigation.navigate(route)}>
        <Text className="text-black text-center font-semibold p-3">{title}</Text>
    </TouchableOpacity>
  )
}

export default AuthButton