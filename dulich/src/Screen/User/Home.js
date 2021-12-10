import * as React from 'react';
import { Text, View, StyleSheet, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from 'react-native-vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';



const Home = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <View style={styles.BeachImage}>
                <Image source={require('../../../assets/Beach.png')} />
            </View>

            <View style={styles.HeadButtonView}>
                <View style={styles.ServiceButton}>
                    <TouchableOpacity onPress={() => navigation.navigate("PlacesInfo")}>
                        <Entypo name="location" size={40} color="black" style={styles.icon} />
                        <Text style={styles.FontButton}>Địa điểm</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.ServiceButton}>
                    <TouchableOpacity onPress={() => navigation.navigate("Hotel")}>
                        <FontAwesome5 name={'hotel'} size={40} style={styles.icon} />
                        <Text style={styles.FontButton}>Khách sạn</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.ServiceButton}>
                    <TouchableOpacity onPress={() => navigation.navigate("Restaurant")}>
                        <FontAwesome5 name={'utensils'} size={40} style={styles.icon} />
                        <Text style={styles.FontButton}>Nhà Hàng</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.HeadButtonView}>


                <View style={styles.ServiceButton}>
                    <TouchableOpacity onPress={() => navigation.navigate("Receipt")}>
                        <MaterialIcons name="receipt-long" size={42.5} color="black" style={styles.IconThreeword} />
                        <Text style={styles.FontButton}>Hóa đơn phòng</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.ServiceButton}>
                    <TouchableOpacity onPress={() => navigation.navigate("Information")}>
                        <MaterialIcons name="account-circle" size={42.5} color="black" style={styles.IconTwoWord} />
                        <Text style={styles.FontButton}>Tài khoản</Text>
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
    IconThreeword: {
        paddingLeft: 24,
    },
    IconTwoWord: {
        paddingLeft: 13,
    }
})




export default Home;