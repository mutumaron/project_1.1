import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { Button,Input } from '@rneui/themed'

const QuickPaybillTransaction = ({item}) => {
    const [account,setAccount] = useState('');
    const [amount,setAmount] = useState('');

  return (
    <View className="items-center gap-2 pt-5 px-4">

      <Text className="text-lg">Make Transfer To <Text className="text-xl  font-bold">{item.paybill_name}</Text></Text>
        {item.image ? (
            <Image source={item.image} className="h-40 w-40" />
        ):(
            <Image source={require('../assets/images/mpesa-logo.png')}/>
        )}
      <Text className="text-gray-500 pb-6">Paybill Number:{item.paybill_no}</Text>
      <Input
          label={"Account number"} 
          placeholder={"Enter Your Account Number"}
          onChangeText={(text) => setAccount(text)}
          value={account}
          autoCapitalize='none'
          
          />
        <Input
          label={"Amount"} 
          placeholder={"Enter Amount"}
          onChangeText={(text) => setAmount(text)}
          value={amount}
          autoCapitalize='none'
          keyboardType='numeric'
          />
          <View className="w-full">
          <Button title={"Pay"}/>
          </View>
    </View>
  )
}

export default QuickPaybillTransaction