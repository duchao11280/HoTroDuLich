import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
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



import Navigate from './src/Config/Navigation'

//tabnaviator
import Hotel from './src/Screen/User/Hotel'
import DetailHotel from './src/Screen/User/DetailHotel'
import Restaurant from './src/Screen/User/Restaurant';

import Location from './src/Screen/User/Location'
export default function App() {
  return (
    <Navigate />

  );
}




