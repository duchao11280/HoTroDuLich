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
// get data cho màn hình profile
const getAllTableByUserID = async (id) => {
    try {
        let accessToken = await getToken();
        const response = await fetch(
            API_URL + `/api/v1/restaurant/table/${id}`,
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
            API_URL + `/api/v1/restaurant/places`,
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
// update table
const updateTable = async (id, params) => {
    try {
        let accessToken = await getToken();
        const response = await fetch(
            API_URL + `/api/v1/restaurant/table/updatetable/${id}`,
            {
                method: 'PUT',
                headers: {
                    "Accept": 'application/json',
                    'Content-Type': 'application/json',
                    "x-access-token": accessToken,
                },
                body: JSON.stringify({
                    tableName: params.tableName,
                    slot: params.slot,
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

// add new table
const addNewtable = async (params) => {
    try {
        let accessToken = await getToken();
        const response = await fetch(
            API_URL + `/api/v1/restaurant/table/addnew`,
            {
                method: 'POST',
                headers: {
                    "Accept": 'application/json',
                    'Content-Type': 'application/json',
                    "x-access-token": accessToken,
                },
                body: JSON.stringify({
                    tableName: params.tableName,
                    slot: params.slot,
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
// disable table
const disableTable = async (id) => {
    try {
        let accessToken = await getToken();
        const response = await fetch(
            API_URL + `/api/v1/restaurant/table/disable/${id}`,
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



const getTablesHaveBooked = async (id) => {
    try {
        let accessToken = await getToken();
        const response = await fetch(
            API_URL + `/api/v1/restaurant/table/booked/${id}`,
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
    getAllTableByUserID,
    getAllPlace,
    updateTable,
    addNewtable,
    disableTable,
    getTablesHaveBooked
}