import React from 'react';
import { View, Text, Image, Pressable, StyleSheet, Alert } from 'react-native';


const PlaceItem =(props) => {
    return (
        // truyền vào 1 cụm các props
        <View style={Styles.container}>
            <Text style={Styles.textInfo}>
                Id: {props.item.placeID}
            </Text>
            <Text style={Styles.textInfo}>
                Địa điểm: {props.item.placeName}
            </Text>
            <Text style={Styles.textInfo}>
                Thành phố: {props.item.city}
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
export default PlaceItem;