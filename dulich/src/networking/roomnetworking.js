import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'http://192.168.0.105:3000';
const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('keytoken')
    return token
  } catch (error) {
    return;
  }
}

// get place for picker
const searchRoomtoBook = async (slot, price, placeID, startTime) => {
  try {
    let accessToken = await getToken();
    const response = await fetch(
      API_URL + `/api/v1/room/searchroom`,
      {
        method: 'POST',
        headers: {
          "Accept": 'application/json',
          'Content-Type': 'application/json',
          "x-access-token": accessToken,
        },
        body: JSON.stringify({
          slot: slot,
          price: price,
          placeID: placeID,
          startTime: startTime
        })
      }
    );
    const json = await response.json();
    return json;
  } catch (error) {

  }
};
// book room 
const bookRoom = async (roomID, userID, startTime, phoneNumber) => {
  try {
    let accessToken = await getToken();
    const response = await fetch(
      API_URL + `/api/v1/room/bookroom`,
      {
        method: 'POST',
        headers: {
          "Accept": 'application/json',
          'Content-Type': 'application/json',
          "x-access-token": accessToken,
        },
        body: JSON.stringify({
          roomID: roomID,
          userID: userID,
          startTime: startTime,
          phoneNumber: phoneNumber
        })
      }
    );
    if (response.status != 200) {
      return { "message": "Thất bại" }
    }
    const json = await response.json();
    return json;
  } catch (error) {

  }
};

// xem phòng đã đặt
const bookedRoomByUserID = async (id) => {
  try {
    let accessToken = await getToken();
    const response = await fetch(
      API_URL + `/api/v1/room/bookroom/${id}`,
      {
        method: 'GET',
        headers: {
          "Accept": 'application/json',
          'Content-Type': 'application/json',
          "x-access-token": accessToken,
        },
      }
    );
    if (response.status != 200) {
      return { "message": "Thất bại" }
    }
    const json = await response.json();
    return json;
  } catch (error) {

  }
};
export { searchRoomtoBook, bookRoom, bookedRoomByUserID }