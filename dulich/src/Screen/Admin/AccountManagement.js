import React, { Component, useEffect, useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import dataUser from '../../dataUser';
import UserItem from '../../Component/UserItem'
import { Appbar } from 'react-native-paper';
import { SearchBar } from "react-native-elements";

const AccountManagement = ()=> {
    const [users, setUsers] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    useEffect(()=>{
        setUsers(dataUser);
    });
    const handleSearch = (text) => {
        setSearchfield(text);
        console.log(text)

    };
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
                <FlatList
                    data={users}
                    ListFooterComponent={<View style={{ height: 150 }} />}
                    keyExtractor={item => item.userID.toString()}
                    renderItem={({ item, index }) => {
                        return (
                            <UserItem item={item} index={index}>

                            </UserItem>
                        );
                    }}
                >
                </FlatList>
            </View>
        </SafeAreaView>
    )
}


export default AccountManagement;