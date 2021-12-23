
import React, { useState, useEffect } from 'react';

import { View, Text, Image, Pressable, StyleSheet, Alert, Button, TouchableOpacity } from 'react-native';



const NotificationItem = (props) => {
    var navigation = props.navi;
    let date = new Date(props.item.time);
    date = date.toLocaleDateString("en-US")
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    useEffect(() => {
        setTitle(props.item.title);
        setContent(props.item.content);
    })
    return (
        // truyền vào 1 cụm các props
        <View style={Styles.NotificationItem}>
            <View style={Styles.limmitRow}>
                <View >
                    <Text style={Styles.title}>
                        {title}
                    </Text>
                </View>

                <View >
                    {content.length < 100
                        ?
                        <Text style={Styles.textContent}>
                            {content}
                        </Text>
                        :
                        <Text style={Styles.textContent}>
                            {content.slice(0,100)}...
                            <Pressable onPress={() =>{navigation.push("DetailNotification",{title: title, content: content})}}>
                                <Text style={Styles.bonus}>Xem thêm</Text>
                            </Pressable>
                        </Text>
                    }

                </View>

                <View >
                    <Text style={{ fontStyle: 'italic', color: 'grey', textAlign: 'right' }}>
                        Ngày gửi: {date}
                    </Text>
                </View>
            </View>

            <View style={Styles.containerButton}>
                <View style={Styles.Updatebutton}>
                    <Pressable onPress={() => { props.handleUpdate(props.item) }}>
                        <Text style={{ textAlign: 'center' }}>Cập nhật</Text>
                    </Pressable>
                </View>

                <View style={Styles.Deletebutton} >
                    <Pressable onPress={() => { props.handleDelete(props.item.notificationID) }}>
                        <Text style={{ textAlign: 'center', color: 'white' }}>Xóa</Text>
                    </Pressable>
                </View>
            </View>

        </View>

    );
}

const Styles = StyleSheet.create({
    NotificationItem: {
        flexDirection: 'row',
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
    limmitRow: {
        width: '70%'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    containerButton: {
        marginLeft: 10
    },
    Updatebutton: {
        backgroundColor: 'yellow',
        marginTop: 10,

        width: 80,
        height: 60,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center'
    },
    Deletebutton: {
        backgroundColor: 'red',
        marginTop: 10,

        width: 80,
        height: 60,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center'
    },


})


export default NotificationItem;