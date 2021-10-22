import React from 'react';
import {View,Text,Image, Pressable, StyleSheet, TextInput, SafeAreaView} from 'react-native';
import {KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Appbar } from 'react-native-paper';
const ChangeInfo = () =>{
    const [fullName, setFullName] = React.useState('Duc Hao');
    const [email, setEmail] = React.useState('duchao3003@gmail.com');
    const [phoneNumber, setPhoneNumber] = React.useState('01119191991');


    return(
        <SafeAreaView style={Styles.container}>
            <Appbar.Header statusBarHeight ={20}>
                <Appbar.BackAction onPress={() => {}} />
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
                        onChangeText = {setFullName}
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
                        onChangeText = {setPhoneNumber}                       
                        placeholder="Nhập số điện thoại..."
                        value={phoneNumber}
                    />
                </View>
           
            <View style={Styles.button}>
                <Pressable onPress={()=>{console.log(fullName+" "+ email+ " "+ phoneNumber)}} style={Styles.buttonUpdate}>
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