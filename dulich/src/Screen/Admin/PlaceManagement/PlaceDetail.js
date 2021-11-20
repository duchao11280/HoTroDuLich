import React, { Component, useEffect, useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet, FlatList,
    ActivityIndicator, SafeAreaView, ScrollView } from 'react-native';
import { Appbar } from 'react-native-paper';
import imageList from './dataImage';
import CardImage from '../../../Component/Admin/PlaceManagement/CardImage'
const PlaceDetail = ({ navigation, route }) => {
    const [placeInfo, setPlaceInfo] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [listImages, setListImages] = useState([])
    useEffect(() => {
        setPlaceInfo(route.params.place);
        
        setListImages(imageList)
        setLoading(false)
    })
    const goBack = () => {
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
                    <Text style={Styles.textInfo}>
                        {placeInfo.placeName}
                    </Text>
                </View>

                <View style={Styles.itemText}>
                    <Text style={Styles.textTitleInfo}>
                        Mô tả:
                    </Text>
                    <Text style={Styles.textInfo}>
                        {placeInfo.description}
                    </Text>
                </View>

                <View style={Styles.itemText}>
                    <Text style={Styles.textTitleInfo}>
                        Tips:
                    </Text>
                    <Text style={Styles.textInfo}>
                        {placeInfo.tips}
                    </Text>
                </View>

                <View style={Styles.itemText}>
                    <Text style={Styles.textTitleInfo}>
                        Nơi chốn:
                    </Text>
                    <Text style={Styles.textInfo}>
                        {placeInfo.city}
                    </Text>
                </View>
            </ScrollView>
            <View style={Styles.cardListImage}>
            {isLoading ? <ActivityIndicator size="large" color='blue'/> :
                <FlatList
                    data={listImages}
                    ListFooterComponent={<View style={{ height: 150 }} />}
                    keyExtractor={item => item.id.toString()}
                    horizontal
                    renderItem={({ item, index }) => {
                        return (
                            <Pressable
                                onPress={()=> {console.log(item.id)}}
                            >
                                <CardImage item={item} index={index}>

                                </CardImage>
                            </Pressable>

                        );
                    }}
                >
                </FlatList>}
            </View>
        </SafeAreaView>
    )
}
const Styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
    },
    info: {
        flex: 2,
        backgroundColor: "#e8ffee",
        borderRadius: 15,
        marginTop: 15,
        marginHorizontal: 15,
        // bóng cho ios
        shadowColor: 'blue',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.26,

        // đổ bóng cho android
        elevation: 15,
    },
    itemText: {
        flexDirection: 'row',
        flexWrap: "wrap",
    },
    textTitleInfo: {
        fontSize: 17,
        fontWeight: "bold",
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
        marginTop: 30,
    },
})
export default PlaceDetail;