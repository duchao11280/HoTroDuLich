import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AntDesign } from '@expo/vector-icons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';


const DATA = [
  {
    roomID: '01',
    roomName: 'Name',
    description: " mot khach san chat luong",
    slot: "mot",
    price: "2",
    placeID: "01"
  }
];

const Location = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>


      <View style={styles.Backbutton}>
        <TouchableOpacity onPress={() => null}>
          <AntDesignIcon name="arrowleft" style={styles.Arrowback} />
        </TouchableOpacity>
      </View>
      <View style={styles.Search} >
        <AntDesign name="search1" size={30} color="black" style={styles.icon} />
        <TextInput placeholder="Bạn muốn đi đâu?" style={styles.TextSearch}></TextInput>
      </View>


      <View>

      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f2ff',
  },
  Search: {
    height: 60,
    padding: 10,
    marginTop: 4,
    marginLeft: 30,
    marginRight: 30,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#48BBEC',
    backgroundColor: 'white',
    paddingLeft: 50
  },
  icon: {
    position: "absolute",
    top: 12,
    left: 10,
    zIndex: 20
  },
  TextSearch: {
    fontSize: 23,
  },
  Backbutton: {
    paddingTop: 23
  },
  Arrowback: {
    fontSize: 30,
    marginLeft: 20
  },
})
export default Location;