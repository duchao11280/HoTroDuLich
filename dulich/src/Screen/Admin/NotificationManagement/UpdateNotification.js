import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Image, TextInput, Pressable, Alert, SafeAreaView, FlatList } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Appbar } from 'react-native-paper';

import { updateNotification } from '../../../networking/adminnetworking'

const UpdateNotification = ({ navigation, route }) => {


    const [title, setTitle] = useState(route.params.notification.title)
    const [content, setContent] = useState(route.params.notification.content)
    const [isLoading, setLoading] = useState(false);

    let isValidate = false;
    const goBack = () => {
        navigation.pop();
    }
    //Add room
    const onUpdateNotification = async () => {
        var id = route.params.notification.notificationID;
        updateNotification(id, title, content)
            .then((res) => { Alert.alert("Thông báo", "Cập nhật thành công") })
            .catch((err) => { console.log(err) })
    }

    const validate = () => {
        if (title.length == 0) {
            showAlert("Bạn chưa nhập tiêu đề", false);
            isValidate = false
        }

        else if (content.length == 0) {
            showAlert("Bạn chưa nhập nội dung", false);
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
            'Xác nhận Sửa thông báo',
            //body
            'Bạn có chắc muốn sửa thông báo này?',
            [
                { text: 'Có', onPress: () => { onUpdateNotification(), goBack() } },
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
                <Appbar.Content title="Cập nhật thông báo" />
            </Appbar.Header>


            <View style={styles.cardInput}>
                <Text style={styles.title}>Tiêu đề</Text>
                <TextInput
                    style={styles.inputText}

                    onChangeText={setTitle}
                    placeholder="Nhập tiêu đề..."
                    value={title}
                />
                <Text style={styles.title}>Nội dung</Text>
                <TextInput
                    style={styles.inputText}
                    multiline

                    onChangeText={setContent}
                    placeholder="Nhập nội dung..."
                    value={content}
                />


                <View style={styles.button}>
                    <Pressable onPress={() => {
                        validate()
                        if (isValidate) {

                            popup();
                            isValidate = false;
                        }

                    }} style={styles.buttonUpdate}>
                        <Text style={styles.textButton}>Sửa thông báo</Text>
                    </Pressable>
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
    cardInput: {
        width: '90%',

        marginHorizontal: '5%',
        marginTop: '5%',
        padding: 25,
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 30,
    },
    buttonUpdate: {
        borderRadius: 20,
        padding: 18,

        backgroundColor: 'green',
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        fontSize: 18,
        color: 'white',
    },
    inputText: {
        margin: 10,
        borderRadius: 20,
        borderColor: "black",
        padding: 15,
        borderWidth: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },

});




export default UpdateNotification;