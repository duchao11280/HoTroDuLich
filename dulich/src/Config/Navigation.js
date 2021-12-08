import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import Login from '../../src/Screen/Login'
import SignUp from '../../src/Screen/SignUp';
import Profile from '../Screen/Profile';
import ChangeInfo from '../Screen/ChangeInfo';
import ChangePassWord from '../Screen/ChangePassWord';

// user
import Home from '../Screen/User/Home'
import Hotel from '../Screen/User/Hotel'
import Restaurant from '../Screen/User/Restaurant'
import PlacesInfo from '../Screen/User/PlacesInfo'
import PlaceInfoDetail from '../Screen/User/PlaceInfoDetail'
import Information from '../Screen/User/Information'

import Receipt from '../Screen/User/Receipt'

//DetaiUser
import DetailHotel from '../Screen/User/DetailHotel'
import DetailRestaurant from '../Screen/User/DetailRestaurant'


// admin

import HomeAdmin from '../Screen/Admin/HomeAdmin';
import PlaceManagement from '../Screen/Admin/PlaceManagement/PlaceManagement';
import PlaceDetail from '../Screen/Admin/PlaceManagement/PlaceDetail';
import AccountManagement from '../Screen/Admin/AccountManagement';

// hotel
import HomeHotel from '../Screen/ServicesHotel/HomeHotel';
import AddRoom from '../Screen/ServicesHotel/AddRoom'
import RoomManagement from '../Screen/ServicesHotel/RoomManagement'
import UpdateRoom from '../Screen/ServicesHotel/UpdateRoom'


// restaurent
import HomeRestaurant from '../Screen/ServicesRestaurant/HomeRestaurant';
import AddTable from '../Screen/ServicesRestaurant/AddTable';



const Stack = createNativeStackNavigator();

const Navigate = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                {/* user */}
                <Stack.Screen name="PlacesInfo" component={PlacesInfo} />
                <Stack.Screen name="PlaceInfoDetail" component={PlaceInfoDetail} />

                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Hotel" component={Hotel} />
                <Stack.Screen name="Restaurant" component={Restaurant} />
                <Stack.Screen name="Information" component={Information} />
                <Stack.Screen name="Receipt" component={Receipt} />



                {/** Admin */}
                <Stack.Screen name="HomeAdmin" component={HomeAdmin} />
                <Stack.Screen name="PlaceManagement" component={PlaceManagement} />
                <Stack.Screen name="PlaceDetail" component={PlaceDetail} />
                <Stack.Screen name="AccountManagement" component={AccountManagement} />
                {/** Hotel */}
                <Stack.Screen name="HomeHotel" component={HomeHotel} />
                <Stack.Screen name="AddRoom" component={AddRoom} />
                <Stack.Screen name="RoomManagement" component={RoomManagement} />
                <Stack.Screen name="UpdateRoom" component={UpdateRoom} />

                {/** Restaurant */}
                <Stack.Screen name="HomeRestaurant" component={HomeRestaurant} />
                <Stack.Screen name="AddTable" component={AddTable} />

                {/** Other */}
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="ChangeInfo" component={ChangeInfo} />
                <Stack.Screen name="ChangePassWord" component={ChangePassWord} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigate;