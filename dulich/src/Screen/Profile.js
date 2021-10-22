import React from 'react';

import {View,Text,Image, Pressable, StyleSheet} from 'react-native';
import Field from '../Component/Profile/Field';

const Profile = () =>{
    return(
        <View style={Styles.container}>
            <View style={Styles.logo}>
                <Image
                    source={require('../../assets/Logo.png')}
                    style = {Styles.logo}
                />
            </View>
            <View style={Styles.cardInfo}>
                <Field title='Họ và tên:' content='Nguyễn Đức Hảo'></Field>
                <Field title='Email:' content='duchao3003@gmail.com'></Field>
                <Field title='Số điện thoại:' content='01219792465'></Field>
            </View>
            <View style={Styles.button}>
                <Pressable onPress={()=>{}} style={Styles.buttonEdit}>
                    <Text style={Styles.textButton}>Chỉnh sửa thông tin</Text>
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
        marginTop:20,
        marginBottom: 30,
    },
    buttonEdit:{
        borderRadius:20,
        padding:18,
        backgroundColor: 'white',
        width: '70%',
        alignItems:'center',
        justifyContent: 'center',
    },
    textButton:{
        fontSize:18,
    }

});

export default Profile;