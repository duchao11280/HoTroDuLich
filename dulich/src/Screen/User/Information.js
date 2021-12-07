import * as React from 'react';
import { Text, View, StyleSheet, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { FontAwesome5 } from 'react-native-vector-icons';
import Line from '../../Component/Line'
import { Appbar } from 'react-native-paper';



const Information = ({ navigation }) => {
  return (
    <View style={[styles.container]}>
      <Appbar.Header statusBarHeight={20}>
        <Appbar.BackAction onPress={() => navigation.pop()} />
        <Appbar.Content title="Thông tin tài khoản" />
      </Appbar.Header>

      <View style={styles.HeadContainer}>
        <View style={styles.WelcomeView}>
          <Text style={styles.TextWelcome} > Xin Chào! {"\n "}
            Hảo</Text>
        </View>

        <TouchableOpacity style={styles.LogoutButton} onPress={() => navigation.navigate("Login")} >
          <Text style={styles.LogOutText} > Thoát</Text>
        </TouchableOpacity>
      </View>



      <View style={styles.BodyContainer}>
        <Text style={styles.headTitle} > Tài khoản của tôi</Text>
        <Line />

        <View style={styles.TitleView}>
          <TouchableOpacity style={[{ flex: 0.5, flexDirection: 'row' }]} onPress={() => navigation.push('Profile')}>
            <FontAwesome5 name={'user'} size={20} />
            <Text style={styles.Title}>Thông tin của bạn</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.TitleView}>
          <TouchableOpacity style={[{ flex: 0.5, flexDirection: 'row' }]}>
            <FontAwesome5 name={'envelope'} size={20} />
            <Text style={styles.Title}>Tin nhắn</Text>
          </TouchableOpacity>
        </View>




        <Text style={styles.headTitle}> Thông tin</Text>
        <Line />
        <View style={styles.TitleView}>
          <TouchableOpacity style={[{ flex: 0.5, flexDirection: 'row' }]}>
            <FontAwesome5 name={'info'} size={30} />
            <Text style={styles.Title}>  Về ứng dụng</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.TitleView}>
          <TouchableOpacity style={[{ flex: 0.5, flexDirection: 'row' }]}>
            <FontAwesome5 name={'users'} size={20} />
            <Text style={styles.Title}>Về chúng tôi</Text>
          </TouchableOpacity>
        </View>





      </View>
    </View>
  );

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  HeadContainer: {
    flexDirection: 'row',
    flex: 0.4,
    backgroundColor: '#ccccff'
  },
  BodyContainer: {
    flex: 3,
    backgroundColor: '#e6f2ff'

  },
  WelcomeView: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 10
  },
  TextWelcome: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1
  },
  LogoutButton: {
    flex: 1,
    alignItems: 'flex-end',
    paddingTop: 30,
    paddingRight: 10

  },
  LogOutText: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  TitleView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    textAlign: 'center',
    marginBottom: 5
  },
  Title: {
    fontSize: 20,
    paddingLeft: 10
  },
  headTitle: {
    fontSize: 15,
    paddingBottom: 5,
    paddingTop: 15,

  }

})

export default Information;