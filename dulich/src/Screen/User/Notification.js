import React, { useState, useEffect } from 'react';
import {
    SafeAreaView, View, FlatList, StyleSheet,
    RefreshControl, Text, StatusBar, Pressable,ActivityIndicator
} from 'react-native';
import { Appbar } from 'react-native-paper';
import { getAllNotification } from '../../networking/notificationnetworking'

const Notification = ({ navigation }) => {
    const [listNotification, setListNotification] = useState([])
    const [isLoading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    useEffect(() => {
        getNotificationFromServer();
    },[])
    const getNotificationFromServer = () => {

        getAllNotification().then((response) => { setListNotification(response.data) })
            .catch((err) => { Alert.alert("Thông báo", "Hệ thống xảy ra lỗi, vui lòng thử lại sau") })
            .finally(() => { setLoading(false), setRefreshing(false); });

    }
    const onRefresh = () => { setRefreshing(true); getNotificationFromServer() }
    const renderItem = ({ item }) => (
        <Pressable onPress={()=>{navigation.push('DetailNotificationUser',{notification: item})}}>
            <View style={styles.notificationItem}>
            <Text style={styles.title}>
                {item.title}
            </Text>
            <View >
                {item.content.length < 100
                    ?
                    <Text style={styles.textContent}>
                        {item.content}
                    </Text>
                    :
                    <Text style={styles.textContent}>
                        {item.content.slice(0, 100)}...
                            <Text style={styles.bonus}>Xem thêm</Text>
                    </Text>
                }
            </View>
            <Text style={{ fontStyle: 'italic', color: 'grey', textAlign: 'right' }}>
                Ngày gửi: {item.time.replace(/T/, ' ').replace(/\..+/, '') }
            </Text>
        </View>
        </Pressable>
        
    );

    return (
        <SafeAreaView style={styles.container}>
            <Appbar.Header statusBarHeight={20}>
                <Appbar.BackAction onPress={() => navigation.pop()} />
                <Appbar.Content title="Thông báo" />
            </Appbar.Header>
            <View>
                {isLoading ? <ActivityIndicator size="large" color='blue' /> :
                    <FlatList
                        data={listNotification}
                        ListFooterComponent={<View style={{ paddingBottom: 400 }} />}
                        keyExtractor={item => item.notificationID.toString()}

                        renderItem={renderItem}
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
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    notificationItem: {
        width: '100%',
        backgroundColor: "#e8ffee",
        borderRadius: 15,
        padding: 10,
        marginTop: 10,
        marginHorizontal: 5
    },
    textContent: {
        fontSize: 17
    },
    bonus:{
        color: 'blue'
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default Notification;