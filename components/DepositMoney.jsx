import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Input from './Input'
import AuthButton from './AuthButton'

const DepositMoney = () => {
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 20 }} className="px-5 py-3">
        <View>
            <Text className="text-center font-bold text-lg">Deposit from Mpesa</Text>
            <Text className="text-center py-2 text-gray-500">Deposit money to your account from your Mpesa number.Once you fill in the form wait for the mpesa prompt and enter your MPESA PIN to authorize the transaction.</Text>
        </View>
        <Input label={"To"} placeholder={"Your bank account number"}/>
        <Input label={"Your mobile number"} placeholder={"Enter your mobile number"}/>
        <Input label={"Deposit Amount"} placeholder={"Enter Amount(KES)"}/>
        <AuthButton title={"Deposit"}/>
    </ScrollView>
  )
}

export default DepositMoney