import React, { Component, useEffect, useState } from 'react';
import {
    View, Text, Image, Pressable, ActivityIndicator,
    StyleSheet, FlatList, SafeAreaView, RefreshControl
} from 'react-native';
import dataUser from '../../dataUser';
import UserItem from '../../Component/Admin/AccountManagement/UserItem'
import { Appbar } from 'react-native-paper';
import { SearchBar } from "react-native-elements";
import { getAllUsers } from '../../networking/adminnetworking'
const AccountManagement = ({ navigation }) => {
    const [isLoading, setLoading] = useState(true);

    const [users, setUsers] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    const [refreshing, setRefreshing] = useState(false);
    useEffect(() => {
        getDataFromServer()
    }, []);
    const handleSearch = (text) => {
        setSearchfield(text);
        console.log(text)

    };
    const getDataFromServer = () =>{
        setRefreshing(true);
        getAllUsers().then((listussers) => { setUsers(listussers); })
            .catch((err) => { console.log(err) })
            .finally(() => {setLoading(false); setRefreshing(false)})
    }
    const onRefresh = () =>{ getDataFromServer()}
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View >
                <Appbar.Header statusBarHeight={20}>
                    <Appbar.BackAction onPress={() => { }} />
                    <Appbar.Content title="Quản lý người dùng" />
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
                            data={users}
                            keyExtractor={item => item.userID.toString()}
                            initialNumToRender = {users.length}
                            renderItem={({ item, index }) => {
                                return (
                                    <UserItem item={item} index={index}>

                                    </UserItem>
                                );
                            }}
                            refreshControl={
                                <RefreshControl 
                                    refreshing={refreshing}
                                    onRefresh={()=>onRefresh()}
                                />
                            }
                        >
                        </FlatList>}
                </View>
            </View>
        </SafeAreaView>
    )
}


export default AccountManagement;