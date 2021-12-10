import React, { Component, useEffect, useState } from 'react';
import {
    View, Text, Image, Pressable, RefreshControl, Alert,
    ActivityIndicator, StyleSheet, FlatList, SafeAreaView, TouchableHighlight
} from 'react-native';
import TableItem from '../../Component/RestaurantService/TableItem'
import { Appbar } from 'react-native-paper';
import { SearchBar } from "react-native-elements";
import { getAllTableByUserID, disableTable } from '../../networking/restaurantnetworking'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

const TableManagement = ({ navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const [listTable, setListTable] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    const [refreshing, setRefreshing] = useState(false);
    const isFocused = useIsFocused();
    let userID;
    const getUserID = async () => {
        try {
            const id = await AsyncStorage.getItem('userID')
            userID = parseInt(id);
        } catch (error) {
            Alert.alert("Thông báo", "Hệ thống xảy ra lỗi, vui lòng thử lại sau")
        }
    }
    useEffect(() => {
        getTableFromServer()

    }, [isFocused]);
    const getTableFromServer = () => {
        getUserID()
            .then(() => {
                getAllTableByUserID(userID).then((listTable) => { setListTable(listTable) })
                    .catch((err) => { Alert.alert("Thông báo", "Hệ thống xảy ra lỗi, vui lòng thử lại sau") })
                    .finally(() => { setLoading(false), setRefreshing(false); });
            })
            .catch(() => { Alert.alert("Thông báo", "Hệ thống xảy ra lỗi, vui lòng thử lại sau") })

    }
    // khi kéo từ trên xuống refresh lại dữ liệu
    const onRefresh = () => { setRefreshing(true); getTableFromServer() }
    const handleSearch = (text) => {
        setSearchfield(text);
    };
    // Lọc Table theo search 
    const filteredTable = listTable == undefined ? [] : listTable.filter(table => {
        var searchName = table.tableName.toLowerCase().includes(searchfield.toLowerCase());

        return searchName;
    })
    const gotoUpdate = (table) => {
        navigation.push('UpdateTable', { table: table })
    }
    const onDisableTable = (id) => {
        Alert.alert(
            //title
            'Cảnh báo',
            //body
            'Bạn có chắc muốn vô hiệu hóa phòng này?',
            [
                {
                    text: 'Có', onPress: () => {
                        disableTable(id)
                            .then((res) => { Alert.alert("Thông báo", res.message) })
                            .catch((err) => { Alert.alert("Thông báo", "Xảy ra lỗi, vui lòng thử lại sau"); })
                            .finally(() => { onRefresh() })
                    }
                },
                {
                    text: 'Không',
                    onPress: () => console.log(''),
                    style: 'cancel',
                },
            ],
            { cancelable: false }
            //clicking out side of alert will not cancel
        )

    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View >
                <Appbar.Header statusBarHeight={20}>
                    <Appbar.BackAction onPress={() => { navigation.pop() }} />
                    <Appbar.Content title="Quản lý Bàn" />
                </Appbar.Header>
                <SearchBar
                    placeholder="Type Here..."
                    lightTheme
                    round // bo góc
                    onChangeText={handleSearch}
                    value={searchfield}
                />
                <Pressable style={{ alignSelf: 'flex-end' }}
                    onPress={() => { navigation.push('AddTable') }}
                >
                    <Text style={styles.button}>Thêm mới</Text>
                </Pressable>

                <View>
                    {isLoading ? <ActivityIndicator size="large" color='blue' /> :
                        <FlatList
                            data={filteredTable}
                            ListFooterComponent={<View style={{ paddingBottom: 400 }} />}
                            keyExtractor={item => item.tableID.toString()}

                            renderItem={({ item, index }) => {
                                return (

                                    <TableItem item={item} index={index}
                                        handleUpdate={gotoUpdate} handleDisable={onDisableTable}>
                                    </TableItem>

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

export default TableManagement;