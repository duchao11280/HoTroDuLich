import React, { Component, useEffect, useState } from 'react';
import {
    View, Text, Pressable, StyleSheet, FlatList, RefreshControl,
    ActivityIndicator, SafeAreaView, ScrollView, Modal, TextInput, Alert
} from 'react-native';
import { Appbar } from 'react-native-paper';
import ImageCard from '../../Component/Place/ImageCard'
import CommentItem from '../../Component/Place/CommentItem'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAllCommentByPlaceID, deleteCommentByUser, addComment } from '../../networking/commentnetworking'

const PlaceInfoDetail = ({ navigation, route }) => {
    const [place, setPlace] = useState(route.params.place)
    const [isLoading, setLoading] = useState(true);
    const [listComment, setListComment] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [content, setContent] = useState('');
    let userID;
    useEffect(() => {
        getCommentFromServer();
    }, [])

    const getUserID = async () => {
        try {
            const id = await AsyncStorage.getItem('userID')
            userID = parseInt(id);
        } catch (error) {
            Alert.alert("Thông báo", "Hệ thống xảy ra lỗi, vui lòng thử lại sau")
        }
    }
    const getCommentFromServer = () => {
        getAllCommentByPlaceID(place.placeID).then((response) => { setListComment(response.data); })
            .catch((err) => { Alert.alert("Thông báo", "Kết nối thất bại") })
            .finally(() => { setLoading(false), setRefreshing(false); });
    }
    const deleteComment = (id) => {
        getUserID()
            .then(()=>deleteCommentByUser(id,userID)
                .then((response) => {
                    if(response !== undefined)
                        Alert.alert("Thông báo", response.message)

                    onRefresh();
                })
                .catch(() => {
                    Alert.alert("Thông báo", "Hệ thống xảy ra lỗi, vui lòng thử lại sau")
                })
            )
            .catch(() => { Alert.alert("Thông báo", "Hệ thống xảy ra lỗi, vui lòng thử lại sau") });
    }
    const onSendComment = () => {
        if (content.trim().length == 0) {
            Alert.alert("Thông báo", "Vui lòng nhập nội dung")
            return;
        } else {
            getUserID()
                .then(() => addComment(userID, content, place.placeID).then((response) => {

                    onRefresh();
                    setContent('');
                }).catch((error) => {
                    Alert.alert("Thông báo", "Xảy ra lỗi, vui lòng thử lại sau");
                })
                )
                .catch(() => { Alert.alert("Thông báo", "Hệ thống xảy ra lỗi, vui lòng thử lại sau") });
        }
    }

    const onRefresh = () => { setRefreshing(true); getCommentFromServer() }
    const getHeader = () => (
        <View>
            <Text style={styles.title}>Tên địa điểm:</Text>
            <Text style={styles.content}>{place.placeName}</Text>
            <Text style={styles.title}>Tỉnh thành:</Text>
            <Text style={styles.content}>{place.city}</Text>
            <Text style={styles.title}>Tips:</Text>
            <Text style={styles.content}>{place.tips}</Text>
            <Text style={styles.title}>Mô tả:</Text>
            <Text style={styles.content}>{place.description}</Text>
            <FlatList
                data={place.images}
                horizontal
                keyExtractor={item => item.id.toString()}

                renderItem={({ item, index }) => {
                    return (
                        <Pressable
                            onPress={() => { }}
                        >
                            <ImageCard item={item} index={index}>
                            </ImageCard>
                        </Pressable>

                    );
                }}
            >
            </FlatList>
            <Text style={{ fontWeight: 'bold', margin: 15 }}>Bình luận: </Text>
        </View>
    )


    return (
        <SafeAreaView>
            <Appbar.Header statusBarHeight={20}>
                <Appbar.BackAction onPress={() => { navigation.pop() }} />
                <Appbar.Content title="Thông tin du lịch" />
            </Appbar.Header>
            <View>
                {isLoading ? <ActivityIndicator size="large" color='blue' /> :
                    <FlatList
                        data={listComment}
                        keyExtractor={item => item.id.toString()}

                        ListHeaderComponent={getHeader}
                        ListFooterComponent={
                            <View style={{ backgroundColor: 'white', flexDirection: 'row' }}>
                                <TextInput
                                    style={styles.inputText}
                                    multiline
                                    onChangeText={(value) => { setContent(value) }}
                                    placeholder="Để lại bình luận..."
                                    value={content}
                                />
                                <Pressable
                                    onPress={() => { onSendComment() }}
                                    style={styles.buttonSend}>
                                    <Text>Gửi</Text>
                                </Pressable>
                            </View>
                        }
                        contentContainerStyle={{ paddingBottom: 400 }}
                        renderItem={({ item, index }) => {
                            return (
                                <CommentItem
                                    item={item} index={index}
                                    handleDelete={deleteComment}
                                >

                                </CommentItem>

                            );
                        }}
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={() => onRefresh()}
                            />
                        }
                    >
                    </FlatList>
                }
            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
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
    inputText: {
        margin: 10,
        width: '80%',
        borderRadius: 20,
        borderColor: "black",
        padding: 15,
        borderWidth: 1,
    },
    buttonSend: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#6d84b6',
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 20,
        marginVertical: 10,
    },
})
export default PlaceInfoDetail;