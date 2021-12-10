import React, { useState, useEffect } from 'react';
import {
  Text, View, StyleSheet, Button, Image, FlatList,Alert,
  ActivityIndicator, TextInput, TouchableOpacity
} from 'react-native';
import { Appbar } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getRoomsHaveBooked } from '../../networking/hotelnetworking'

const BillRoom = ({ navigation }) => {
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
    getRoomsHaveBooked(user)
      .then((response) => { setListBookedRoom(response.data) })
      .catch(() => { Alert.alert("Thông báo", "Hệ thống xảy ra lỗi, vui lòng thử lại sau") })
      .finally(() => { setLoading(false)})
  }
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header statusBarHeight={20}>
        <Appbar.BackAction onPress={() => navigation.pop()} />
        <Appbar.Content title="Phòng được đặt" />
      </Appbar.Header>
      <View>
        <View>
          {isLoading ? <ActivityIndicator size="large" color='blue' /> :
            <FlatList
              data={listBookedRoom}
              ListFooterComponent={<View style={{ paddingBottom: 400 }} />}
              keyExtractor={item => item.id.toString()}

              renderItem={({ item, index }) => {
                return (
                  <View>
                    <Text>Mã đặt phòng: {item.id} </Text>
                    <Text>Tên người đặt: {item.fullName} </Text>
                    <Text>Số điện thoại: {item.id} </Text>
                    <Text>Giờ đặt: {item.startTime} </Text>
                    <Text>Mã phòng: {item.roomID} </Text>
                    <Text>Tên phòng {item.roomName} </Text>
                    <Text>Giá:  {item.price} </Text>
                    <Text>Số người: {item.slot} </Text>
                    <Text>Địa điểm: {item.placeName} </Text>
                    <Text>Địa chỉ: {item.address} </Text>
                    <Text>Môt tả: {item.description} </Text>
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
export default BillRoom;