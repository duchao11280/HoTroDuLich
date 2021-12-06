import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

//Screen
import NaviUser from '../../Screen/User/NaviUser'
import Information from '../../Screen/User/Information'
import Receipt from '../../Screen/User/Receipt'
import Notification from '../../Screen/User/Notification'




const Tab = createMaterialBottomTabNavigator();

const BottomTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Trang chủ" component={Home}
          options={{
            tabBarLabel: 'Trang chủ',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen name="Notification" component={Notification}
          options={{
            tabBarLabel: 'Thông báo',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen name="Cart" component={Receipt}
          options={{
            tabBarLabel: 'Hóa đơn',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="receipt" color={color} size={26} />
            ),
          }}
        />


        <Tab.Screen name="User" component={Information}
          options={{
            tabBarLabel: 'Thông tin',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />


      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default BottomTab;

