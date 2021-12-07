import React, { useState, useEffect } from 'react';

import { View, Text, Image, Pressable, StyleSheet, Alert } from 'react-native';
import Field from '../Component/Profile/Field';
import { getProfile } from '../networking/usernetworking';
import { useIsFocused } from '@react-navigation/native';
import { Appbar } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({ navigation }) => {
    const [userInfo, setUserInfo] = useState({ fullName: '', email: '', phonenumber: '' });
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
        getUserID()
            .then(() => {
                getProfile(userID).then((profile) => {
                    if (profile.length != 0)
                        setUserInfo(profile);
                    else setUserInfo({fullName: '', email: '', phonenumber: ''});
                }).catch((error) => {
                    setUserInfo({fullName: '', email: '', phonenumber: ''});
                })
            })
            .catch(() => { Alert.alert("Thông báo", "Hệ thống xảy ra lỗi, vui lòng thử lại sau") })


    }, [isFocused]);
    const goToChangeInfo = (info) => {
        navigation.push('ChangeInfo', { userInfo: info});
    }
    const goToChangePassWord = (info) => {
        navigation.push('ChangePassWord');
    }
    return (
        <View style={Styles.container}>
            <Appbar.Header statusBarHeight={20}>
                <Appbar.BackAction onPress={() => navigation.pop()} />
                <Appbar.Content title="Thông tin tài khoản" />
            </Appbar.Header>
            <View style={Styles.logo}>
                <Image
                    source={require('../../assets/Logo.png')}
                    style={Styles.logo}
                />
            </View>
            <View style={Styles.cardInfo}>
                <Field title='Họ và tên:' content={userInfo.fullName}></Field>
                <Field title='Email:' content={userInfo.email}></Field>
                <Field title='Số điện thoại:' content={userInfo.phonenumber}></Field>
            </View>
            <View style={Styles.button}>
                <Pressable onPress={() => { goToChangeInfo(userInfo) }} style={Styles.buttonEdit}>
                    <Text style={Styles.textButton}>Chỉnh sửa thông tin</Text>
                </Pressable>
                <Pressable onPress={() => { goToChangePassWord() }} style={Styles.buttonEdit}>
                    <Text style={Styles.textButton}>Đổi mật khẩu</Text>
                </Pressable>
            </View>

        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#ADD8E6',
        flex: 1,
    },
    logo: {
        alignItems: "center",
    },
    cardInfo: {
        flex: 3,
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
        justifyContent: 'center',
        elevation: 14,
    },
    button: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 30,
    },
    buttonEdit: {
        borderRadius: 20,
        padding: 18,
        backgroundColor: 'white',
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        fontSize: 18,
    }

});

export default Profile;