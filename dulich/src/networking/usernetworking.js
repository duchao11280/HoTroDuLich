import React, {useState, useEffect} from 'react';

const API_URL = 'http://192.168.1.10:3000';
// get data cho màn hình profile
const getProfile = async (id) => {
    try {
      const response = await fetch(
        API_URL + `/api/v1/user/${id}`
      );
      const json = await response.json();
      return json.data;
    } catch (error) {
      console.error(error);
    }
};

// edit profile
const editProfile = async (id,params) =>{
  try {
    const respone = await fetch(API_URL+`/api/v1/user/${id}`, {
      method: 'PUT',
      headers: {
        "Accept": 'application/json',
        'Content-Type': 'application/json'
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
    console.error(error);
  }

}
export {getProfile, editProfile}