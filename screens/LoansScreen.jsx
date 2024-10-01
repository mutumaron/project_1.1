import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import List from '../components/List'

const LoansScreen = () => {
  return (
    <View className="flex-1 mx-2">
    <SafeAreaView className="pt-7 mx-7 sticky items-center top-0 z-50 pb-5 flex-row">
      <ChevronLeftIcon color={"black"}/>
      <Text className="text-center pl-2 text-xl font-semibold ">Savings</Text>
    </SafeAreaView>
    <ScrollView contentContainerStyle={{ paddingBottom: 20,justifyContent:"center",paddingLeft:20, paddingRight:20,marginTop:10,gap:10}}>
      <Text className="font-bold text-3xl">Jamii Yetu Savings is a financial product designed</Text>
      <Text>Jamii Yetu Savings is a financial product designed to help individuals and communities build a secure financial future through disciplined saving. Whether you're saving for an emergency fund, a big purchase, or simply aiming to grow your wealth over time, Jamii Yetu Savings offers a range of account options to suit different needs and goals.</Text>
      <Text className="text-lg font-semibold">FOSA Ordinary Savings</Text>
      <Text>This targets Members who want to save with an aim of earning on their savings. This product is available to all Members.</Text>
      <View>
        <List title={"Covers savings needs of members"}/>
        <List title={"Competitive interest rates."}/>
        <List title={"Minimum earning balance Kshs.1000."}/>
        <List title={"Safe custody of the money."}/>
        <List title={" No deposit fee"}/>
        <List title={"Free Passport. (Taken at the Sacco). "}/>
        <List title={" Lipa na paybill no. 587649 for convenient and consistent savings."}/>
      </View>
      <Text className="text-lg font-semibold">C.E.E.P (Microfinance) Savings account</Text>
      <Text>The product targets business needs of Members in groups.Features/Security:</Text>
      <View className="">
        <List title={"Covers savings needs of members"}/>
        <List title={"Competitive interest rates."}/>
        <List title={"Minimum earning balance Kshs.1000."}/>
        <List title={"Safe custody of the money."}/>
        <List title={" No deposit fee"}/>
        <List title={"Free Passport. (Taken at the Sacco). "}/>
        <List title={" Lipa na paybill no. 587649 for convenient and consistent savings."}/>
      </View>
    </ScrollView>
  </View>
  )
}

export default LoansScreen