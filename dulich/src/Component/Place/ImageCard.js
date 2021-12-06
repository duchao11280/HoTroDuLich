import React, { Component } from 'react';
import { View, Text, Image, Pressable, StyleSheet, Alert } from 'react-native';


const ImageCard = (props) => {
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
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#e8ffee",
        borderRadius: 15,
        marginTop: 10,
        marginBottom: 20,
        marginRight: 15,
        elevation: 10,
    },
    image: {
        padding: 10,
        marginHorizontal: 5,
    },
})
export default ImageCard;