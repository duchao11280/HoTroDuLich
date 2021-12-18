import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Image, TextInput, TouchableOpacity, SafeAreaView, FlatList, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import DateTimePicker from '@react-native-community/datetimepicker';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { bookRoom } from '../../networking/roomnetworking'

const DetailHotel = ({ navigation, route }) => {
  const [room, setRoom] = useState(route.params.room);
  const [phoneNumber, setPhoneNumber] = useState('');
  let isValidate = false;
  // lấy userID từ store
  let userID;
  const getUserID = async () => {
    try {
      const id = await AsyncStorage.getItem('userID')
      userID = parseInt(id);
      return userID
    } catch (error) {
      return
    }
  }
  const validate = () => {
    if (phoneNumber.length < 10) {
      showAlert("số điện thoại không hợp lệ", false);
      isValidate = false
    }
    else isValidate = true

  }

  const showAlert = (mess, status) => {
    Alert.alert(
      "Thông báo",
      mess,
      [
        { text: "Ok", onPress: () => { if (status != false) { goBack() } } }
      ]
    );
  }

  const goBack = () => {
    navigation.pop();
  }
  const onBookRoom = async () => {
    const user = await getUserID()
    bookRoom(room.roomID, user, route.params.timeBook, phoneNumber)
      .then((response) => { Alert.alert("Thông báo", response.message); goBack() })
      .catch(() => { Alert.alert("Thông báo", "Hệ thống xảy ra lỗi, vui lòng thử lại sau") })
  }
  const popup = () => {
    Alert.alert(
      //title
      'Xác nhận đặt phòng',
      //body
      'Bạn có chắc muốn đặt phòng này?',
      [
        { text: 'Có', onPress: () => onBookRoom() },
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
    <SafeAreaView style={styles.container}>
      <View style={[{ paddingTop: 30 }]}>
        <TouchableOpacity onPress={() => { goBack() }}>
          <AntDesignIcon name="arrowleft" style={styles.Arrowback} />
        </TouchableOpacity>
      </View>

      <View style={styles.showInfo}>
        <Text style={styles.title}>Tên phòng :{room.roomName}</Text>
        <Text>Số người: {room.slot}</Text>
        <Text>Giá phòng: {room.price}</Text>
        <Text>Mô tả: {room.description}</Text>
        <Text>Địa chỉ: {room.address}</Text>
      </View>

      <View style={styles.cover} >
        <View style={styles.left}>
          <Text style={styles.font}> Số điện thoại</Text>
        </View>
        <View style={styles.right}>
          <View >
            <TextInput style={styles.inputText} placeholder="Nhập số điện thoại để liên lạc"
              keyboardType='numeric'
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.button}
          onPress={() => {
            validate()
            if (isValidate) {
              console.log("Press")
              popup()
              isValidate = false;
            }
          }}>
          <View style={styles.center}>
            <Text> Đặt phòng</Text>
          </View>
        </TouchableOpacity>

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
    width: 100,
    height: 100,
    alignSelf: 'stretch',
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
    top: 300,
    left: 250
  },
  center: {
    position: 'absolute',
    top: 10,
  },
  cover: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 7
  },
  left: {
    flex: 1,
    flexDirection: 'row'
  },
  right: {
    paddingRight: 20
  },
  inputText: {
    width: 200,
    height: 35,
    marginLeft: 10,
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#48BBEC',
    backgroundColor: 'white',
    paddingLeft: 20,
  },
});

export default DetailHotel;