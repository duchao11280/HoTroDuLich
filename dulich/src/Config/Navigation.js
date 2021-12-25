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
import Feedback from '../Screen/User/Feedback'
import Notification from '../Screen/User/Notification'
import DetailNotificationUser from '../Screen/User/DetailNotificationUser'
import Receipt from '../Screen/User/Receipt'
import ReceiptTable from '../Screen/User/ReceiptTable'

//DetaiUser
import DetailHotel from '../Screen/User/DetailHotel'
import DetailRestaurant from '../Screen/User/DetailRestaurant'


// admin

import HomeAdmin from '../Screen/Admin/HomeAdmin';
import PlaceManagement from '../Screen/Admin/PlaceManagement/PlaceManagement';
import PlaceDetail from '../Screen/Admin/PlaceManagement/PlaceDetail';
import AccountManagement from '../Screen/Admin/AccountManagement';
import AdminFeedBack from '../Screen/Admin/AdminFeedBack';
import DetailsFeedbackAdmin from '../Screen/Admin/DetailsFeedbackAdmin';

import NotificationManagement from '../Screen/Admin/NotificationManagement/NotificationManagement';
import AddNotification from '../Screen/Admin/NotificationManagement/AddNotification';
import UpdateNotification from '../Screen/Admin/NotificationManagement/UpdateNotification';
import DetailNotification from '../Screen/Admin/NotificationManagement/DetailNotification';

// hotel
import HomeHotel from '../Screen/ServicesHotel/HomeHotel';
import AddRoom from '../Screen/ServicesHotel/AddRoom'
import RoomManagement from '../Screen/ServicesHotel/RoomManagement'
import UpdateRoom from '../Screen/ServicesHotel/UpdateRoom'
import BillRoom from '../Screen/ServicesHotel/BillRoom'

// restaurent
import HomeRestaurant from '../Screen/ServicesRestaurant/HomeRestaurant';
import AddTable from '../Screen/ServicesRestaurant/AddTable';
import TableManagement from '../Screen/ServicesRestaurant/TableManagement';
import UpdateTable from '../Screen/ServicesRestaurant/UpdateTable';
import BillTable from '../Screen/ServicesRestaurant/BillTable';




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
                <Stack.Screen name="DetailHotel" component={DetailHotel} />

                <Stack.Screen name="Restaurant" component={Restaurant} />
                <Stack.Screen name="DetailRestaurant" component={DetailRestaurant} />
                <Stack.Screen name="Information" component={Information} />
                <Stack.Screen name="Receipt" component={Receipt} />
                <Stack.Screen name="ReceiptTable" component={ReceiptTable} />
                <Stack.Screen name="Feedback" component={Feedback} />



                {/** Admin */}
                <Stack.Screen name="HomeAdmin" component={HomeAdmin} />
                <Stack.Screen name="PlaceManagement" component={PlaceManagement} />
                <Stack.Screen name="PlaceDetail" component={PlaceDetail} />
                <Stack.Screen name="AccountManagement" component={AccountManagement} />
                <Stack.Screen name="AdminFeedBack" component={AdminFeedBack} />
                <Stack.Screen name="DetailsFeedbackAdmin" component={DetailsFeedbackAdmin} />

                <Stack.Screen name="NotificationManagement" component={NotificationManagement} />
                <Stack.Screen name="AddNotification" component={AddNotification} />
                <Stack.Screen name="UpdateNotification" component={UpdateNotification} />
                <Stack.Screen name="DetailNotification" component={DetailNotification} />
                {/** Hotel */}
                <Stack.Screen name="HomeHotel" component={HomeHotel} />
                <Stack.Screen name="AddRoom" component={AddRoom} />
                <Stack.Screen name="RoomManagement" component={RoomManagement} />
                <Stack.Screen name="UpdateRoom" component={UpdateRoom} />
                <Stack.Screen name="BillRoom" component={BillRoom} />
                {/** Restaurant */}
                <Stack.Screen name="HomeRestaurant" component={HomeRestaurant} />
                <Stack.Screen name="AddTable" component={AddTable} />
                <Stack.Screen name="UpdateTable" component={UpdateTable} />
                <Stack.Screen name="TableManagement" component={TableManagement} />
                <Stack.Screen name="BillTable" component={BillTable} />

                {/** Other */}
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="ChangeInfo" component={ChangeInfo} />
                <Stack.Screen name="ChangePassWord" component={ChangePassWord} />
                <Stack.Screen name="Notification" component={Notification} />
                <Stack.Screen name="DetailNotificationUser" component={DetailNotificationUser} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigate;