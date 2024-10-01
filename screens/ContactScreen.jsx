import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { ChatBubbleOvalLeftIcon, ChevronLeftIcon, PhoneArrowUpRightIcon } from 'react-native-heroicons/outline'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Input } from '@rneui/themed';
import MapView, { Marker } from 'react-native-maps';
import { ChatBubbleLeftEllipsisIcon } from 'react-native-heroicons/solid';

const ContactScreen = () => {
  return (
    <View className="mx-2 bg-blue-50">
      <SafeAreaView className="flex-row py-5 justify-between items-center">
        <ChevronLeftIcon color={"#000"} size={25}/>
        <Text className="text-lg font-bold">Contact</Text>
        <PhoneArrowUpRightIcon color={"#000"}/>
      </SafeAreaView>
      <ScrollView overScrollMode='never' contentContainerStyle={{gap:10,paddingBottom:120}}>
        <View className="my-5 bg-white p-5 rounded-lg">
          <Text className="text-center font-bold text-2xl">Get in Touch</Text>
          <Text className="text-center pt-2 text-gray-500">Fill the form to contact us</Text>
          <View className="pt-4">
            <Input placeholder='Your name'/>
            <Input placeholder='E-mail'/>
            <Input placeholder='Message'/>
            <Button title={"Send"} className="rounded-md"/>
          </View>
        </View>
        <View className="bg-white p-5 rounded-lg">
          <Text className="text-center font-bold text-2xl">Our Adresses</Text>
          <Text className="text-center text-gray-500 pt-2">PO Box 469-60600 Collins Street West</Text>
          <Text className="text-center text-gray-500 pt-2 pb-4">Maua - Kenya</Text>
          <View>  
            <MapView
            style={styles.map}
             initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
                <Marker
                  coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
                  title="My Marker"
                  description="Some description"
            />
            </MapView>
          </View>
        </View>
        <View className="bg-green-500 absolute h-12 w-12 justify-center items-center rounded-full bottom-0 right-0">
          <ChatBubbleLeftEllipsisIcon color={"#fff"}/>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  map: {
    height: 200,
  },
});


export default ContactScreen