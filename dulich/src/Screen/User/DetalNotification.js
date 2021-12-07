import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, Image, TextInput, TouchableOpacity, SafeAreaView, FlatList, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import DateTimePicker from '@react-native-community/datetimepicker';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const DetailNotification = ({ navigation }) => {
    const DATA = [
        {
            notificationID: '01',
            title: 'First Item',
            content: 'mot',
            time: "00:00"
        },

    ];


    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item}>
            <Text style={styles.title}>Mã thông báo :{item.notificationID}</Text>
            <Text>Tiêu đề: {item.title}</Text>
            <Text>Nội dung: {item.content}</Text>
            <Text>Thời gian: {item.time}</Text>
        </TouchableOpacity>

    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={[{ paddingTop: 30 }]}>
                <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
                    <AntDesignIcon name="arrowleft" style={styles.Arrowback} />
                </TouchableOpacity>
            </View>

            <View style={styles.showInfo}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.notificationID}
                />
            </View>


        </SafeAreaView >
    )

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6e6ff'

    },
    Image: {
        padding: 30,
        paddingLeft: 10,
        alignItems: 'center',
    },
    showInfo: {
        backgroundColor: 'white',
        paddingLeft: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#48BBEC',
        backgroundColor: 'white',
        padding: 10,
        margin: 10
    },
    font: {
        fontSize: 15,
    },
    fontTime: {
        fontSize: 20
    },

    Arrowback: {
        fontSize: 30,
        marginLeft: 10
    },
    item: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginVertical: 1,
        marginHorizontal: 10,
    },
    title: {
        fontSize: 20,
    },
    result: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        margin: 10
    },
    button: {
        backgroundColor: '#79d2a4',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 30,
        width: 100,
        height: 50,
        position: 'absolute',
        top: 100,
        left: 250
    },
    center: {
        position: 'absolute',
        top: 10,
    }


});

export default DetailNotification;