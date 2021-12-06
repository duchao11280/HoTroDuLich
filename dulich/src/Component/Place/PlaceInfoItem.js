import React, { Component, useEffect, useState } from 'react';
import {
    View, Text, Image, Pressable, RefreshControl, Alert,
    ActivityIndicator, StyleSheet, FlatList, SafeAreaView, TouchableHighlight
} from 'react-native';
import ImageCard from './ImageCard';

const PlaceInfoItem = (props) => {
    return (
        <View style={styles.container} >
            <Text style={props.item.images.length?styles.text:styles.emptyImage}>{props.item.placeName}</Text>
            <FlatList
                data={props.item.images}
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
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#e8ffee',
        marginBottom:10,
    },
    text:{
        fontSize: 20,
        paddingLeft:15,
        fontWeight: 'bold',
    },
    emptyImage:{
        fontSize: 20,
        paddingLeft:15,
        fontWeight: 'bold',
        paddingVertical:30,
    }
})

export default PlaceInfoItem;