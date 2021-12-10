import React from 'react';
import { View, Text, Image, Pressable, StyleSheet, Alert, Button, TouchableOpacity } from 'react-native';



const RoomItem = (props) => {
    return (
        // truyền vào 1 cụm các props
        <View style={Styles.RoomItem}>
            <View style={Styles.limmitRow}>
                <Text style={Styles.textInfo}>
                    Id: {props.item.roomID}
                </Text>
            </View>

            <View style={Styles.limmitRow}>
                <Text style={Styles.textInfo}>
                    Tên phòng: {props.item.roomName}
                </Text>
            </View>

            <View style={Styles.limmitRow}>
                <Text style={Styles.textInfo}>
                    Số người: {props.item.slot}
                </Text>
            </View>

            <View style={Styles.limmitRow}>
                <Text style={Styles.textInfo}>
                    Giá: {props.item.price} đ
                </Text>
            </View>

            <View style={Styles.limmitRow}>
                <Text style={Styles.textInfo}>
                    Mô tả: {props.item.description}
                </Text>
            </View>
            <View>
                <Text style={Styles.textInfo}>
                    Địa chỉ: {props.item.address}
                </Text>
            </View>

            <View style={Styles.Updatebutton}>
                <TouchableOpacity style={Styles.PositionTextUpdate} onPress={() => { props.handleUpdate(props.item) }}>
                    <Text>Cập nhật</Text>
                </TouchableOpacity>
            </View>

            <View style={Styles.Deletebutton} >
                <TouchableOpacity style={Styles.PositionTextDelete} onPress={() => { props.handleDisable(props.item.roomID) }}>
                    <Text>Vô hiệu hóa</Text>
                </TouchableOpacity>
            </View>

        </View>

    );
}

const Styles = StyleSheet.create({
    RoomItem: {
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
    limmitRow: {
        width: '65%',
    },
    Updatebutton: {
        position: 'absolute',
        backgroundColor: "#00e6ac",
        height: 50,
        width: 80,
        top: 0,
        left: 260,
        borderWidth: 1,
        borderRadius: 10
    },
    Deletebutton: {
        position: 'absolute',
        backgroundColor: "#ff6666",
        height: 50,
        width: 80,
        top: 55,
        left: 260,
        borderWidth: 1,
        borderRadius: 10
    },
    PositionTextUpdate: {
        paddingTop: 15,
        paddingLeft: 10
    },
    PositionTextDelete: {
        paddingTop: 10,
        paddingLeft: 15
    },

})


export default RoomItem;