import React, { Component } from 'react';
import { View, Text, Image, Pressable, StyleSheet, Alert, SafeAreaView } from 'react-native';


const CommentItem = (props) => {
    return (
        <SafeAreaView style={Styles.container}>
            <View style={Styles.comment}>

                    <Text  style={{ fontSize:17,fontWeight:'600', fontStyle: 'italic'}}>
                        {props.item.fullName}:
                    </Text>
                    <Text style={{ margin:10, fontSize:16}}>
                        &nbsp;&nbsp;&nbsp;&nbsp;{props.item.content}
                    </Text>


                <Text style={{ textAlign:'right',justifyContent:'flex-end', color:'grey'}}>
                    {props.item.time.replace(/T/, ' ').replace(/\..+/, '')}
                </Text>
            </View>
            <Pressable
                style={Styles.delete}
                onPress={() => {
                    Alert.alert(
                        "Cảnh báo",
                        "Bạn có muốn bình luận này?",
                        [
                            { text: "Đồng ý", onPress: () => { props.handleDelete(props.item.id) }},
                            { text: "Hủy bỏ", onPress: () => { }}
                        ]
                    )
                }}
            >
                <Text style={Styles.textDelete}>X</Text>
            </Pressable>
        </SafeAreaView>
    );
}

const Styles = StyleSheet.create({
    container: {
        flex:1,

        backgroundColor: "#e8ffee",
        borderRadius: 15,
        marginTop: 10,
        marginBottom: 20,
        marginHorizontal: 15,
        elevation: 10,
    },
    comment: {
        padding: 10,
        
        marginHorizontal: 5,
    },
    delete: {
        width: 35,
        height: 35,
        borderRadius: 20,
        elevation: 15,
        position: "absolute",
        right: 5,
        top: 5,
        backgroundColor: 'white',

    },
    textDelete: {
        fontSize: 18,
        height: 35,
        textAlignVertical: 'center',
        textAlign: "center",
        color: 'red',

    }
})
export default CommentItem;