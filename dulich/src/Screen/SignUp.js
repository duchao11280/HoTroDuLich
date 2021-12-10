import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { Picker } from '@react-native-picker/picker';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { signUp } from '../networking/usernetworking';


const SignUp = ({ navigation }) => {
  const [fullName, setfullName] = useState('');
  const [userName, setuserName] = useState('');
  const [password, setpassword] = useState('');
  const [confirmpassword, setconfirmpassword] = useState('');
  const [email, setemail] = useState('');
  const [phonenumber, setphonenumber] = useState('');
  const [role, setrole] = useState(0);
  const [isLoading, setLoading] = useState(false);
  let isValidate = false;





  //Signup
  const onSignup = () => {
    var params = {
      fullName: fullName,
      userName: userName,
      password: password.trim(),
      email: email,
      phonenumber: phonenumber,
      role: role
    };

    signUp(params).then((response) => {
      if (response === undefined) {

        Alert.alert("Thông báo", "Xảy ra lỗi, vui lòng thử lại sau");
        return
      }
      Alert.alert("Thông báo", response.message), [{ text: "Ok", onPress: () => { } }];
    }).catch((error) => {
      Alert.alert("Thông báo", "Xảy ra lỗi, vui lòng thử lại sau");
    }).finally(() => {
      setLoading(false);
    })
  }

  const validate = () => {
    const reg = new RegExp('^[0-9]+$');
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (fullName.length == 0) {
      showAlert("Tên không được để trống", false);
      isValidate = false
    }
    else if (userName.includes(" ")) {
      showAlert("Tên đăng nhập không được chứa khoảng trống", false);
      isValidate = false
    }
    else if (password.includes(" ")) {
      showAlert("mật khẩu không được chứa khoảng trống", false);
      isValidate = false
    }
    else if (!reg.test(phonenumber)) {
      showAlert("số điện thoại không hợp lệ", false);
      isValidate = false
    }
    else if (reg.test(fullName)) {
      showAlert("tên đầy đủ không hợp lệ", false);
      isValidate = false
    }
    else if (userName.length < 7) {
      showAlert("Tên đăng nhập phải lớn hơn 6 kí tự", false);
      isValidate = false
    }
    else if (phonenumber.length < 10) {
      showAlert("Số điện thoại không hợp lệ", false);
      isValidate = false
    }

    else if ((password.trim()).length < 6) {
      showAlert("Mật khẩu phải từ 6 ký tự trở lên", false);
      isValidate = false
    }
    else if (password != confirmpassword) {
      showAlert("Nhập lại mật khẩu không khớp", false);
      isValidate = false
    }
    else if (!re.test(email)) {
      showAlert("Email sai định dạng", false);
      isValidate = false
    } else isValidate = true
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
    <View style={styles.container}>
      <KeyboardAwareScrollView style={{
        flex: 1
      }}>
        <View style={styles.TitleView}>

          <View style={[{ flex: 0.5, flexDirection: 'row' }]} >
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <AntDesignIcon name="arrowleft" style={styles.Arrowback} />
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.Title}> Đăng ký tài khoản</Text>
          </View>

        </View>

        <View >
          <View>
            <FontAwesome name="pencil" size={24} color="black" style={styles.icon} />
            <TextInput style={styles.Input} placeholder="Họ và tên"
              value={fullName}
              onChangeText={setfullName} />
          </View>

          <View>
            <Entypo name="user" size={24} color="black" style={styles.icon} />
            <TextInput style={styles.Input} placeholder="Tên đăng nhập"
              value={userName}
              onChangeText={setuserName} />
          </View>


          <View>
            <Entypo name="lock" size={24} color="black" style={styles.icon} />
            <TextInput style={styles.Input} placeholder="Mật khẩu"
              secureTextEntry={true}
              value={password}
              onChangeText={setpassword} />
          </View>

          <View>
            <Entypo name="lock" size={24} color="black" style={styles.icon} />
            <TextInput style={styles.Input} placeholder="Nhập lại mật khẩu"
              secureTextEntry={true}
              value={confirmpassword}
              onChangeText={setconfirmpassword} />
          </View>


          <View>
            <Entypo name="mail" size={24} color="black" style={styles.icon} />
            <TextInput style={styles.Input} placeholder="Địa chỉ email"
              value={email}
              onChangeText={setemail} />
          </View>

          <View>
            <Entypo name="phone" size={24} color="black" style={styles.icon} />
            <TextInput style={styles.Input} placeholder="Số điện thoại"
              value={phonenumber}
              onChangeText={setphonenumber}
              keyboardType='numeric'
            />
          </View>

          <View style={styles.ViewTitlePicker}>
            <Text style={styles.TextTitlePicker} >Bạn là: </Text>
          </View>
        </View>
        <View style={styles.ViewPicker}>
          <Picker
            selectedValue={role}
            onValueChange={(value, index) => setrole(value)}
          >
            <Picker.Item label="Người dùng" value="0" />
            <Picker.Item label="Nhà cung cấp khách sạn" value="2" />
            <Picker.Item label="Nhà cung cấp nhà hàng" value="3" />
          </Picker>
        </View>

        <View style={styles.LoginButtonView}>
          <TouchableOpacity style={styles.LoginButton}
            onPress={() => {

              setLoading(true),
                validate()
              if (isValidate) {
                onSignup()
                isValidate = false;
              }

            }}
          >
            <Text style={styles.LoginButtonText}> Đăng ký</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
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
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#48BBEC',
    backgroundColor: 'white',
    paddingLeft: 60
  },

  LoginButtonView: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 30,
    margin: 20
  },

  LoginButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  Arrowback: {
    fontSize: 30,
    marginLeft: 20
  },
  ViewPicker: {
    marginTop: 10,
    marginRight: 30,
    marginLeft: 30,
    backgroundColor: "#fff",
    padding: 10
  },
  ViewTitlePicker: {
    marginTop: 15,
    marginLeft: 35
  },
  TextTitlePicker: {
    fontSize: 17
  },
  icon: {
    position: "absolute",
    top: 28,
    left: 40,
    zIndex: 10
  },
  eyeshow: {
    position: "absolute",
    top: 28,
    left: 90,
    zIndex: 10
  }
});

export default SignUp;