import React, { Component, useEffect, useState } from 'react';
import {
    View, Text, Image, Pressable, RefreshControl, Alert,
    ActivityIndicator, StyleSheet, FlatList, SafeAreaView, TouchableHighlight
} from 'react-native';
import RoomItem from '../../Component/HotelService/RoomItem'
import { Appbar } from 'react-native-paper';
import { SearchBar } from "react-native-elements";
import { getAllRoomByUserID, disableRoom } from '../../networking/hotelnetworking'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

const RoomManagement = ({ navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const [listRoom, setListRoom] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    const [refreshing, setRefreshing] = useState(false);
    const isFocused = useIsFocused();
    let userID;
    const getUserID = async () => {
        try {
            const id = await AsyncStorage.getItem('userID')
            userID = parseInt(id);
        } catch (error) {
            Alert.alert("Thông báo", "Hệ thống xảy ra lỗi, vui lòng thử lại sau")
        }
    }
    useEffect(() => {
        getRoomFromServer()

    }, [isFocused]);
    const getRoomFromServer = () => {
        getUserID()
            .then(() => {
                getAllRoomByUserID(userID).then((listRoom) => { setListRoom(listRoom) })
                    .catch((err) => { Alert.alert("Thông báo", "Hệ thống xảy ra lỗi, vui lòng thử lại sau") })
                    .finally(() => { setLoading(false), setRefreshing(false); });
            })
            .catch(() => { Alert.alert("Thông báo", "Hệ thống xảy ra lỗi, vui lòng thử lại sau") })

    }
    // khi kéo từ trên xuống refresh lại dữ liệu
    const onRefresh = () => { setRefreshing(true); getRoomFromServer() }
    const handleSearch = (text) => {
        setSearchfield(text);
    };
    // Lọc room theo search 
    const filteredRoom = listRoom == undefined ? [] : listRoom.filter(room => {
        var searchName = room.roomName.toLowerCase().includes(searchfield.toLowerCase());

        return searchName;
    })
    const gotoUpdate = (room) => {
        navigation.push('UpdateRoom', { room: room })
    }
    const onDisableRoom = (id) => {
        Alert.alert(
            //title
            'Cảnh báo',
            //body
            'Bạn có chắc muốn vô hiệu hóa phòng này?',
            [
                {
                    text: 'Có', onPress: () => {
                        disableRoom(id)
                            .then((res) => { console.log(res.message) })
                            .catch((err) => { console.log(err) })
                            .finally(() => { onRefresh() })
                    }
                },
                {
                    text: 'Không',
                    onPress: () => console.log('No Pressed'),
                    style: 'cancel',
                },
            ],
            { cancelable: false }
            //clicking out side of alert will not cancel
        )

    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View >
                <Appbar.Header statusBarHeight={20}>
                    <Appbar.BackAction onPress={() => { navigation.pop() }} />
                    <Appbar.Content title="Quản lý phòng" />
                </Appbar.Header>
                <SearchBar
                    placeholder="Type Here..."
                    lightTheme
                    round // bo góc
                    onChangeText={handleSearch}
                    value={searchfield}
                />
                <Pressable style={{ alignSelf: 'flex-end' }}
                    onPress={() => { navigation.push('AddRoom') }}
                >
                    <Text style={styles.button}>Thêm mới</Text>
                </Pressable>

                <View>
                    {isLoading ? <ActivityIndicator size="large" color='blue' /> :
                        <FlatList
                            data={filteredRoom}
                            ListFooterComponent={<View style={{ paddingBottom: 400 }} />}
                            keyExtractor={item => item.roomID.toString()}

                            renderItem={({ item, index }) => {
                                return (

                                    <RoomItem item={item} index={index}
                                        handleUpdate={gotoUpdate} handleDisable={onDisableRoom}>
                                    </RoomItem>

                                );
                            }}
                            refreshControl={
                                <RefreshControl
                                    refreshing={refreshing}
                                    onRefresh={() => onRefresh()}
                                />
                            }
                        >
                        </FlatList>}
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'green',
        color: 'white',
        borderRadius: 15,
        marginRight: 10,
        paddingHorizontal: 20,
        paddingVertical: 5,
        width: 'auto',
        fontSize: 18,
    },
})

export default RoomManagement;