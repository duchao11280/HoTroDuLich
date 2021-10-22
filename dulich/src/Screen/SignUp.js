import * as React from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import {KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {Picker} from '@react-native-picker/picker';




const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
         <KeyboardAwareScrollView style={{
  flex: 1
}}>
        <View style={styles.TitleView}>
            <TouchableOpacity onPress={() => {navigation.push('Login')}}>
                <AntDesignIcon  name="arrowleft" style={styles.Arrowback}/>
            </TouchableOpacity> 
            <Text style={styles.Title}> Đăng ký tài khoản</Text>
        </View>

        <View >
            <TextInput style={styles.Input} placeholder="Tên đăng nhập"/>
            <TextInput style={styles.Input} placeholder="Mật Khẩu"/>
            <TextInput style={styles.Input} placeholder="Nhập lại mật khẩu"/>
            <TextInput style={styles.Input} placeholder="Địa chỉ Email"/>
            <TextInput style={styles.Input} placeholder="Số điện thoại"/>
        <View style={styles.ViewTitlePicker}>
          <Text  style={styles.TextTitlePicker} >Bạn là: </Text>
        </View>
        </View>
          <View style={styles.ViewPicker}>
            <Picker>
                <Picker.Item label="Người dùng" value="User" />
                <Picker.Item label="Nhà cung cấp khách sạn" value="Hotel" />
                <Picker.Item label="Nhà cung cấp nhà hàng" value="Restaurant" />
                <Picker.Item label="Quản trị viên" value="Admin" />
            </Picker>
        </View>
        
        <View style={styles.LoginButtonView}>
            <TouchableOpacity style={styles.LoginButton}>
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
  TitleView:{
    marginTop:60,
    textAlign: 'center',
    marginBottom: 18
  },
  Title:{
    textAlign: 'center',
    fontSize: 20,
  },
  InputView:{
    backgroundColor: 'rgba(0,0,0,0)',
    position: 'absolute', 
    top: 0,
    left: 5,
    right: 5
  },
  Input:{
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
  },

  LoginButtonView:{
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 45,
    margin: 20
  },

  LoginButtonText:{
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  Arrowback:{
    fontSize: 30,
    marginLeft:20
  },
  ViewPicker:{
    marginTop:10,
    marginRight:30,
    marginLeft:30,
    backgroundColor: "#fff",
    padding:10
  },
  ViewTitlePicker:{
    marginTop:15,
    marginLeft:35
  },
  TextTitlePicker:{
    fontSize:17
  }
});

export default SignUp;