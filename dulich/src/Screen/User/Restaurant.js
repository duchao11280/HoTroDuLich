import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, Image, TextInput, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import DateTimePicker from '@react-native-community/datetimepicker';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const Restaurant = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('');
  const [text, setText] = useState('Xin hãy chọn ngày');
  const [show, setshow] = useState(false)


  const DATA = [
    {
      roomID: '01',
      roomName: 'First Item',
      slot: "mot",
      price: "2",
      placeID: "01"
    },
    {
      roomID: '02',
      roomName: 'First Item',
      slot: "mot",
      price: "2",
      placeID: "01"
    },
    {
      roomID: '03',
      roomName: 'First Item',
      slot: "mot",
      price: "2",
      placeID: "01"
    },
  ];


  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.title}>{item.roomName}</Text>
      <Text>{item.slot}</Text>
      <Text>{item.price}</Text>
    </TouchableOpacity>

  );



  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth()) + '/' + tempDate.getFullYear();
    let fTime = tempDate.getHours() + ':' + tempDate.getMinutes();
    setText(fTime + ',' + fDate)
    console.log(fTime + ',' + fDate);
    setshow(false);
  };


  const showMode = (currentMode) => {
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
    setshow(true)
  };

  const showTimepicker = () => {
    showMode('time');
    setshow(true)
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={[{ paddingTop: 30 }]}>
        <TouchableOpacity onPress={() => { }}>
          <AntDesignIcon name="arrowleft" style={styles.Arrowback} />
        </TouchableOpacity>
      </View>

      <View style={styles.searchInfo}>

        <View>
          <View style={styles.cover}>
            <View style={styles.left}>
              <Text style={styles.font}> Ngày đến :</Text>
            </View>
            <View style={styles.rightTime}>
              <Text style={styles.fontTime}> {text}</Text>
            </View>
          </View>

          <View style={styles.cover} >
            <View style={styles.chooseDate}>
              <TouchableOpacity onPress={showDatepicker}
                style={styles.button}>
                <Text> chọn ngày </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.chooseTime}>
              <View >
                <TouchableOpacity title="Chọn Giờ" onPress={showTimepicker}
                  style={styles.button}>
                  <Text> chọn giờ </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>




        <View style={styles.cover} >
          <View style={styles.left}>
            <Text style={styles.font}> Số người</Text>
          </View>
          <View style={styles.right}>
            <View >
              <TextInput style={styles.Inputprice} placeholder="Nhập số người" />
            </View>
          </View>
        </View>

        <View style={styles.cover} >
          <View style={styles.left}>
            <Text style={styles.font}> Địa chỉ</Text>
          </View>
          <View style={styles.right}>
            <View >
              <TextInput style={styles.Inputprice} placeholder="Nhập địa điểm" />
            </View>
          </View>
        </View>


        <View style={styles.cover} >
          <View style={styles.buttonSearch}>
            <View >
              <TouchableOpacity style={styles.button}>
                <Text> Tìm kiếm </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>



      </View>
      <View style={styles.result}>
        <FlatList
          data={DATA}
          ListFooterComponent={<View style={{ paddingBottom: 400 }}></View>}
          renderItem={renderItem}
          keyExtractor={item => item.roomID}
        />
      </View>

      {show &&
        <DateTimePicker
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      }
    </SafeAreaView >
  )

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6ff'

  },
  searchInfo: {
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
  rightTime: {
    paddingRight: 40
  },
  chooseDate: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 80
  },
  chooseTime: {
    paddingRight: 40
  },
  fontTime: {
    fontSize: 20
  },
  Inputprice: {
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
  buttonSearch: {
    paddingLeft: 250
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
  }


});




export default Restaurant;