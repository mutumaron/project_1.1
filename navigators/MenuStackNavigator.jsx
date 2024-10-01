import React,{useEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoansScreen from './../screens/LoansScreen';
import SavingsScreen from './../screens/SavingsScreen';
import ContactScreen from './../screens/ContactScreen';
import TransactionScreen from '../screens/TransactionScreen';
import NotificationScreen from '../screens/NotificationScreen';
import NotificationDetail from '../screens/NotificationDetail';

const Stack = createNativeStackNavigator();

const MenuStackNavigator = () => {

    
  return (
   <Stack.Navigator screenOptions={{ headerShown:false }}>
        <Stack.Screen name='Transaction' component={TransactionScreen}/>
        <Stack.Screen name='Notification' component={NotificationScreen}/>
        <Stack.Screen name ='NotificationDetail' component={NotificationDetail}/>
        <Stack.Screen name="Loans" component={LoansScreen}/>
        <Stack.Screen name="Savings" component={SavingsScreen}/>
        <Stack.Screen name="Contact" component={ContactScreen}/>
   </Stack.Navigator>
  )
}

export default MenuStackNavigator