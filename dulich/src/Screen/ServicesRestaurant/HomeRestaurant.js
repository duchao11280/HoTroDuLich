import * as React from 'react';
import { Text, View, StyleSheet, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { FontAwesome5 } from 'react-native-vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
//screen 
import Hotel from '../../Screen/User/Hotel'
import Restaurant from '../../Screen/User/Restaurant'



const HomeRestaurant = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.BeachImage}>
                <Image source={require('../../../assets/HotelWallpaper.png')} />
            </View>

            <View style={styles.HeadButtonView}>
                <View style={styles.ServiceButton}>
                    <TouchableOpacity onPress={() => navigation.navigate("AddTable")}>
                        <Ionicons name="restaurant" size={40} color="black" style={styles.icon} />
                        <Text style={styles.FontButton}>Thêm Bàn</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.ServiceButton}>
                    <TouchableOpacity onPress={() => navigation.pop()}>
                        <MaterialIcons name="logout" size={43} color="black" style={styles.icon} />
                        <Text style={styles.FontButton}>Đăng suất</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6f2ff',
    },
    BeachImage: {
        flexDirection: 'column',
        alignItems: 'center',
        resizeMode: 'cover'

    },
    image: {
        height: 200,
        width: 350,
        resizeMode: 'contain',
    },
    HeadButtonView: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 50
    },
    FontButton: {
        fontSize: 16,
    },
    ServiceButton: {
        paddingLeft: 30
    },
    icon: {
        paddingLeft: 12,
    }
})



export default HomeRestaurant;