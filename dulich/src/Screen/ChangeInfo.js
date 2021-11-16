import React, { useState,useEffect } from 'react';
import {View,Text,Image, Pressable, StyleSheet, TextInput, SafeAreaView} from 'react-native';
import {KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Appbar } from 'react-native-paper';
import {editProfile} from '../networking/usernetworking';

const ChangeInfo = ({navigation, route}) =>{
    const [fullName, setFullName] = useState(route.params.userInfo.fullName);
    const [email, setEmail] = useState(route.params.userInfo.email);
    const [phonenumber, setPhonenumber] = useState(route.params.userInfo.phonenumber);
    useEffect(()=>{

    })
    const handleInputFullName = (value) =>{
        setFullName(value);
    }
    const goBack = ()=> {
        navigation.pop();
    }
    const handleEditProfile = () =>{
        var params ={
            fullName: fullName,
            email: email,
            phonenumber: phonenumber,
        }
        editProfile(1,params).then((message)=>{
            console.log(message);
            goBack();
        }).catch((error)=>{
            console.log(error);
        });
    }
    return(
        <SafeAreaView style={Styles.container}>
            <Appbar.Header statusBarHeight ={20}>
                <Appbar.BackAction onPress={() => { goBack()}} />
                <Appbar.Content title="Chỉnh sửa thông tin"/>
            </Appbar.Header>
             <KeyboardAwareScrollView>
            <View style={Styles.logo}>
                <Image
                    source={require('../../assets/Logo.png')}
                    style = {Styles.logo}
                />
            </View>
           
                <View style={Styles.cardInfo}>
                    <Text style={Styles.title}>Họ và tên</Text>
                    <TextInput
                        style={Styles.inputText}
                        onChangeText = {(value)=>{handleInputFullName(value)}}
                        placeholder="Nhập họ và tên..."
                        value={fullName}
                    />
                    <Text style={Styles.title}>Email</Text>
                    <TextInput
                        style={Styles.inputText}
                        onChangeText = {setEmail}
                        placeholder="Nhập email..."
                        value={email}
                    />
                    <Text style={Styles.title}>Số điện thoại</Text>
                    <TextInput
                        style={Styles.inputText}
                        onChangeText = {setPhonenumber}                       
                        placeholder="Nhập số điện thoại..."
                        value={phonenumber}
                    />
                </View>
           
            <View style={Styles.button}>
                <Pressable onPress={()=>{handleEditProfile()}} style={Styles.buttonUpdate}>
                    <Text style={Styles.textButton}>Xác nhận</Text>
                </Pressable>
            </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
}

const Styles = StyleSheet.create({
    container:{
        backgroundColor: '#ADD8E6',
        flex:1,
    },
    logo:{
        alignItems:"center",
    },
    cardInfo:{
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
        justifyContent:'center',
        elevation: 14,
    },
    button:{
        alignItems:'center',
        marginTop:20,
        marginBottom: 30,
    },
    buttonUpdate:{
        borderRadius:20,
        padding:18,
        backgroundColor: 'white',
        width: '70%',
        alignItems:'center',
        justifyContent: 'center',
    },
    textButton:{
        fontSize:18,
    },
    inputText:{
        margin: 10,
        borderRadius: 20,
        borderColor: "black",
        padding:15,
        borderWidth:1,
    },
    title:{
        fontSize:18,
        fontWeight: 'bold',
    },
});

export default ChangeInfo;