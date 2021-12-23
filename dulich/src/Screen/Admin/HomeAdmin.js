import * as React from 'react';
import { Text, View, StyleSheet, Button, Image, TextInput, TouchableOpacity } from 'react-native';

import { FontAwesome5 } from 'react-native-vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';



const HomeAdmin = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.BeachImage}>
                <Image source={require('../../../assets/Beach.png')} />
            </View>

            <View style={styles.HeadButtonView}>
                <View style={styles.ServiceButton}>
                    <TouchableOpacity onPress={() => navigation.push("PlaceManagement")}>
                        <Entypo name="location" size={40} color="black" style={styles.longTexticon} />
                        <Text style={styles.FontButton}>Quản lý địa điểm</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.ServiceButton}>
                    <TouchableOpacity onPress={() => navigation.push("AccountManagement")}>
                        <FontAwesome5 name={'hotel'} size={40} style={styles.longTexticon} />
                        <Text style={styles.FontButton}>Quản lý tài khoản</Text>
                    </TouchableOpacity>
                </View>



            </View>
            <View style={styles.HeadButtonView}>
                <View style={styles.ServiceButton}>
                    <TouchableOpacity onPress={() => navigation.push("NotificationAdmin")} style={{ paddingLeft: 20 }}>
                        <Entypo name="bell" size={40} color="black" style={styles.icon} />
                        <Text style={styles.FontButton}>Thông báo</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.ServiceButton}>
                <TouchableOpacity onPress={() => navigation.pop()} style={{ paddingLeft: 20 }}>
                    <Entypo name="log-out" size={40} color="black" style={styles.icon} />
                    <Text style={styles.FontButton}>Đăng xuất</Text>
                </TouchableOpacity>
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
    },
    smallIcon: {
        paddingLeft: 9,
    },
    longTexticon: {
        paddingLeft: 30,
    }
})


export default HomeAdmin;