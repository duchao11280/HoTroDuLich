import React, {useState, useEffect} from 'react';

import {View,Text,Image, Pressable, StyleSheet} from 'react-native';
import Field from '../Component/Profile/Field';
import {getProfile} from '../networking/usernetworking';
const Profile = ({navigation}) =>{
    const [userInfo, setUserInfo] = useState({fullName:'', email:'', phonenumber:''});

    useEffect(() => {
        getProfile(1).then((profile)=>{
            if(profile.length!=0)
                setUserInfo(profile);
            else setUserInfo({});
        }).catch((error)=>{
            setUserInfo({});
        })
    });
    const goToChangeInfo= (info) => {
        navigation.push('ChangeInfo',{userInfo: info});
    }
    const goToChangePassWord= (info) => {
        navigation.push('ChangePassWord');
    }
    return(
        <View style={Styles.container}>
            <View style={Styles.logo}>
                <Image
                    source={require('../../assets/Logo.png')}
                    style = {Styles.logo}
                />
            </View>
            <View style={Styles.cardInfo}>
                <Field title='Họ và tên:' content={userInfo.fullName}></Field>
                <Field title='Email:' content={userInfo.email}></Field>
                <Field title='Số điện thoại:' content={userInfo.phonenumber}></Field>
            </View>
            <View style={Styles.button}>
                <Pressable onPress={()=>{goToChangeInfo(userInfo)}} style={Styles.buttonEdit}>
                    <Text style={Styles.textButton}>Chỉnh sửa thông tin</Text>
                </Pressable>
                <Pressable onPress={()=>{goToChangePassWord()}} style={Styles.buttonEdit}>
                    <Text style={Styles.textButton}>Đổi mật khẩu</Text>
                </Pressable>
            </View>
            
        </View>
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
        flex:3,
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
        flexDirection: 'row',
        marginTop:20,
        marginBottom: 30,
    },
    buttonEdit:{
        borderRadius:20,
        padding:18,
        backgroundColor: 'white',
        width: '50%',
        alignItems:'center',
        justifyContent: 'center',
    },
    textButton:{
        fontSize:18,
    }

});

export default Profile;