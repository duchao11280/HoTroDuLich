import React, { Component, useEffect, useState } from 'react';
import {
    View, Text, Pressable, StyleSheet, FlatList, RefreshControl,
    ActivityIndicator, SafeAreaView, ScrollView, Modal, TextInput, Alert
} from 'react-native';
import { Appbar } from 'react-native-paper';
import ImageCard from '../../Component/Place/ImageCard'

const PlaceInfoDetail = ({ navigation, route }) => {
    const [place, setPlace] = useState(route.params.place)
    return (
        <SafeAreaView>
            <Appbar.Header statusBarHeight={20}>
                <Appbar.BackAction onPress={() => { navigation.pop() }} />
                <Appbar.Content title="Thông tin du lịch" />
            </Appbar.Header>
            <ScrollView>
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
            </ScrollView>
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
    }
})
export default PlaceInfoDetail;