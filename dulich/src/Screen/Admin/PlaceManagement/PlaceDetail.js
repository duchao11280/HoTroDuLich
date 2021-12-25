import React, { Component, useEffect, useState } from 'react';
import {
    View, Text, Pressable, StyleSheet, FlatList, RefreshControl,
    ActivityIndicator, SafeAreaView, ScrollView, Modal, TextInput, Alert
} from 'react-native';
import { Appbar } from 'react-native-paper';
import CardImage from '../../../Component/Admin/PlaceManagement/CardImage'
import {
    getImageByPlaceID, updateInfoPlace, uploadImagePlace, disableImage,
    getAllUserCommentByPlaceID, deleteCommentByAdmin
} from '../../../networking/adminnetworking';
import { BottomSheet, Icon } from 'react-native-elements';
import CommentItem from '../../../Component/Place/CommentItem'

import * as ImagePicker from 'expo-image-picker';

const PlaceDetail = ({ navigation, route }) => {
    const [placeInfo, setPlaceInfo] = useState({ placeID: '', placeName: '', description: '', tips: '', city: '' });
    const [listImages, setListImages] = useState([])
    const [listComment, setListComment] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [bottomSheetVisible, setBottomSheetVisible] = useState(false)

    useEffect( () => {
        let unmounted = false;
        if(!unmounted)
            setPlaceInfo(route.params.place);
        getImageFromServer();
        return () =>{
            unmounted = true;
        }
    }, [])

    const reqPermissionCamera = async () => {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestCameraPermissionsAsync();
            if (status !== 'granted') {
                alert('Xin lỗi, cần cung cấp quyền để có thể thực hiện!');
            }
        }
    }
    const reqPermissionLibrary = async () => {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Xin lỗi, cần cung cấp quyền để có thể thực hiện!');
            }
        }
    }
    const takePhotoFromCamera = async () => {
        reqPermissionCamera();
        const permission = await ImagePicker.getCameraPermissionsAsync();
        if (permission.status == "granted") {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                quality: 1,
            });
            if (!result.cancelled) {
                uploadImagePlace(placeInfo.placeID, result.uri).then((response) => { }).catch(err => { Alert.alert("Thông báo", "Xảy ra lỗi, vui lòng thử lại sau"); })
                setBottomSheetVisible(false)
                onRefresh();
            }
        }
    }
    const takePhotoFromLibrary = async () => {
        await reqPermissionLibrary();
        const permission = await ImagePicker.getMediaLibraryPermissionsAsync();
        if (permission.status == "granted") {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                quality: 1,
            });
            if (!result.cancelled) {
                uploadImagePlace(placeInfo.placeID, result.uri).then((response) => { }).catch(err => { Alert.alert("Thông báo", "Xảy ra lỗi, vui lòng thử lại sau"); })
                setBottomSheetVisible(false)
                onRefresh();
            }
        }
    }
    const getCommentFromServer = async () => {
        getAllUserCommentByPlaceID(route.params.place.placeID)
            .then((response) => { setListComment(response.data); })
            .catch((err) => {setListComment([]); Alert.alert("Thông báo", "Kết nối thất bại") })
            .finally(() => { setLoading(false), setRefreshing(false); });
    }
    const deleteComment = (id) => {
        deleteCommentByAdmin(id)
            .then((response) => {
                if (response !== undefined)
                    Alert.alert("Thông báo", response.message)

                onRefresh();
            })
            .catch(() => {
                Alert.alert("Thông báo", "Hệ thống xảy ra lỗi, vui lòng thử lại sau")
            })

    }
    const goBack = () => {
        navigation.pop();
    }
    const getImageFromServer = async () => {
        getImageByPlaceID(route.params.place.placeID)
            .then((response) => {  
                setListImages(response.data)
                getCommentFromServer();
            })
            .catch((err) => { Alert.alert("Thông báo", "Kết nối thất bại"); setListImages([]) })
            .finally(() => { setLoading(false), setRefreshing(false); });
    }

    const onRefresh = () => {
        setRefreshing(true)
        getImageFromServer();
        getCommentFromServer();
    }
    const disableOneImage = (id) => {
        setLoading(true)
        disableImage(id)
            .then((response) => {
                onRefresh();
                Alert.alert("Thông báo", response.message, [{ text: "Ok", onPress: () => { } }])

            })
            .catch((error) => {
                Alert.alert("Thông báo", "Thất bại trong việc xóa hình ảnh", [{ text: "Ok", onPress: () => { } }])
            })
            .finally(() => { setLoading(false); })
    }
    const ModalEdit = () => {
        const [infoEdit, setInfoEdit] = useState({
            placeID: placeInfo.placeID,
            placeName: placeInfo.placeName,
            description: placeInfo.description,
            tips: placeInfo.tips,
            city: placeInfo.city
        })
        return (
            <View >
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <ScrollView style={styles.modalBody}>
                            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Chỉnh sửa thông tin địa điểm</Text>
                            <Text style={{ fontSize: 18, marginTop: 10, fontStyle: 'italic' }}>Tên địa điểm:</Text>
                            <View style={styles.inputParent}>
                                <TextInput
                                    style={styles.inputText}
                                    multiline
                                    onChangeText={(value) => { setInfoEdit({ ...infoEdit, placeName: value }); }}
                                    placeholder="Nhập tên địa điểm..."
                                    value={infoEdit.placeName}
                                />
                                <Pressable style={{ justifyContent: "center", alignItems: "center", }} onPress={() => { setInfoEdit({ ...infoEdit, placeName: '' }); }}><Text>X</Text></Pressable>
                            </View>
                            <Text style={{ fontSize: 18, marginTop: 10, fontStyle: 'italic' }}>Mô tả:</Text>

                            <View style={styles.inputParent}>
                                <TextInput
                                    style={styles.inputText}
                                    multiline
                                    onChangeText={(value) => { setInfoEdit({ ...infoEdit, description: value }); }}
                                    placeholder="Nhập mô tả..."
                                    value={infoEdit.description}
                                />
                                <Pressable style={{ justifyContent: "center", alignItems: "center", }} onPress={() => { setInfoEdit({ ...infoEdit, description: '' }); }}><Text>X</Text></Pressable>
                            </View>
                            <Text style={{ fontSize: 18, marginTop: 10, fontStyle: 'italic' }}>Tips:</Text>

                            <View style={styles.inputParent}>
                                <TextInput
                                    style={styles.inputText}
                                    multiline
                                    onChangeText={(value) => { setInfoEdit({ ...infoEdit, tips: value }); }}
                                    placeholder="Nhập Tips..."
                                    value={infoEdit.tips}
                                />
                                <Pressable style={{ justifyContent: "center", alignItems: "center", }} onPress={() => { setInfoEdit({ ...infoEdit, tips: '' }); }}><Text>X</Text></Pressable>
                            </View>
                            <Text style={{ fontSize: 18, marginTop: 10, fontStyle: 'italic' }}>Tỉnh thành:</Text>

                            <View style={styles.inputParent}>
                                <TextInput
                                    style={styles.inputText}
                                    multiline
                                    onChangeText={(value) => { setInfoEdit({ ...infoEdit, city: value }); }}
                                    placeholder="Nhập Tỉnh thành..."
                                    value={infoEdit.city}
                                />
                                <Pressable style={{ justifyContent: "center", alignItems: "center", }} onPress={() => { setInfoEdit({ ...infoEdit, city: '' }); }}><Text>X</Text></Pressable>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10, marginBottom: 20, }}>
                                <Pressable
                                    style={styles.buttonUpdate}
                                    onPress={() => {
                                        updateInfoPlace(infoEdit)
                                            .then((response) => { setPlaceInfo(infoEdit); })
                                            .catch((error) => { })
                                            .finally(() => { setModalVisible(!modalVisible); })
                                    }}
                                >
                                    <Text >Chỉnh sửa</Text>
                                </Pressable>
                                <Pressable
                                    style={styles.buttonUpdate}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Text >Cancel</Text>
                                </Pressable>
                            </View>

                        </ScrollView>
                    </View>
                </Modal>
            </View>
        );
    }
    const getHeader = () =>(
        <View>
            <ScrollView style={styles.info} >
                <View style={styles.itemText}>
                    <Text style={styles.textTitleInfo}>
                        Tên địa điểm:
                    </Text>
                    <Text style={styles.textInfo}>
                        {placeInfo.placeName}
                    </Text>
                </View>

                <View style={styles.itemText}>
                    <Text style={styles.textTitleInfo}>
                        Mô tả:
                    </Text>
                    <Text style={styles.textInfo}>
                        {placeInfo.description}
                    </Text>
                </View>

                <View style={styles.itemText}>
                    <Text style={styles.textTitleInfo}>
                        Tips:
                    </Text>
                    <Text style={styles.textInfo}>
                        {placeInfo.tips}
                    </Text>
                </View>

                <View style={styles.itemText}>
                    <Text style={styles.textTitleInfo}>
                        Tỉnh Thành:
                    </Text>
                    <Text style={styles.textInfo}>
                        {placeInfo.city}
                    </Text>
                </View>
                <ModalEdit></ModalEdit>
            </ScrollView>
            <View style={styles.viewButton}>
                <Pressable onPress={() => { setModalVisible(true) }}><Text style={styles.button}>Cập nhật thông tin</Text></Pressable>
                <Pressable onPress={() => { setBottomSheetVisible(true) }}><Text style={styles.button}>Thêm hình ảnh</Text></Pressable>
            </View>
            <View style={styles.cardListImage}>
                {isLoading ? <ActivityIndicator size="large" color='blue' /> :
                    <FlatList
                        data={listImages}
                        ListFooterComponent={<View style={{ height: 150 }} />}
                        keyExtractor={item => item.id.toString()}
                        horizontal
                        renderItem={({ item, index }) => {
                            return (
                                <Pressable
                                >
                                    <CardImage item={item} index={index} disableImage={disableOneImage}>
                                    </CardImage>
                                </Pressable>

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
    )
    return (
        <SafeAreaView style={styles.container}>

            <Appbar.Header statusBarHeight={20}>
                <Appbar.BackAction onPress={() => { goBack() }} />
                <Appbar.Content title="Quản lý địa điểm" />
            </Appbar.Header>

            <View>
                {isLoading ? <ActivityIndicator size="large" color='blue' /> :
                    <FlatList
                        data={listComment}
                        keyExtractor={item => item.id.toString()}
                        ListHeaderComponent={getHeader}
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

            <BottomSheet
                isVisible={bottomSheetVisible}
            >

                <View style={{ backgroundColor: 'white', padding: 15 }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>Thêm hình ảnh</Text>
                    <Pressable
                        style={{ flexDirection: 'row', justifyContent: "center" }}
                        onPress={() => { takePhotoFromCamera() }}
                    >
                        <Icon raised name='camera' type='font-awesome' color='#f50' size={16} />
                        <Text style={styles.textBottomSheet}>
                            Máy ảnh
                        </Text>

                    </Pressable>
                    <Pressable
                        style={{ flexDirection: 'row', justifyContent: "center" }}
                        onPress={() => { takePhotoFromLibrary() }}
                    >
                        <Icon raised name='image' type='font-awesome' color='#f50' size={16} />
                        <Text style={styles.textBottomSheet}>
                            Bộ sưu tập
                        </Text>

                    </Pressable>
                    <Pressable onPress={() => { setBottomSheetVisible(false) }}><Text style={styles.textBottomSheet}>Quay lại</Text></Pressable>
                </View>

            </BottomSheet>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
    },
    info: {
        flex: 2,
        backgroundColor: "#e8ffee",
        borderRadius: 15,
        paddingBottom: 15,
        marginTop: 15,
        marginHorizontal: 15,
        // bóng cho ios
        shadowColor: 'blue',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.26,

        // đổ bóng cho android
        elevation: 15,
    },
    itemText: {
        flexDirection: 'row',
        flexWrap: "wrap",
    },
    textTitleInfo: {
        fontSize: 17,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingTop: 10,
    },
    textInfo: {
        fontSize: 17,
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    cardListImage: {
        flex: 2,
        marginTop: 10,
    },
    centeredView: {
        marginTop: 30,
        marginBottom: 30,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalBody: {
        margin: 15,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    inputText: {
        margin: 10,

        fontSize: 17,
    },
    buttonUpdate: {
        borderRadius: 20,
        padding: 18,
        backgroundColor: '#00ee50',
        width: '45%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputParent: {
        borderColor: "black",
        borderBottomWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    button: {
        backgroundColor: 'green',
        color: 'white',
        borderRadius: 15,
        padding: 10,
    },
    viewButton: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    textBottomSheet: {
        textAlign: 'center',
        fontSize: 17,
        marginTop: 15,
    }

})
export default PlaceDetail;