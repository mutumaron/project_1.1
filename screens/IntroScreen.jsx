import { View, Text } from 'react-native'
import React from 'react'
import { ChatBubbleLeftEllipsisIcon } from 'react-native-heroicons/solid'
import { SafeAreaView } from 'react-native-safe-area-context'
import AuthButton from '../components/AuthButton'

const IntroScreen = () => {
  return (
    <SafeAreaView className="h-screen justify-between items-center py-7">
      <View className="flex-row justify-between mx-7 w-5/6">
        <Text className="font-bold text-xl">Jamii Yetu</Text>
        <ChatBubbleLeftEllipsisIcon color={"#2196F3"} size={30}/>
      </View>
      <View>
        <Text className="text-center font-bold text-5xl pb-3">Welcome to Jamii Mobile</Text>
        <Text className="text-center text-lg">Good afternoon! Sign in or register to continue</Text>
        <Text></Text>
      </View>
      <View className="px-7 w-5/6">
        <AuthButton title={"Register"} route={"Register"}/>
        <AuthButton title={"Login"} route={"Login"}/>
      </View>
    </SafeAreaView>
  )
}

export default IntroScreen