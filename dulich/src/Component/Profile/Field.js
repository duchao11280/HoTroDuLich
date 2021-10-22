import React from 'react';

import {View,Text,Image, Pressable, StyleSheet} from 'react-native';

const Field = (props)=>{
    return(
        <View style={Styles.container}>
            <Text style={Styles.title}>
                {props.title} 
            </Text>
            <Text style={Styles.content}>
                {props.content}
            </Text>
        </View>
    )
}
const Styles = StyleSheet.create({
    container:{
        marginTop:20,
        marginBottom:10,
    },
    title:{
        fontWeight: "bold",
        fontSize: 25,
    },
    content:{
        fontSize:20,
        paddingLeft:15,
    },
});

export default Field;