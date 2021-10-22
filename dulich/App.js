import React, { Component } from 'react';
import { Text, View, StyleSheet,ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import Login from './src/Screen/Login';
import SignUp from './src/Screen/SignUp';
import Profile from './src/Screen/Profile';
import Into from './src/Screen/Into';
import ChangePassWord from './src/Screen/ChangePassWord';
import ChangeInfo from './src/Screen/ChangeInfo';
import AccountManagement from './src/Screen/Admin/AccountManagement';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Contact =()=>(
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen   name="Login" component={Login} />
    <Stack.Screen  name="SignUp" component={SignUp} />
    <Stack.Screen  name="Into" component={Into} />
  </Stack.Navigator>
)



export default function App() {
    return (
      <AccountManagement/>
     );
} 




