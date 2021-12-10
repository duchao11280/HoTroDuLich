import AsyncStorage from '@react-native-async-storage/async-storage';
const API_URL = 'http://192.168.1.11:3000';

const getToken = async () => {
    try {
        const token = await AsyncStorage.getItem('keytoken')
        return token
    } catch (error) {
        return;
    }
}
// get data cho màn hình profile
const getAllRoomByUserID = async (id) => {
    try {
        let accessToken = await getToken();
        const response = await fetch(
            API_URL + `/api/v1/hotel/room/${id}`,
            {
                method: 'GET',
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

// get place for picker
const getAllPlace = async () => {
    try {
        let accessToken = await getToken();
        const response = await fetch(
            API_URL + `/api/v1/hotel/places`,
            {
                method: 'GET',
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
// update room 
const updateRoom = async (id, params) => {
    try {
        let accessToken = await getToken();
        const response = await fetch(
            API_URL + `/api/v1/hotel/room/updateroom/${id}`,
            {
                method: 'PUT',
                headers: {
                    "Accept": 'application/json',
                    'Content-Type': 'application/json',
                    "x-access-token": accessToken,
                },
                body: JSON.stringify({
                    roomName: params.roomName,
                    slot: params.slot,
                    price: params.price,
                    description: params.description,
                    address: params.address,
                    placeID: params.placeID
                })
            }
        );
        const json = await response.json();
        return json;
    } catch (error) {

    }
};

// add new room
const addNewRoom = async (params) => {
    try {
        let accessToken = await getToken();
        const response = await fetch(
            API_URL + `/api/v1/hotel/room/addnew`,
            {
                method: 'POST',
                headers: {
                    "Accept": 'application/json',
                    'Content-Type': 'application/json',
                    "x-access-token": accessToken,
                },
                body: JSON.stringify({
                    roomName: params.roomName,
                    slot: params.slot,
                    price: params.price,
                    description: params.description,
                    address: params.address,
                    userID: params.userID,
                    placeID: params.placeID
                })
            }
        );
        const json = await response.json();
        return json;
    } catch (error) {

    }
};
// disable room
const disableRoom = async (id) => {
    try {
        let accessToken = await getToken();
        const response = await fetch(
            API_URL + `/api/v1/hotel/room/disable/${id}`,
            {
                method: 'PUT',
                headers: {

                    "x-access-token": accessToken,
                },
            }
        );
        const json = await response.json();
        return json;
    } catch (error) {

    }
};

const getRoomsHaveBooked = async (id) => {
    try {
        let accessToken = await getToken();
        const response = await fetch(
            API_URL + `/api/v1/hotel/room/booked/${id}`,
            {
                method: 'GET',
                headers: {
                    "x-access-token": accessToken,
                },
            }
        );
        const json = await response.json();
        return json;
    } catch (error) {

    }
}

export {
    getAllRoomByUserID,
    getAllPlace,
    updateRoom,
    addNewRoom,
    disableRoom,
    getRoomsHaveBooked
}