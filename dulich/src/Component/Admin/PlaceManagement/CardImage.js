import React, { Component } from 'react';
import { View, Text, Image, Pressable, StyleSheet, Alert } from 'react-native';


const CardImage = (props) => {
    return (
        <View style={Styles.container}>
            <View style={Styles.image}>
                <Image
                    source={{
                        height: 300,
                        width: 300,
                        uri: props.item.image,
                    }}
                />
            </View>
            <Pressable
                style={Styles.delete}
                onPress={() => {
                    Alert.alert(
                        "Cảnh báo",
                        "Bạn có muốn xóa hình ảnh này?",
                        [
                            { text: "Đồng ý", onPress: () => { props.disableImage(props.item.id)} },
                            { text: "Hủy bỏ", onPress: () => { }}
                        ]
                    )
                }}
            >
                <Text style={Styles.textDelete}>X</Text>
            </Pressable>

        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#e8ffee",
        borderRadius: 15,
        marginTop: 10,
        marginRight: 15,
        elevation: 10,
    },
    image: {
        padding: 10,
        marginHorizontal: 5,
    },
    delete: {
        width: 35,
        height: 35,
        borderRadius: 20,
        elevation: 15,
        position: "absolute",
        right: 5,
        top: 5,
        backgroundColor: 'white',

    },
    textDelete: {
        fontSize: 18,
        height: 35,
        textAlignVertical: 'center',
        textAlign: "center",
        color: 'red',

    }


})
export default CardImage;