import React, {useState, useEffect} from 'react';

const API_URL = 'http://192.168.1.5:3000';
// get data cho màn hình profile
const getProfile = async (id) => {
    try {
      const response = await fetch(
        API_URL + `/api/v1/user/${id}`
      );
      const json = await response.json();
      return json.data;
    } catch (error) {
    }
};

// edit profile
const editProfile = async (id,params) =>{
  try {
    const respone = await fetch(API_URL+`/api/v1/user/${id}`, {
      method: 'PUT',
      headers: {
        "Accept": 'application/json',
        'Content-Type': 'application/json',
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
const changePassword = async (id,params) =>{
  try {
    const respone = await fetch(API_URL+`/api/v1/user/changepassword/${id}`, {
      method: 'PUT',
      headers: {
        "Accept": 'application/json',
        'Content-Type': 'application/json',
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
export {getProfile, editProfile, changePassword}