import { View, Text,  } from 'react-native'
import React from 'react'
import Input from './Input';
import AuthButton from './AuthButton';
import { ScrollView } from 'react-native-gesture-handler';

const SendMoney = () => {
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 20 }} className="px-5 py-3">
      <View>
        <Text className="text-center font-bold text-lg">Withdraw Money To Mpesa</Text>
        <Text className="text-center py-2 text-gray-500">Send Money from your bank account to your mpesa number.You will be required to enter your bank account pin to authorize the transaction</Text>
      </View>
      <Input label={"From"} placeholder={"Your Bank Account"}/>
      <Input label={"To"} placeholder={"Your Phone number"}/>
      <Input label={"Amount"} placeholder={"Enter amount(KES)"}/>
      <Input label={"Account PIN number"} placeholder={"Enter PIN number"}/>
      <AuthButton title={"Send Money"}/>
    </ScrollView>
  )
}

export default SendMoney