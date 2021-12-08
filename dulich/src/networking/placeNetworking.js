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
const getAllPlaces = async () => {
  try {
    let accessToken = await getToken();
    const response = await fetch(
      API_URL + `/api/v1/place/`,
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
export { getAllPlaces }