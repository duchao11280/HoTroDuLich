import * as React from 'react';
import { Text, View, StyleSheet, Button, Image, TextInput, TouchableOpacity } from 'react-native';

import { FontAwesome5 } from 'react-native-vector-icons';
import { Entypo } from '@expo/vector-icons';

//screen 
import Location from './Location'
import Hotel from './Hotel'
import Restaurant from './Restaurant'
import BottomNavigation from '../../Config/BottomNaviUser'


const NaviUser = (navigation) => {
    return (
        <BottomNavigation
        />
    );
}

const styles = StyleSheet.create({

})




export default NaviUser;