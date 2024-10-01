import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Button, Input } from '@rneui/themed'


const TransferMoney = () => {


  const [toAccount,setToAccount] = useState('');
  const [amount,setAmount] = useState('');
  const [pin,setPin] = useState('');

  const [loading,setLoading] = useState(false);


  

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 20 }} className="px-5 pt-3">
        <View>
            <Text className="text-center font-bold text-lg">Transfer Money</Text>
            <Text className="text-center py-2 text-gray-500">Transfer money from your bank account to another Jamii Yetu bank account.You will be required to enter your bank account PIN to authorize the transaction.</Text>
        </View>
        <Input 
          label={"To"} 
          placeholder={"Recipient bank account number"}
          onChangeText={(text) => setToAccount(text)}
          value={toAccount}
          autoCapitalize='none'/>
        <Input 
          label={"Enter amount"} 
          placeholder={"Enter Amount(KES)"}
          onChangeText={(text) => setAmount(text)}
          value={amount}
          autoCapitalize='none'
          keyboardType='numeric'
          />
        <Input
         label={"Account PIN number"} 
         placeholder={"Enter PIN number"}
         onChangeText={(text) => setPin(text)}
         value={pin}
         secureTextEntry={true}
         autoCapitalize='none'
         keyboardType='numeric'/>
        
        <Button title={"Transfer"} disabled={loading}/>
    </ScrollView>
  )
}

export default TransferMoney;