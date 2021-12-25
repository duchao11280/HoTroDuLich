import React, { useState, useEffect } from 'react';
import {
  Text, View, StyleSheet, Button, Image, FlatList, Alert,
  ActivityIndicator, TextInput, TouchableOpacity
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
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
      .finally(() => { setLoading(false) })
  }
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header statusBarHeight={20}>
        <Appbar.BackAction onPress={() => navigation.pop()} />
        <Appbar.Content title="Phòng được đặt" />
      </Appbar.Header>
      <View style={styles.container}>
        <View>
          {isLoading ? <ActivityIndicator size="large" color='blue' /> :
            <FlatList
              data={listBookedRoom}
              ListFooterComponent={<View style={{ paddingBottom: 400 }} />}
              keyExtractor={item => item.id.toString()}

              renderItem={({ item, index }) => {
                return (
                  <View style={styles.result}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Mã đặt phòng: {item.id} </Text>
                    <Text style={styles.textinfo}>Tên người đặt: {item.fullName} </Text>
                    <Text style={styles.textinfo}>Số điện thoại: {item.id} </Text>
                    <Text style={styles.textinfo}>Giờ đặt: {item.startTime} </Text>
                    <Text style={styles.textinfo}>Mã phòng: {item.roomID} </Text>
                    <Text style={styles.textinfo}>Tên phòng {item.roomName} </Text>
                    <Text style={styles.textinfo}>Giá:  {item.price} </Text>
                    <Text style={styles.textinfo}>Số người: {item.slot} </Text>
                    <Text style={styles.textinfo}>Địa điểm: {item.placeName} </Text>
                    <Text style={styles.textinfo}>Địa chỉ: {item.address} </Text>
                    <Text style={styles.textinfo}>Môt tả: {item.description} </Text>
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
    backgroundColor: '#e6e6ff'
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
export default BillRoom;