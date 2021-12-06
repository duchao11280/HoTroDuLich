import React, { Component } from 'react';
import {View,Text,Image, Pressable, StyleSheet} from 'react-native';


class UserItem extends Component{
    render(){
        return(
            <View style={Styles.container}>
                <Text style={Styles.textInfo}>
                    Họ và tên: {this.props.item.fullName}
                </Text>
                <Text style={Styles.textInfo}>
                    Email: {this.props.item.email}
                </Text>
                <Text style={Styles.textInfo}>
                    Số điện thoại: {this.props.item.phoneNumber}
                </Text>
                <Text style={Styles.textInfo}>
                    Loại tài khoản: {this.props.item.role == 0 ? "User":
                    this.props.item.role == 2 ? "Khách Sạn": "Nhà Hàng"} 
                </Text>
            </View>
        );
    }
}
const Styles = StyleSheet.create({
    container:{
        backgroundColor:"#e8ffee",
        borderWidth:1,
        borderRadius:15,
        padding:10,
        marginTop:10,
        marginHorizontal:5,
    },
    textInfo:{
        fontSize:15,

    }
})
export default UserItem;