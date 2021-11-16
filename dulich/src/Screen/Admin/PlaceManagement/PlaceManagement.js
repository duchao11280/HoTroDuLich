import React, { Component, useEffect, useState } from 'react';
import { View, Text, Image, Pressable,
    ActivityIndicator,StyleSheet, FlatList, SafeAreaView } from 'react-native';
import dataPlace from '../../../dataPlace';
import PlaceItem from '../../../Component/Admin/PlaceManagement/PlaceItem'
import { Appbar } from 'react-native-paper';
import { SearchBar } from "react-native-elements";
import { getAllPlaces } from '../../../networking/adminnetworking'
const PlaceManagement = ({ navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const [listPlaces, setListPlaces] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    useEffect(() => {
        getAllPlaces().then((listPlaces)=>{setListPlaces(listPlaces)})
        .catch((err)=>{console.log("Kết nối thất bại")})
        .finally(()=> setLoading(false))
        
    },[]);
    const handleSearch = (text) => {
        setSearchfield(text);
        console.log(text)

    };
    const goToDetail = (place)=>{
        navigation.push('PlaceDetail', {place: place});
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View >
                <Appbar.Header statusBarHeight={20}>
                    <Appbar.BackAction onPress={() => { }} />
                    <Appbar.Content title="Quản lý địa điểm" />
                </Appbar.Header>
                <SearchBar
                    placeholder="Type Here..."
                    lightTheme
                    round // bo góc
                    onChangeText={handleSearch}
                    value={searchfield}
                />
                <View>
                {isLoading ? <ActivityIndicator size="large" color='blue'/> :
                <FlatList
                    data={listPlaces}
                    ListFooterComponent={<View style={{ height: 150 }} />}
                    keyExtractor={item => item.placeID.toString()}
                    
                    renderItem={({ item, index }) => {
                        return (
                            <Pressable
                                onPress={()=> {goToDetail(item)}}
                            >
                                <PlaceItem item={item} index={index}>

                                </PlaceItem>
                            </Pressable>

                        );
                    }}
                >
                </FlatList>}
                </View>
            </View>
        </SafeAreaView>
    )
}


export default PlaceManagement;