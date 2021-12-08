import AsyncStorage from '@react-native-async-storage/async-storage';
const API_URL = 'http://192.168.1.7:3000';

const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('keytoken')
    return token
  } catch (error) {
      return;
  }
}
// get data cho màn hình profile
const getProfile = async (id) => {
  try {
    let accessToken = await getToken();
    const response = await fetch(
      API_URL + `/api/v1/user/${id}`,
      {
        headers: {
          "x-access-token": accessToken,
        }
      }
    );
    const json = await response.json();
    return json.data;
  } catch (error) {
  }
};

// edit profile
const editProfile = async (id, params) => {
  try {
    let accessToken = await getToken();
    const respone = await fetch(API_URL + `/api/v1/user/${id}`, {
      method: 'PUT',
      headers: {
        "Accept": 'application/json',
        'Content-Type': 'application/json',
        "x-access-token": accessToken,
      },
      body: JSON.stringify({
        fullName: params.fullName,
        email: params.email,
        phonenumber: params.phonenumber
      })
    });
    const json = await respone.json();
    return json.message;
  } catch (error) {

  }

}

// change password
const changePassword = async (id, params) => {
  try {
    let accessToken = await getToken();
    const respone = await fetch(API_URL + `/api/v1/user/changepassword/${id}`, {
      method: 'PUT',
      headers: {
        "Accept": 'application/json',
        'Content-Type': 'application/json',
        "x-access-token": accessToken,
      },
      body: JSON.stringify({
        oldPassword: params.oldPassword,
        newPassword: params.newPassword,
        confirmPassword: params.confirmPassword
      })
    });
    const json = await respone.json();
    return json;
  } catch (error) {

  }

}

const login = async (userName, password) => {
  try {
    const respone = await fetch(API_URL + `/api/v1/user/login`, {
      method: 'POST',
      headers: {
        "Accept": 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: userName,
        password: password
      })
    });
    const json = await respone.json();
    console.log(JSON.stringify(json));
    return json;
  } catch (error) {

  }
}



const signUp = async (params) => {
  try {
    const respone = await fetch(API_URL + '/api/v1/user/signup', {
      method: 'POST',
      headers: {
        "Accept": 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: params.userName,
        fullName: params.fullName,
        password: params.password,
        email: params.email,
        phonenumber: params.phonenumber,
        role: params.role
      })
    });
    const json = await respone.json();
    return json;
  } catch (error) {

  }

}
export { getProfile, editProfile, changePassword, login, signUp }