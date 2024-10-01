import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthButton from '../components/AuthButton';
import { ChatBubbleLeftEllipsisIcon } from 'react-native-heroicons/solid'
import Onboarding from '../components/Onboarding';




const Auth = () => {
  return (
    <SafeAreaView className="flex-1">
        <Onboarding/>
    </SafeAreaView>
  )
}

export default Auth