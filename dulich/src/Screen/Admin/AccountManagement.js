import React, { Component, useEffect, useState } from 'react';
import {
    View, Text, Image, Pressable, ActivityIndicator,
    StyleSheet, FlatList, SafeAreaView, RefreshControl, Alert
} from 'react-native';
import UserItem from '../../Component/Admin/AccountManagement/UserItem'
import { Appbar } from 'react-native-paper';
import { SearchBar } from "react-native-elements";
import { getAllUsers, disableUser } from '../../networking/adminnetworking'
import Swipeable from 'react-native-gesture-handler/Swipeable';
const AccountManagement = ({ navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    const [refreshing, setRefreshing] = useState(false);
 
    useEffect(() => {
        //Lấy dữ liệu từ server để hiển thị 
        getDataFromServer()
    }, []);
    // Khi người dùng nhập dữ liệu vào ô search
    const handleSearch = (text) => {
        setSearchfield(text);
    };
    // Hàm gọi dữ liệu 
    const getDataFromServer = () => {
        setRefreshing(true);
        getAllUsers().then((listussers) => { setUsers(listussers); })
            .catch((err) => { console.log(err) })
            .finally(() => { setLoading(false); setRefreshing(false) })
    }
    // khi kéo từ trên xuống refresh lại dữ liệu
    const onRefresh = () => { getDataFromServer() }
    // Lọc user theo search 
    const filteredUsers = users==undefined?[] :users.filter(user=>{
        var searchFullName = user.fullName.toLowerCase().includes(searchfield.toLowerCase());
        var searchEmail = user.email.toLowerCase().includes(searchfield.toLowerCase());
        var searchPhoneNumber = user.phonenumber.toLowerCase().includes(searchfield.toLowerCase());
        var search = searchFullName || searchEmail || searchPhoneNumber;
        return search;
    })
    // Khi vuốt qua bên phải xuất hiện 1 button để vô hiệu hóa.
    const RightActions = ({item}) => {
        return (
            <Pressable onPress={() => Alert.alert(
                'Cảnh Báo',
                'Bạn có chắc muốn vô hiệu hóa tài khoản?',
                [
                    {
                        text: 'Đồng ý', onPress: () => {
                            disableUser(item.userID)
                                .then((res) => {
                                    onRefresh();
                                    Alert.alert(
                                        "Thông báo",
                                        res.message,
                                        [{
                                            text: 'Ok',
                                            onPress: () => {  }
                                        }])
                                })
                                .catch(() => {
                                    Alert.alert(
                                        "Thông Báo",
                                        "Vô hiệu hóa thất bại",
                                        [{
                                            text: 'Ok',
                                            onPress: () => {}
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
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View >
                <Appbar.Header statusBarHeight={20}>
                    <Appbar.BackAction onPress={() => { navigation.pop() }} />
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
                            data={filteredUsers}
                            keyExtractor={item => item.userID.toString()}
                            ListFooterComponent={<View style={{ paddingBottom: 400 }}></View>}
                            renderItem={({ item, index }) => {
                                return (
                                    <Swipeable renderRightActions={()=><RightActions item={item}></RightActions>}>
                                        <UserItem item={item} index={index}>

                                        </UserItem>
                                    </Swipeable>
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
            </View>
        </SafeAreaView>
    )
}


export default AccountManagement;