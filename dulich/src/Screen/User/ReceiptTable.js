import React, { useState, useEffect } from 'react';
import {
    Text, View, StyleSheet, Button, Image, FlatList,
    ActivityIndicator, TextInput, TouchableOpacity
} from 'react-native';
import { Appbar } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { bookedTableByUserID } from '../../networking/tablenetworking'

const ReceiptTable = ({ navigation }) => {
    const [listBookedRoom, setListBookedRoom] = useState([])
    const [isLoading, setLoading] = useState(false)
    let userID;
    useEffect(() => {
        getBookedRoom()
    }, [])
    const getUserID = async () => {
        try {
            const id = await AsyncStorage.getItem('userID')
            userID = parseInt(id);
            return userID
        } catch (error) {
            return
        }
    }
    const getBookedRoom = async () => {
        setLoading(true)
        const user = await getUserID();
        bookedTableByUserID(user)
            .then((response) => { setListBookedRoom(response.data) })
            .catch(() => { Alert.alert("Thông báo", "Hệ thống xảy ra lỗi, vui lòng thử lại sau") })
            .finally(() => { setLoading(false) })
    }
    return (
        <View style={styles.container}>
            <Appbar.Header statusBarHeight={20}>
                <Appbar.BackAction onPress={() => navigation.pop()} />
                <Appbar.Content title="Hóa đơn" />
            </Appbar.Header>
            <View style={styles.container}>
                <View >
                    {isLoading ? <ActivityIndicator size="large" color='blue' /> :
                        <FlatList
                            data={listBookedRoom}
                            ListFooterComponent={<View style={{ paddingBottom: 400 }} />}
                            keyExtractor={item => item.id.toString()}

                            renderItem={({ item, index }) => {
                                return (
                                    <View style={styles.result}>
                                        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Bàn:{item.tableName} </Text>
                                        <Text style={styles.textinfo}>Địa điểm: {item.placeName} </Text>
                                        <Text style={styles.textinfo}>Địa chỉ: {item.address} </Text>
                                        <Text style={styles.textinfo}>Địa điểm: {item.placeName} </Text>
                                        <Text style={styles.textinfo}>Thời gian: {item.startTime} </Text>
                                    </View>

                                );
                            }}
                        >
                        </FlatList>}
                </View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e6e6ff',
        flex: 1
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 15,
    },
    content: {
        fontSize: 18,
        marginLeft: 18,
    },
    result: {
        backgroundColor: '#ffe6ff',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        margin: 10
    },
    textinfo: {
        padding: 2
    }
})
export default ReceiptTable;