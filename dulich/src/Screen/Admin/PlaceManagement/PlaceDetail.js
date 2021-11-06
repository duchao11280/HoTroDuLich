import React, { Component, useEffect, useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet, FlatList, SafeAreaView, ScrollView } from 'react-native';
import { Appbar } from 'react-native-paper';

const PlaceDetail = ({navigation, route}) => {
    const [placeInfo, setPlaceInfo] = useState({});
    useEffect(()=>{
        setPlaceInfo(route.params.place);
    }) 
    const goBack = ()=> {
        navigation.pop();
    }
    return (
        <SafeAreaView style={Styles.container}>
            <Appbar.Header statusBarHeight={20}>
                <Appbar.BackAction onPress={() => { goBack() }} />
                <Appbar.Content title="Quản lý địa điểm" />
            </Appbar.Header>
            <ScrollView style={Styles.info} >
                <View style={Styles.itemText}>
                    <Text style={Styles.textTitleInfo}>
                        Tên địa điểm:
                    </Text>
                    <Text style={ Styles.textInfo}>
                        {placeInfo.placeName}
                    </Text>
                </View>

                <View style={Styles.itemText}>
                    <Text style={Styles.textTitleInfo}>
                        Mô tả:
                    </Text>
                    <Text style={ Styles.textInfo}>
                        {placeInfo.description}                    
                    </Text>
                </View>

                <View style={Styles.itemText}>
                    <Text style={Styles.textTitleInfo}>
                        Tips:
                    </Text>
                    <Text style={ Styles.textInfo}>
                        {placeInfo.tips}
                    </Text>
                </View>

                <View style={Styles.itemText}>
                    <Text style={Styles.textTitleInfo}>
                        Nơi chốn:
                    </Text>
                    <Text style={ Styles.textInfo}>
                        {placeInfo.city}
                    </Text>
                </View>
            </ScrollView>
            <View></View>
            <View style={Styles.cardListImage}>
                <Text>
                    List Image
                </Text>
            </View>
        </SafeAreaView>
    )
}
const Styles = StyleSheet.create({
    container: {
        backgroundColor: "grey",
        flex: 1,
    },
    info: {
        flex: 2,
        backgroundColor: "#e8ffee",
        borderRadius: 15,
        marginTop: 10,
        marginHorizontal: 5,
    },
    itemText:{
        flexDirection: 'row',
        flexWrap: "wrap",
    },
    textTitleInfo: {
        fontSize: 17,
        fontWeight : "bold",
        paddingLeft: 20,
        paddingTop: 10,
    },
    textInfo: {
        fontSize: 17,
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    cardListImage: {
        flex: 2,
        backgroundColor: "red",
        marginTop: 30,
    },

})
export default PlaceDetail;