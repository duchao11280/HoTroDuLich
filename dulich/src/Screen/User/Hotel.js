import React, { useState, useEffect} from 'react';
import { Text, View, StyleSheet, Button, Image, TextInput, TouchableOpacity, Alert, SafeAreaView, FlatList } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Appbar } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import {getAllPlaceIDandName} from '../../networking/placeNetworking'
import {searchRoomtoBook} from '../../networking/roomnetworking'
const Hotel = ({ navigation }) => {
  const [listRoom, setListRoom] = useState([])
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('');
  const [text, setText] = useState('Xin hãy chọn ngày');
  const [show, setshow] = useState(false)
  const [price, setPrice] = useState('')
  const [slot, setSlot] = useState('')
  const [listPlace, setListPlaces] = useState([])
  const [placeID, setPlaceID] = useState('')
  const [timeBook, setTimeBook] = useState('')
  const [isLoading, setLoading] = useState(false);
  let isValidate = false;

  useEffect(() => {
    setLoading(true);
    getAllPlaceIDandName()
        .then((list)=>{ setListPlaces(list)})
        .catch(()=>{ Alert.alert("Thông báo", "Hệ thống xảy ra lỗi, vui lòng thử lại sau")})
        .finally(()=>{setLoading(false)})
},[])
  const validate = () => {
    const reg = new RegExp('^[0-9]+$');
    if (price.length == 0) {
      showAlert("Bạn chưa nhập giá tiền", false);
      isValidate = false
    }
    else if (text == 'Xin hãy chọn ngày') {
      showAlert("Vui lòng chọn ngày đến", false);
      isValidate = false
    }
    else if (!reg.test(price)) {
      showAlert("Giá tiền không hợp lệ", false);
      isValidate = false
    }
    else if (price.includes(" ")) {
      showAlert("số tiền không được chứa khoảng trống", false);
      isValidate = false
    }
    else if (slot.length == 0) {
      showAlert("Bạn chưa nhập số người", false);
      isValidate = false
    }
    else if (slot.includes(" ")) {
      showAlert("số người không được chứa khoảng trống", false);
      isValidate = false
    }
    else if (!reg.test(slot)) {
      showAlert("Số lượng người chưa hợp lệ", false);
      isValidate = false
    }
    else if (placeID == -1) {
      showAlert("Chọn Địa điểm", false);
      isValidate = false
    }
    else isValidate = true
  }
  const onSearch = () =>{ 
    
    searchRoomtoBook(slot, price,placeID,text)
      .then((response)=>{console.log(response);setListRoom(response.data);setTimeBook(response.timeBook)})
      .catch(()=> { Alert.alert("Thông báo", "Hệ thống xảy ra lỗi, vui lòng thử lại sau") })
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
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() =>{
      navigation.push('DetailHotel',{room: item, timeBook: timeBook})
    }}>
      <Text style={styles.title}>{item.roomName}</Text>
      <Text>{item.slot}</Text>
      <Text>{item.price}</Text>
    <Text>{item.address}</Text>
    </TouchableOpacity>

  );



  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let fDate = tempDate.getFullYear() + '-' + (tempDate.getMonth()) + '-' + tempDate.getDate();
    let fTime = tempDate.getHours() + ':' + tempDate.getMinutes();
    setText(fDate + ' ' + fTime)
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
      <Appbar.Header statusBarHeight={20}>
        <Appbar.BackAction onPress={() => navigation.pop()} />
        <Appbar.Content title="Khách sạn" />
      </Appbar.Header>


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
            <Text style={styles.font}> Giá tiền</Text>
          </View>
          <View style={styles.right}>
            <View >
              <TextInput style={styles.Inputprice} placeholder="Nhập giá phòng"
                keyboardType='numeric'
                value={price}
                onChangeText={setPrice}
              />
            </View>
          </View>
        </View>

        <View style={styles.cover} >
          <View style={styles.left}>
            <Text style={styles.font}> Số người</Text>
          </View>
          <View style={styles.right}>
            <View >
              <TextInput style={styles.Inputprice} placeholder="Nhập số người"
                keyboardType='numeric'
                value={slot}
                onChangeText={setSlot} />
            </View>
          </View>
        </View>

        <View style={styles.cover} >
          <View style={styles.left}>
            <Text style={styles.font}> Địa Điểm :</Text>
          </View>
          <View style={styles.right}>
          </View>
        </View>


        <View style={styles.ViewPicker}>
          <Picker
            selectedValue={placeID}
            onValueChange={setPlaceID}
          >
            <Picker.Item label="Lựa chọn" value="-1" />
            {listPlace.length !== 0 ? listPlace.map(({ placeID, placeName }) => {
              return (<Picker.Item label={placeName} value={placeID} key={placeID} />)
            }) : <Picker.Item label="" value="-2" />}
          </Picker>
        </View>


        <View style={styles.cover} >
          <View style={styles.buttonSearch}>
            <View >
              <TouchableOpacity style={styles.button}
                onPress={() => {
                  validate()
                  if (isValidate) {
                    onSearch()
                    isValidate = false;
                  }
                }}
              >
                <Text> Tìm kiếm </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>


      </View>
      <View style={styles.result}>
        <FlatList
          data={listRoom}
          ListFooterComponent={<View style={{ paddingBottom: 400 }}></View>}
          renderItem={renderItem}
          keyExtractor={item => item.roomID.toString()}
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
  },
  ViewPicker: {
    paddingTop: 10
  },


});




export default Hotel;