import React, { Component, useEffect, useState } from 'react';
import {
    View, Text, Pressable, StyleSheet, FlatList, RefreshControl,
    ActivityIndicator, SafeAreaView, ScrollView, Modal, TextInput, Alert
} from 'react-native';
import { Appbar } from 'react-native-paper';
import { SearchBar } from "react-native-elements";
import {
    getAllPlaces
} from '../networking/placeNetworking'
import PlaceInfoItem from '../Component/Place/PlaceInfoItem'
const PlacesInfo = ({navigation}) => {
    const [isLoading, setLoading] = useState(true);
    const [listPlaces, setListPlaces] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    const [refreshing, setRefreshing] = useState(false);
    useEffect(() => {
        getPlaceFromServer();

    }, []);

    const getPlaceFromServer = () => {
        getAllPlaces().then((listPlaces) => { setListPlaces(listPlaces); })
            .catch((err) => { Alert.alert("Thông báo","Kết nối thất bại") })
            .finally(() => { setLoading(false), setRefreshing(false); });
    }
    const onRefresh = () => { setRefreshing(true); getPlaceFromServer() }
    const handleSearch = (text) => {
        setSearchfield(text);

    };
    const filteredPlaces = listPlaces == undefined ? [] : listPlaces.filter(place => {
        var searchName = place.placeName.toLowerCase().includes(searchfield.toLowerCase());
        var searchCity = place.city.toLowerCase().includes(searchfield.toLowerCase());
        var search = searchName || searchCity;
        return search;
    })
    const gotoDetail =(place) =>{
        navigation.push('PlaceInfoDetail', {place: place})
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Appbar.Header statusBarHeight={20}>
                <Appbar.BackAction onPress={() => { }} />
                <Appbar.Content title="Thông tin du lịch" />
            </Appbar.Header>
            <SearchBar
                placeholder="Type Here..."
                lightTheme
                round // bo góc
            onChangeText={handleSearch}
            value={searchfield}
            />
            <View>
                {isLoading ? <ActivityIndicator size="large" color='blue' /> :
                    <FlatList
                        data={filteredPlaces}
                        ListFooterComponent={<View style={{ paddingBottom: 400 }} />}
                        keyExtractor={item => item.placeID.toString()}

                        renderItem={({ item, index }) => {
                            return (
                                <Pressable
                                    onPress={() => { gotoDetail(item)}}
                                >
                                    <PlaceInfoItem item={item} index={index}>

                                    </PlaceInfoItem>
                                </Pressable>
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

        </SafeAreaView>
    )
}
export default PlacesInfo;