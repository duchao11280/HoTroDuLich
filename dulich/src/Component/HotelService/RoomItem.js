import React from 'react';
import { View, Text, Image, Pressable, StyleSheet, Alert, Button, TouchableOpacity } from 'react-native';



const RoomItem = (props) => {
    return (
        // truyền vào 1 cụm các props
        <View style={Styles.RoomItem}>
            <View style={Styles.limmitRow}>
                <Text style={Styles.textInfo}>
                    Id: ok
                </Text>
            </View>

            <View style={Styles.limmitRow}>
                <Text style={Styles.textInfo}>
                    Tên phòng: {props.item.placeName}
                </Text>
            </View>

            <View style={Styles.limmitRow}>
                <Text style={Styles.textInfo}>
                    Số người: {props.item.city}
                </Text>
            </View>

            <View style={Styles.limmitRow}>
                <Text style={Styles.textInfo}>
                    Giá: {props.item.city}
                </Text>
            </View>

            <View style={Styles.limmitRow}>
                <Text style={Styles.textInfo}>
                    Mô tả: {props.item.city}
                </Text>
            </View>





            <View>
                <Text style={Styles.textInfo}>
                    Tỉnh thành: {props.item.city}
                </Text>
            </View>

            <View style={Styles.Updatebutton}>
                <TouchableOpacity style={Styles.PositionTextUpdate}>
                    <Text>Cập nhật</Text>
                </TouchableOpacity>
            </View>

            <View style={Styles.Deletebutton}>
                <TouchableOpacity style={Styles.PositionTextDelete}>
                    <Text>xóa</Text>
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
        paddingTop: 15,
        paddingLeft: 25
    }

})


export default RoomItem;