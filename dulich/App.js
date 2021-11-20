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
import PlaceManagement from './src/Screen/Admin/PlaceManagement/PlaceManagement';
import { NavigationContainer } from '@react-navigation/native';
import PlaceDetail from './src/Screen/Admin/PlaceManagement/PlaceDetail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Contact =()=>(
  <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
    <Stack.Screen   name="Login" component={Login} />
    <Stack.Screen  name="SignUp" component={SignUp} />
    <Stack.Screen  name="Profile" component={Profile} />
    <Stack.Screen  name="ChangeInfo" component={ChangeInfo} />
    <Stack.Screen  name="ChangePassWord" component={ChangePassWord} />
    <Stack.Screen name ="AccountManagement" component={AccountManagement}/>
    <Stack.Screen name ="PlaceManagenent" component={PlaceManagement}/>
    <Stack.Screen name ="PlaceDetail" component={PlaceDetail} />
  </Stack.Navigator>
)



export default function App() {
    return (
      <NavigationContainer>
        <Contact></Contact>
      </NavigationContainer>
      
     );
} 




