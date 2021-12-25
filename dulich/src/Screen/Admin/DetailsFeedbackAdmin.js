import React, { useState, useEffect } from 'react';
import {
    Text, View, StyleSheet, Button, Image, FlatList, Alert,
    ActivityIndicator, TextInput, TouchableOpacity
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Appbar } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAllFeedBack } from '../../networking/adminnetworking'

const DetailsFeedbackAdmin = ({ navigation, route }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#e6e6ff' }}>
            <Appbar.Header statusBarHeight={20}>
                <Appbar.BackAction onPress={() => navigation.pop()} />
                <Appbar.Content title="Chi Tiết Góp ý" />
            </Appbar.Header>
            <View style={styles.container}>
                <View style={styles.reading}>
                    <View>
                        <Text style={{ fontSize: 50, fontWeight: 'bold' }}>{route.params.title} </Text>
                    </View>

                    <Text style={{ fontSize: 20, fontWeight: '900' }}>Người gửi:  {route.params.userName} </Text>

                    <View style={styles.result}>
                        <Text style={{ fontSize: 18, fontWeight: '900' }}>{route.params.content} </Text>
                    </View>

                </View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e6e6ff'
    },
    reading: {
        padding: 10
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
        marginTop: 30
    },
})
export default DetailsFeedbackAdmin;