import React, { Component, useEffect, useState } from 'react';
import {
    View, Text, Image, Pressable, RefreshControl, Alert,
    ActivityIndicator, StyleSheet, FlatList, SafeAreaView, TouchableHighlight
} from 'react-native';
import NotificationItem from '../../../Component/Notification/NotificationItem'
import { Appbar } from 'react-native-paper';
import { getAllNotifications, deleteNotification } from '../../../networking/adminnetworking'
import { useIsFocused } from '@react-navigation/native';

const NotificationManagement = ({ navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const [listNotification, setListNotification] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const isFocused = useIsFocused();

    useEffect(() => {
        getNotificationFromServer()

    }, [isFocused]);
    const getNotificationFromServer = () => {

        getAllNotifications().then((listNotification) => { setListNotification(listNotification.data) })
            .catch((err) => { Alert.alert("Thông báo", "Hệ thống xảy ra lỗi, vui lòng thử lại sau") })
            .finally(() => { setLoading(false), setRefreshing(false); });

    }
    // khi kéo từ trên xuống refresh lại dữ liệu
    const onRefresh = () => { setRefreshing(true); getNotificationFromServer() }

    const goBack = () =>{ navigation.pop()}
    const gotoUpdate = (notification) => {
        navigation.push('UpdateNotification', { notification: notification})
    }

    const onDeleteNotification = (id) => {
        Alert.alert(
            //title
            'Cảnh báo',
            //body
            'Bạn có chắc muốn xóa thông báo này?',
            [
                {
                    text: 'Có', onPress: () => {
                        deleteNotification(id)
                            .then((res) => { Alert.alert("Thông báo", "Xóa thành công"); })
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
                    <Appbar.Content title="Quản lý thông báo" />
                </Appbar.Header>

                <Pressable style={{ alignSelf: 'flex-end' }}
                    onPress={() => {navigation.push("AddNotification") }}
                >
                    <Text style={styles.button}>Thêm mới</Text>
                </Pressable>

                <View>
                    {isLoading ? <ActivityIndicator size="large" color='blue' /> :
                        <FlatList
                            data={listNotification}
                            ListFooterComponent={<View style={{ paddingBottom: 400 }} />}
                            keyExtractor={item => item.notificationID.toString()}

                            renderItem={({ item, index }) => {
                                return (

                                    <NotificationItem item={item} index={index}
                                        handleUpdate = {gotoUpdate}
                                        handleDelete ={onDeleteNotification}
                                        navi = {navigation}
                                        
                                    >
                                    </NotificationItem>

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

export default NotificationManagement;