import React, { Component, useEffect, useState } from 'react';
import {
    View, Text, Pressable, StyleSheet, FlatList, RefreshControl,
    ActivityIndicator, SafeAreaView, ScrollView, Modal, TextInput, Alert
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import {
    updateInfoPlace
} from '../../../networking/adminnetworking'


const ModalAddPlace = ({ modalVisible, cancelModal, addPlace }) => {


    let isValidate = false;
    const [infoEdit, setInfoEdit] = useState({
        placeID: "",
        placeName: "",
        description: "",
        tips: "",
        city: ""
    })
    const validate = () => {
        if (infoEdit.placeName.length == 0) {
            showAlert("Bạn chưa nhập tên địa điểm", false);
            isValidate = false
        }
        else if (infoEdit.description.length == 0) {
            showAlert("Bạn chưa nhập Mô tả", false);
            isValidate = false
        }
        else if (infoEdit.tips.length == 0) {
            showAlert("Bạn chưa nhập mẹo", false);
            isValidate = false
        }
        else if (infoEdit.city.length == 0) {
            showAlert("Bạn chưa nhập thành phố", false);
            isValidate = false
        }
        else isValidate = true
    }

    const showAlert = (mess, status) => {
        Alert.alert(
            "Thông báo",
            mess,
            [
                { text: "Ok", onPress: () => { if (status != false) { goBack() } } }
            ]
        );
    }
    return (
        <KeyboardAwareScrollView >
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}

            >
                <View style={styles.centeredView}>
                    <ScrollView style={styles.modalBody}>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Thêm thông tin địa điểm</Text>
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
                                    validate()
                                    if (isValidate) {
                                        addPlace(infoEdit.placeName, infoEdit.description, infoEdit.tips, infoEdit.city);
                                        setInfoEdit({
                                            placeID: "",
                                            placeName: "",
                                            description: "",
                                            tips: "",
                                            city: ""
                                        })
                                        isValidate = false;
                                    }

                                }}
                            >
                                <Text >Thêm mới</Text>
                            </Pressable>
                            <Pressable
                                style={styles.buttonUpdate}
                                onPress={() => cancelModal()}
                            >
                                <Text >Cancel</Text>
                            </Pressable>
                        </View>

                    </ScrollView>
                </View>
            </Modal>
        </KeyboardAwareScrollView>
    );
}
const styles = StyleSheet.create({

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

})
export default ModalAddPlace;