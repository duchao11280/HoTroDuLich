import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, Image, TextInput, TouchableOpacity, SafeAreaView, FlatList, Alert } from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { Appbar } from 'react-native-paper';
const DetailNotificationUser = ({ navigation, route }) => {

    return(
        <View style={Styles.container}>
            <Appbar.Header statusBarHeight={20}>
                <Appbar.BackAction onPress={() => navigation.pop()} />
                <Appbar.Content title="Thông báo" />
            </Appbar.Header>
            <View style={Styles.cardInfo}>
                <Text style={Styles.title}>
                    {route.params.notification.title}
                </Text>
                <Text style={Styles.content}>
                    {route.params.notification.content}
                </Text>
            </View>
            

        </View>
    )

}



const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#ADD8E6',
        flex: 1,
    },
    title:{
        fontWeight:'bold',
        fontSize: 24,
    },
    content:{
        fontSize: 18,
    },
    cardInfo: {
        flex: 3,
        padding: 25,
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
    }

});

export default DetailNotificationUser;