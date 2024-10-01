import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import { Button, Input } from '@rneui/themed'
import { useUserData } from '../store/AppContext';
import { supabase } from '../libs/supabase';

const AddPaybill = () => {
    const { userDetails } = useUserData();
    const [paybillNo, setPaybillNo] = useState('');
    const [paybillName, setPaybillName] = useState('');
 const [loading,setLoading] = useState(false);

  const handleAddPaybill = async () => {
    setLoading(true)
    const {error} = await supabase
        .from('paybills')
        .insert({
            user_id:userDetails.id,
            paybill_no:paybillNo,
            paybill_name:paybillName,
        });

        if(error){
            Alert.alert('Error creating Paybill',error.message);
            setLoading(false);
        }else{
            setLoading(false);
            Alert.alert('Paybill created succesfully');
            setPaybillNo('');
            setPaybillName('');
        }
  }

  return (
    <View className="pt-5 px-2">
      <View>
        <Text className="text-center font-bold text-lg">Add Your Custom Paybill</Text>
        <Text className="text-center py-2 text-gray-500">Add Your Custom Mpesa Paybill that you frequently use for Quick transactions.Ensure it is the correct paybill to avoid any inconviniences</Text>
      </View>
      <Input
          label={"Paybill Number"} 
          placeholder={"Enter Mpesa Paybill Number"}
          onChangeText={(text) => setPaybillNo(text)}
          value={paybillNo}
          autoCapitalize='none'
          keyboardType='numeric'
          />
        <Input 
          label={"Paybill Name"} 
          placeholder={"Enter Paybill Name"}
          onChangeText={(text) => setPaybillName(text)}
          value={paybillName}
          autoCapitalize='none'
          />
          <Button title={"Add Paybill"} disabled={loading} onPress={() => handleAddPaybill()}/>
    </View>
  )
}

export default AddPaybill