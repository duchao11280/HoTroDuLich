import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';
import { getAllFeedback } from '../../networking/adminnetworking'



const DATA = [
    {
        notificationID: '01',
        userID: '01',
        title: 'First Item',
        content: 'mot',
        time: "00:00"
    },
    {
        notificationID: '02',
        userID: '01',
        title: 'First Item',
        content: 'hai',
        time: "00:00"
    },
    {
        notificationID: '03',
        userID: '01',
        title: 'First Item',
        content: 'ba',
        time: "00:00"
    },
];


const NotificationAdmin = ({ navigation }) => {
    const [refreshing, setRefreshing] = useState(false);
    const [feedback, setFeedback] = useState([]);


    useEffect(() => {
        //Lấy dữ liệu từ server để hiển thị 
        getDataFromServer()
    }, []);

    // khi kéo từ trên xuống refresh lại dữ liệu
    const onRefresh = () => { getDataFromServer() }

    // Hàm gọi dữ liệu 
    const getDataFromServer = () => {
        setRefreshing(true);
        getAllFeedback().then((listfeedback) => {
            console.log(listfeedback);
            setFeedback(listfeedback);
        })
            .catch((err) => { Alert.alert("Thông báo", "Xảy ra lỗi, vui lòng thử lại sau"); })
            .finally(() => { setLoading(false); setRefreshing(false) })
    }


    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("DetailNotificationAdmin")}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.title}>{item.userID}</Text>
        </TouchableOpacity>

    );

    return (
        <SafeAreaView style={styles.container}>
            <Appbar.Header statusBarHeight={15}>
                <Appbar.BackAction onPress={() => navigation.navigate("HomeAdmin")} />
                <Appbar.Content title="Thông báo" />
            </Appbar.Header>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.notificationID}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 10,
        padding: 8,
        marginVertical: 1,
        marginHorizontal: 10,
    },
    title: {
        fontSize: 20,
    },
});

export default NotificationAdmin;