import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import Constants from 'expo-constants';



import Navigate from './src/Config/Navigation'
import HomeRestaurant from './src/Screen/ServicesRestaurant/HomeRestaurant';
import Hotel from './src/Screen/User/Hotel'
import DetailsNotificationAdmin from './src/Screen/Admin/DetailsNotificationAdmin'
import NotificationAdmin from './src/Screen/Admin/NotificationAdmin'
import AddTable from './src/Screen/ServicesRestaurant/AddTable';
import HomeHotel from './src/Screen/ServicesHotel/HomeHotel'
import PlaceManagement from './src/Screen/Admin/PlaceManagement/PlaceManagement'
import Receipt from './src/Screen/User/Receipt'
import Feedback from './src/Screen/User/Feedback'
export default function App() {
  return (
    <Navigate />
  );
}




