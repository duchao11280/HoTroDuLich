import React, { useState, useEffect} from 'react';
import { Text, View, StyleSheet, Button, Image, TextInput, TouchableOpacity, Alert, SafeAreaView, FlatList } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import DateTimePicker from '@react-native-community/datetimepicker';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { Appbar } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { getAllPlace, addNewRoom } from '../../networking/hotelnetworking'
import AsyncStorage from '@react-native-async-storage/async-storage';
const AddRoom = ({ navigation }) => {

    const [slot, setSlot] = useState('')
    const [roomName, setRoomName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [placeID, setPlaceID] = useState('')
    const [address, setAddress] = useState("")
    const [isLoading, setLoading] = useState(false);
    const [listPlace, setListPlaces] = useState([])

    let isValidate = false;
    let userID
    useEffect(() => {
        setLoading(true);
        getAllPlace()
            .then((list)=>{ setListPlaces(list)})
            .catch(()=>{ Alert.alert("Thông báo", "Hệ thống xảy ra lỗi, vui lòng thử lại sau")})
            .finally(()=>{setLoading(false)})
    },[])
    const getUserID = async () => {
        try {
            const id = await AsyncStorage.getItem('userID')
            userID = parseInt(id);
            return userID
        } catch (error) {
            return
        }
    }
    const goBack = () => {
        navigation.pop();
    }
    //Add room
    const onAddRoom = async () => {
        const uid = await getUserID();
        var params = {
            roomName: roomName,
            slot: slot,
            price: price,
            description: description,
            address: address,
            userID: uid,
            placeID: placeID
        };
        addNewRoom(params)
            .then((res)=>{console.log(res.message)})
            .catch((err)=>{console.log(err)})
    }

    const validate = () => {
        const reg = new RegExp('^[0-9]+$');
        if (roomName.length == 0) {
            showAlert("Bạn chưa nhập tên phòng", false);
            isValidate = false
        }
        else if (slot.length == 0) {
            showAlert("Bạn chưa nhập số người", false);
            isValidate = false
        }
        else if (!reg.test(slot)) {
            showAlert("Số người không hợp lệ", false);
            isValidate = false
        }
        else if (slot.includes(" ")) {
            showAlert("Số người không được phép có khoảng trắng", false);
            isValidate = false
        }
        else if (description.length == 0) {
            showAlert("Bạn chưa nhập mô tả", false);
            isValidate = false
        }

        else if (price.length == 0) {
            showAlert("Bạn chưa nhập giá tiền", false);
            isValidate = false
        }
        else if (!reg.test(price)) {
            showAlert("Giá tiền không hợp lệ", false);
            isValidate = false
        }
        else if (price.includes(" ")) {
            showAlert("số tiền không được chứa khoảng trắng", false);
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


    const popup = () => {
        Alert.alert(
            //title
            'Xác nhận Thêm Phòng',
            //body
            'Bạn có chắc muốn thêm phòng này?',
            [
                { text: 'Có', onPress: () => {onAddRoom(), goBack()} },
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
            <Appbar.Header statusBarHeight={20}>
                <Appbar.BackAction onPress={() => navigation.pop()} />
                <Appbar.Content title="Thêm phòng" />
            </Appbar.Header>


            <View style={styles.searchInfo}>
                <View style={styles.cover} >
                    <View style={styles.left}>
                        <Text style={styles.font}> Tên phòng:</Text>
                    </View>
                    <View style={styles.right}>
                        <View >
                            <TextInput style={styles.Inputprice} placeholder="Nhập tên phòng"
                                value={roomName}
                                onChangeText={setRoomName}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.cover} >
                    <View style={styles.left}>
                        <Text style={styles.font}> Số người:</Text>
                    </View>
                    <View style={styles.right}>
                        <View >
                            <TextInput style={styles.Inputprice} placeholder="Nhập số người"
                                value={slot}
                                onChangeText={setSlot}
                                keyboardType='numeric'
                            />
                        </View>
                    </View>
                </View>


                <View style={styles.cover} >
                    <View style={styles.left}>
                        <Text style={styles.font}> Mô tả:</Text>
                    </View>
                    <View style={styles.right}>
                        <View >
                            <TextInput style={styles.Inputprice} placeholder="Nhập mô tả"
                                value={description}
                                onChangeText={setDescription}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.cover} >
                    <View style={styles.left}>
                        <Text style={styles.font}> Địa chỉ:</Text>
                    </View>
                    <View style={styles.right}>
                        <View >
                            <TextInput style={styles.Inputprice} placeholder="Nhập địa chỉ"
                                value={address}
                                onChangeText={setAddress}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.cover} >
                    <View style={styles.left}>
                        <Text style={styles.font}> Giá tiền</Text>
                    </View>
                    <View style={styles.right}>
                        <View >
                            <TextInput style={styles.Inputprice} placeholder="Nhập giá bàn"
                                keyboardType='numeric'
                                value={price}
                                onChangeText={setPrice}
                            />
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
                        onValueChange={(value) => setPlaceID(value)}
                    >
                        {listPlace.length!==undefined?listPlace.map(({placeID,placeName})=>{
                            return (<Picker.Item label={placeName} value={placeID} key={placeID}/>)
                        }):<Picker.Item label="Bãi Dâu" value="1" />}
                    </Picker>
                </View>


                <View style={styles.cover} >
                    <View style={styles.buttonSearch}>
                        <View >
                            <TouchableOpacity title="Thêm Phòng" style={styles.button}
                                onPress={() => {
                                    validate()
                                    if (isValidate) {
                                        console.log('Thêm được')
                                        popup()
                                        isValidate = false;
                                    }
                                }}
                            >
                                <View style={styles.PositionInSearch}>
                                    <Text> Thêm Phòng </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>



            </View>

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
        paddingTop: 20
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
        paddingLeft: 240
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
        height: 40
    },
    ViewPicker: {
        paddingTop: 5,
        borderWidth: 1,
        borderRadius: 10,
    },
    PositionInSearch: {
        paddingTop: 6
    }


});




export default AddRoom;