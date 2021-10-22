import React, { Component } from 'react';
import {View,Text,Image, Pressable, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import dataUser from '../../dataUser';
import UserItem from '../../Component/UserItem'
import { Appbar } from 'react-native-paper';


class AccountManagement extends Component{
    render(){
        return(
            <SafeAreaView style={{flex: 1}}>
                <View >
                <Appbar.Header statusBarHeight ={20}>
                    <Appbar.BackAction onPress={() => {}} />
                    <Appbar.Content title="Quản lý người dùng"/>
                </Appbar.Header>
                <FlatList
                    data={dataUser}
                    ListFooterComponent={<View style={{height: 150}}/>}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item, index})=>{
                        return(
                            <UserItem item ={item} index={index}>
                                
                            </UserItem>
                        );
                    
                    }}
                >
                </FlatList>
                </View>
            </SafeAreaView>
        )
    }
};

export default AccountManagement;