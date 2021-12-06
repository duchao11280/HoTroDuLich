import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import Login from '../../src/Screen/Login'
import SignUp from '../../src/Screen/SignUp';
import NaviUser from '../Screen/User/NaviUser'

const Stack = createNativeStackNavigator();

const Navigate = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Home" component={NaviUser} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}




export default Navigate;