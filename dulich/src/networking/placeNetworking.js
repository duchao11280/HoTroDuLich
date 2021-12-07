
const API_URL = 'http://192.168.1.7:3000';
// get data cho màn hình profile
const getAllPlaces = async () => {
  try {
    const response = await fetch(
      API_URL + `/api/v1/place/`
    );
    const json = await response.json();
    return json.data;
  } catch (error) {
  }
};
export { getAllPlaces }