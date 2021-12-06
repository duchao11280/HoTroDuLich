import React, { useState } from 'react';
import {
  Text, View, StyleSheet, Button,
  ActivityIndicator, Alert, Image, TextInput, TouchableOpacity
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Entypo } from '@expo/vector-icons';
import { login } from '../networking/usernetworking'
import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN = "keytoken"
const Login = ({ navigation }) => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  // set jwt
  const onLogin = async () => {
    const response = await login(userName, password);
    if (response.status == true) {
      try {
        await AsyncStorage.setItem("userID", response.data.user.userID.toString());
        await AsyncStorage.setItem("role", response.data.user.role.toString());
        await AsyncStorage.setItem(TOKEN, response.data.accessToken);

        if (response.data.user.role == 0) {
          console.log("User zô")
          navigation.navigate("Home")
        }
        if (response.data.user.role == 1) {
          console.log("vo bang admin");
          navigation.navigate("Home")
        }
        if (response.data.user.role == 2) {
          console.log("vo bang nha hang");
          navigation.navigate("Home")
        }
        if (response.data.user.role == 3) {
          console.log("vo bang khach san");
          navigation.navigate("Home")
        }

      } catch (e) {
        console.log(e.message);
      }
    } else {
      Alert.alert("Thông báo", response.message), [{ text: "Ok", onPress: () => { } }];
    }
    setLoading(false);
  }


  //get jwt
  /*const GetRole = async () => {
    try {
      const Rolevalue = JSON.parse(await AsyncStorage.getItem('role'))
      console.log("CCCCCCCCC", Rolevalue);


    } catch (error) {
      // Error retrieving data
    }
  }*/
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView style={{
        flex: 1
      }}>
        <View style={styles.Logo}>
          <Image source={require('../../assets/Logo.png')} />
        </View>

        <View style={styles.TitleView}>
          <Text style={styles.Title}> Đăng nhập tài khoản </Text>
        </View>

        <View >
          <View>
            <Entypo name="user" size={24} color="black" style={styles.icon} />
            <TextInput style={styles.Input} placeholder="Tên đăng nhập"
              onChangeText={setUsername}
            />
          </View>



          <View>
            <Entypo name="lock" size={24} color="black" style={styles.icon} />
            <TextInput style={styles.Input} placeholder="Mật Khẩu"
              secureTextEntry={true}
              onChangeText={setPassword}
            />
          </View>

        </View>

        <View style={styles.LoginButtonView}>
          {isLoading ? <ActivityIndicator size="large" color='blue' /> :
            <TouchableOpacity style={styles.LoginButton}
              onPress={() => {
                setLoading(true),
                  onLogin()
              }}>
              <Text style={styles.LoginButtonText}
              > Đăng nhập</Text>
            </TouchableOpacity>
          }
        </View>

        <View >
          <TouchableOpacity style={styles.LoginButton}
            onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.SignUpText}> Đăng ký tài khoản </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99FFFF',

  },
  Logo: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 25

  },
  TitleView: {
    textAlign: 'center',
    marginBottom: 18
  },
  Title: {
    textAlign: 'center',
    fontSize: 20,
  },
  InputView: {
    backgroundColor: 'rgba(0,0,0,0)',
    position: 'absolute',
    top: 0,
    left: 5,
    right: 5
  },
  Input: {
    height: 60,
    padding: 10,
    paddingLeft: 60,
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#48BBEC',
    backgroundColor: 'white',
  },

  LoginButtonView: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 40,
    margin: 30
  },

  LoginButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },

  SignUpText: {
    fontSize: 15,
    color: "#444444",
    fontWeight: "normal",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  icon: {
    position: "absolute",
    top: 28,
    left: 40,
    zIndex: 10
  }
});

export default Login;