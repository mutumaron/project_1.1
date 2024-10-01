import React, { useEffect,useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { BellIcon, ChevronLeftIcon } from 'react-native-heroicons/outline';
import { SafeAreaView } from 'react-native-safe-area-context';
import Notification from '../components/Notification';
import { io } from 'socket.io-client';
import AsyncStorage from '@react-native-async-storage/async-storage';

const socket = io('http://192.168.1.3:8080')

// Function to save notifications to AsyncStorage
const saveNotifications = async (notifications) => {
  try {
      const jsonValue = JSON.stringify(notifications);
      await AsyncStorage.setItem('@notifications', jsonValue);
  } catch (e) {
      console.error("Failed to save notifications:", e);
  }
};


// Function to load notifications from AsyncStorage
const loadNotifications = async () => {
  try {
      const jsonValue = await AsyncStorage.getItem('@notifications');
      return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
      console.error("Failed to load notifications:", e);
      return [];
  }
};


const NotificationScreen = () => {
  const [notifications,setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const loadedNotifications = await loadNotifications();
      setNotifications(loadedNotifications);
    };

    fetchNotifications();

    socket.on('transaction_success',(data) => {
      console.log('New transaction: ',data);

      const newNotification = {
        id: notifications.length, // Unique key
        message: `${data.senderName} sent $${data.amount} to ${data.receiverName} at ${data.timestamp}`,
        read: false, // New notifications are initially unread
      };

       // Update notifications state
       setNotifications(prevNotifications => {
        const updatedNotifications = [...prevNotifications, newNotification];
        // Save updated notifications to AsyncStorage
        saveNotifications(updatedNotifications);
        return updatedNotifications;
      });

    });

    return () => {
      socket.off('transaction_success');
    }
  },[])

     // Function to mark a notification as read
  const markAsRead = (id) => {
    setNotifications(prevNotifications => {
      const updatedNotifications = prevNotifications.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      );
      // Save updated notifications to AsyncStorage
      saveNotifications(updatedNotifications);
      return updatedNotifications;
    });
  };

  return (
    <View className="mx-3 py-4 bg-blue-50 min-h-screen">
      <SafeAreaView className="flex-row justify-between items-center">
        <ChevronLeftIcon color={"#000"} size={30}/>
        <Text className="text-lg font-bold">Notifications</Text>
        <View>
          <BellIcon color={"#000"} size={30}/>
        </View> 
      </SafeAreaView>
      <ScrollView contentContainerStyle={{paddingVertical:20, paddingBottom:70}} overScrollMode='never'>
        {notifications.map((item,index) => (
           <Notification 
           key={index}
           color={item.read ? "bg-red-500":"bg-blue-500"}
           item={item}
           icon={"down"}
           status={true}
           onPress={() => markAsRead(item.id)}/>
        ))}
          
      </ScrollView>
    </View>
  )
}


export default NotificationScreen