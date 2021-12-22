import React, { useState, useEffect } from 'react';
import {
    Text, View, StyleSheet, FlatList,
    ActivityIndicator, TextInput, TouchableOpacity, Alert
} from 'react-native';
import { Appbar } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { sendFeedback } from '../../networking/usernetworking';

const Feedback = ({ navigation }) => {
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    let isValidate = false;
    const [isLoading, setLoading] = useState(false);


    const validate = () => {
        if (content.length == 0) {
            showAlert("Không được để trống tiêu đề", false);
            isValidate = false
        }
        else if (title.length == 0) {
            showAlert("Không được để trống nội dung", false);
            isValidate = false
        }
        else if (title.length > 20) {
            showAlert("Tiêu đề quá dài, xin hãy đặt lại", false);
            isValidate = false
        }
        else if (content.length > 300) {
            showAlert("Nội dung không được quá 300 kí tự", false);
            isValidate = false
        }
        else isValidate = true
    }
    const showAlert = (mess, status) => {
        Alert.alert(
            "Thông báo",
            mess,
            [
                { text: "Ok", onPress: () => { if (status != false) { } } }
            ]
        );
    }


    // Lấy userID từ store
    let userID;
    const getUserID = async () => {
        try {
            const id = await AsyncStorage.getItem('userID')
            userID = parseInt(id);
        } catch (error) {
            Alert.alert("Thông báo", "Hệ thống xảy ra lỗi, vui lòng thử lại sau")
        }
    }



    // xử lý gửi phản hồi
    const handleSendFeedBack = () => {
        setLoading(true)
        var params = {
            content: content,
            title: title,
        }
        getUserID()
            .then(() => sendFeedback(userID, params)
                .then((response) => {
                    setLoading(false);
                    showAlert(response.message, response.status);
                })
                .catch((error) => {
                    Alert.alert("Thông báo", "Xảy ra lỗi, vui lòng thử lại sau");
                })
            )
            .catch(() => Alert.alert("Thông báo", "Hệ thống xảy ra lỗi, vui lòng thử lại sau"));
    }

    return (
        <KeyboardAwareScrollView style={styles.container}>
            <Appbar.Header statusBarHeight={20}>
                <Appbar.BackAction onPress={() => navigation.pop()} />
                <Appbar.Content title="Gửi Thư - Góp ý" />
            </Appbar.Header>
            <View>
                <View style={styles.searchInfo}>
                    <View style={styles.cover} >
                        <View style={styles.left}>
                            <Text style={styles.font}> Tiêu đề</Text>
                        </View>
                        <View style={styles.right}>
                            <View >
                                <TextInput style={styles.Inputprice} placeholder="Nhập tiêu đề"
                                    value={title}
                                    onChangeText={setTitle}
                                />
                            </View>
                        </View>
                    </View>


                    <View style={styles.cover} >
                        <View style={styles.left}>
                            <Text style={styles.font}> Nội dung</Text>
                        </View>
                    </View>

                    <View style={{ paddingTop: 15 }} >
                        <TextInput style={styles.InputFeedback}
                            multiline={true}
                            value={content}
                            onChangeText={setContent}
                        ></TextInput>
                    </View>


                </View >

                <View style={styles.Send}>
                    <TouchableOpacity
                        onPress={() => {
                            validate()
                            if (isValidate) {
                                handleSendFeedBack();
                                isValidate = false;
                            }
                        }}
                    >
                        <View style={styles.PositionInSend}>
                            <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Gửi Phản Hồi</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAwareScrollView>
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
    InputFeedback: {
        width: 300,
        height: 400,
        marginLeft: 10,
        fontSize: 15,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#48BBEC',
        backgroundColor: 'white',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 12,
        textAlignVertical: 'top'
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
        fontWeight: 'bold',
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
    Send: {
        borderWidth: 1,
        borderRadius: 10,
        height: 50,
        width: 100,
        marginLeft: 240,
        backgroundColor: '#00cc00'
    },
    PositionInSend: {
        paddingTop: 13,
        paddingLeft: 9
    }


});

export default Feedback;