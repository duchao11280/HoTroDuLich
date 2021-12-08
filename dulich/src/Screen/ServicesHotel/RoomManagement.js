import React, { Component, useEffect, useState } from 'react';
import {
    View, Text, Image, Pressable, RefreshControl, Alert,
    ActivityIndicator, StyleSheet, FlatList, SafeAreaView, TouchableHighlight
} from 'react-native';
import RoomItem from '../../Component/HotelService/RoomItem'
import { Appbar } from 'react-native-paper';
import { SearchBar } from "react-native-elements";
// import { getAllPlaces, deletePlace, addPlaceInfo } from '../../../networking/adminnetworking'



const PlaceManagement = ({ navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const [listRoom, setListRoom] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    const [refreshing, setRefreshing] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {


    }, []);
    const getPlaceFromServer = () => {
        getAllPlaces().then((listRoom) => { setListRoom(listRoom) })
            .catch((err) => { console.log("Kết nối thất bại") })
            .finally(() => { setLoading(false), setRefreshing(false); });
    }
    // khi kéo từ trên xuống refresh lại dữ liệu
    const onRefresh = () => { setRefreshing(true); getPlaceFromServer() }
    const handleSearch = (text) => {
        setSearchfield(text);

    };
    const goToDetail = (place) => {
        navigation.push('PlaceDetail', { place: place });
    }
    // Lọc place theo search 
    const filteredPlaces = listRoom == undefined ? [] : listRoom.filter(place => {
        var searchName = place.placeName.toLowerCase().includes(searchfield.toLowerCase());
        var searchCity = place.city.toLowerCase().includes(searchfield.toLowerCase());
        var search = searchName || searchCity;
        return search;
    })
    const RightActions = ({ item }) => {
        return (
            <Pressable onPress={() => Alert.alert(
                'Cảnh Báo',
                'Bạn có chắc muốn XÓA địa điểm này?',
                [
                    {
                        text: 'Đồng ý', onPress: () => {
                            deletePlace(item.placeID)
                                .then((res) => {
                                    onRefresh();
                                    Alert.alert(
                                        "Thông báo",
                                        res.message,
                                        [{
                                            text: 'Ok',
                                            onPress: () => { }
                                        }])
                                })
                                .catch(() => {
                                    Alert.alert(
                                        "Thông Báo",
                                        "Vô hiệu hóa thất bại",
                                        [{
                                            text: 'Ok',
                                            onPress: () => { }
                                        }]
                                    )
                                })
                        }
                    },
                    {
                        text: 'Hủy bỏ', onPress: () => { }
                    }
                ]
            )}>
                <View
                    style={{
                        flex: 1, backgroundColor: 'red', justifyContent: 'center',
                        marginTop: 10,
                        borderRadius: 15,
                    }}>
                    <Text
                        style={{
                            color: 'white',
                            paddingHorizontal: 10,

                            fontWeight: '600',
                        }}>
                        Vô hiệu hóa
                    </Text>
                </View>
            </Pressable>
        )
    }
    const cancelModal = () => {
        setModalVisible(false);
    }
    const addPlace = (placeName, description, tips, city) => {
        setLoading(true)
        var params = {
            placeName: placeName,
            description: description,
            tips: tips,
            city: city
        }

        addPlaceInfo(params)
            .then((response) => { Alert.alert("Thông báo", response.message, [{ text: "Ok", onPress: () => { } }]); onRefresh() })
            .catch(error => { Alert.alert("Thông báo", "Thêm thất bại", [{ text: "Ok", onPress: () => { } }]) })
            .finally(() => { setLoading(false); cancelModal() })
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View >
                <Appbar.Header statusBarHeight={20}>
                    <Appbar.BackAction onPress={() => { navigation.pop() }} />
                    <Appbar.Content title="Quản lý địa điểm" />
                </Appbar.Header>
                <SearchBar
                    placeholder="Type Here..."
                    lightTheme
                    round // bo góc
                    onChangeText={handleSearch}
                    value={searchfield}
                />
                <Pressable style={{ alignSelf: 'flex-end' }}
                    onPress={() => { setModalVisible(true) }}
                >
                    <Text style={styles.button}>Thêm mới</Text>
                </Pressable>

                <View>
                    {isLoading ? <ActivityIndicator size="large" color='blue' /> :
                        <FlatList
                            data={filteredPlaces}
                            ListFooterComponent={<View style={{ paddingBottom: 400 }} />}
                            keyExtractor={item => item.placeID.toString()}

                            renderItem={({ item, index }) => {
                                return (
                                    <View
                                        onPress={() => { goToDetail(item) }}
                                    >

                                        <RoomItem item={item} index={index}>

                                        </RoomItem>

                                    </View>

                                );
                            }}
                            refreshControl={
                                <RefreshControl
                                    refreshing={refreshing}
                                    onRefresh={() => onRefresh()}
                                />
                            }
                        >
                        </FlatList>}
                </View>
                <ModalAddPlace
                    modalVisible={modalVisible}
                    cancelModal={cancelModal}
                    addPlace={addPlace}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'green',
        color: 'white',
        borderRadius: 15,
        marginRight: 10,
        paddingHorizontal: 20,
        paddingVertical: 5,
        width: 'auto',
        fontSize: 18,
    },
})

export default PlaceManagement;