import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import Login from '../../src/Screen/Login'
import SignUp from '../../src/Screen/SignUp';
import NaviUser from '../Screen/User/NaviUser'

// user
import Home from '../Screen/User/Home'
import Hotel from '../Screen/User/Hotel'
import Restaurant from '../Screen/User/Restaurant'
import PlacesInfo from '../Screen/User/PlacesInfo'
import Information from '../Screen/User/Information'
import Notification from '../Screen/User/Notification'
import Receipt from '../Screen/User/Receipt'





const Stack = createNativeStackNavigator();

const Navigate = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />

                {/* user */}
                <Stack.Screen name="PlacesInfo" component={PlacesInfo} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Hotel" component={Hotel} />
                <Stack.Screen name="Restaurant" component={Restaurant} />
                <Stack.Screen name="Information" component={Information} />
                <Stack.Screen name="Notification" component={Notification} />
                <Stack.Screen name="Receipt" component={Receipt} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigate;