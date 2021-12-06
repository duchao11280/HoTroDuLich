import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, Image, TextInput, TouchableOpacity, SafeAreaView, FlatList, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import DateTimePicker from '@react-native-community/datetimepicker';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const DetailHotel = () => {
  const DATA = [
    {
      roomID: '01',
      roomName: 'Name',
      description: " mot khach san chat luong",
      slot: "mot",
      price: "2",
      placeID: "01"
    },

  ];

  const popup = () => {
    Alert.alert(
      //title
      'Xác nhận đặt phòng',
      //body
      'Bạn có chắc muốn đặt phòng này?',
      [
        { text: 'Có', onPress: () => console.log('Yes Pressed') },
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


  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.title}>Tên phòng :{item.roomName}</Text>
      <Text>Số người: {item.slot}</Text>
      <Text>Giá phòng: {item.price}</Text>
      <Text>Mô tả: {item.description}</Text>
      <Text>Địa chỉ: {item.placeID}</Text>
    </TouchableOpacity>

  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={[{ paddingTop: 30 }]}>
        <TouchableOpacity onPress={() => { }}>
          <AntDesignIcon name="arrowleft" style={styles.Arrowback} />
        </TouchableOpacity>
      </View>

      <View style={styles.showInfo}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.roomID}
        />
      </View>
      <View style={styles.Image}>
        <Image source={require('../../../assets/Beach.png')} />
      </View>
      <View>
        <TouchableOpacity style={styles.button}
          onPress={() => {
            popup()
          }}>
          <View style={styles.center}>
            <Text> Đặt phòng này</Text>
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
  }


});

export default DetailHotel;