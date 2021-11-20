import React, { Component } from 'react';
import { View, Text, Image, Pressable, StyleSheet, Alert } from 'react-native';


const CardImage = (props) => {
    return (
        // truyền vào 1 cụm các props

        <View style={Styles.container}>
            <Image
                source={{
                    height:300,
                    width: 300,
                    uri: props.item.image,
                }}
            />
        </View>


    );
}

const Styles = StyleSheet.create({
    container: {

        backgroundColor: "#e8ffee",
        borderRadius: 15,
        padding: 10,
        marginTop: 10,
        marginHorizontal: 5,
    },


})
export default CardImage;