import React, { useState, useEffect } from 'react';
import {
    Text, View, StyleSheet, Button, Image, FlatList, Alert,
    ActivityIndicator, TextInput, TouchableOpacity
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Appbar } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAllFeedBack } from '../../networking/adminnetworking'

const AdminFeedBack = ({ navigation }) => {
    const [listFeedBack, setListFeedBack] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        getDataFromServer()
    }, [])


    // Hàm gọi dữ liệu 
    const getDataFromServer = () => {
        setRefreshing(true);
        getAllFeedBack().then((listfeedback) => { setListFeedBack(listfeedback); })
            .catch((err) => { Alert.alert("Thông báo", "Xảy ra lỗi, vui lòng thử lại sau"); })
            .finally(() => { setLoading(false); setRefreshing(false) })
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#e6e6ff' }}>
            <Appbar.Header statusBarHeight={20}>
                <Appbar.BackAction onPress={() => navigation.pop()} />
                <Appbar.Content title="Góp ý" />
            </Appbar.Header>
            <View style={styles.container}>
                <View>
                    {isLoading ? <ActivityIndicator size="large" color='blue' /> :
                        <FlatList
                            data={listFeedBack}
                            ListFooterComponent={<View style={{ paddingBottom: 400 }} />}
                            keyExtractor={item => item.feedbackID.toString()}

                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity style={styles.result}
                                        onPress={() => {
                                            navigation.navigate('DetailsFeedbackAdmin', {
                                                content: item.content,
                                                title: item.title,
                                                userName: item.userName
                                            });
                                        }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.title} </Text>
                                        <Text style={styles.textinfo}> ID Người gửi : {item.userName} </Text>
                                        {/* <Text style={styles.textinfo}>nội dung: {item.content} </Text> */}
                                    </TouchableOpacity>

                                );
                            }}

                        >
                        </FlatList>}
                </View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e6e6ff'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 15,
    },
    content: {
        fontSize: 18,
        marginLeft: 18,
    },
    result: {
        backgroundColor: '#ffe6ff',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginTop: 5
    },
    textinfo: {
        padding: 2
    }
})
export default AdminFeedBack;