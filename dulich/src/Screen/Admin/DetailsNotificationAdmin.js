import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';





const DATA = [
    {
        notificationID: '01',
        userID: '01',
        title: 'First Item',
        content: 'mot',
        time: "00:00"
    },
];


const DetailNotificationAdmin = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item} >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.title}>{item.userID}</Text>
            <Text style={styles.title}>{item.content}</Text>
        </TouchableOpacity>

    );

    return (
        <SafeAreaView style={styles.container}>
            <Appbar.Header statusBarHeight={10}>
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

export default DetailNotificationAdmin;