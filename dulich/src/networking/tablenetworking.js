import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'http://192.168.1.8:3000';
const getToken = async () => {
    try {
        const token = await AsyncStorage.getItem('keytoken')
        return token
    } catch (error) {
        return;
    }
}

// get place for picker
const searchTabletoBook = async (slot, placeID, startTime) => {
    try {
        let accessToken = await getToken();
        const response = await fetch(
            API_URL + `/api/v1/tableservices/searchtable`,
            {
                method: 'POST',
                headers: {
                    "Accept": 'application/json',
                    'Content-Type': 'application/json',
                    "x-access-token": accessToken,
                },
                body: JSON.stringify({
                    slot: slot,
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
// book table
const bookTable = async (tableID, userID, startTime, phoneNumber) => {
    try {
        let accessToken = await getToken();
        const response = await fetch(
            API_URL + `/api/v1/tableservices/booktable`,
            {
                method: 'POST',
                headers: {
                    "Accept": 'application/json',
                    'Content-Type': 'application/json',
                    "x-access-token": accessToken,
                },
                body: JSON.stringify({
                    tableID: tableID,
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

// xem bàn đã đặt
const bookedTableByUserID = async (id) => {
    try {
        let accessToken = await getToken();
        const response = await fetch(
            API_URL + `/api/v1/tableservices/booktable/${id}`,
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
export { searchTabletoBook, bookTable, bookedTableByUserID }