import React, { Component } from 'react';
import { View, Text, Image, Pressable, StyleSheet, Alert } from 'react-native';


const UserItem =(props) => {
    return (
        // truyền vào 1 cụm các props

            <View style={Styles.container}>
                <Text style={Styles.textInfo}>
                    Họ và tên: {props.item.fullName}
                </Text>
                <Text style={Styles.textInfo}>
                    Email: {props.item.email}
                </Text>
                <Text style={Styles.textInfo}>
                    Số điện thoại: {props.item.phonenumber}
                </Text>
                <Text style={Styles.textInfo}>
                    Loại tài khoản: {props.item.role == 0 ? "User" :
                        props.item.role == 2 ? "Khách Sạn" : "Nhà Hàng"}
                </Text>
            </View>

        
    );
}

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: "#e8ffee",
        borderRadius: 15,
        padding: 10,
        marginTop: 10,
        marginHorizontal: 5,
    },
    textInfo: {
        fontSize: 15,

    },

})
export default UserItem;