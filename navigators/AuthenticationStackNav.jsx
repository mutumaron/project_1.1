import { View, Text } from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from '../screens/Auth';
import Register from '../screens/Register';
import Login from '../screens/Login';
import NotificationScreen from '../screens/NotificationScreen';
import IntroScreen from '../screens/IntroScreen';

const Stack = createNativeStackNavigator();


const AuthenticationStackNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown:false }}>
        <Stack.Screen name="Auth" component={Auth}/>
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="ProfileSetup" component={NotificationScreen}/>
    </Stack.Navigator>
  )
}

export default AuthenticationStackNav