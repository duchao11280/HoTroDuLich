const API_URL = 'http://192.168.1.5:3000';
// get data cho màn hình profile
const getAllPlaces = async () => {
    try {
      const response = await fetch(
        API_URL + `/api/v1/admin/places`
      );
      const json = await response.json();
      return json.data;
    } catch (error) {
      
    }
};

// get all users
const getAllUsers = async () => {
    try {
      const response = await fetch(
        API_URL + `/api/v1/admin/users`
      );
      const json = await response.json();
      return json.data;
    } catch (error) {
      
    }
};
const disableUser = async (id) =>{
  try {
    const respone = await fetch(API_URL+`/api/v1/admin/disableuser/${id}`, {
      method: 'PUT',  
    });
    const json = await respone.json();
    return json;
  } catch (error) {

  }

}
export {getAllPlaces, getAllUsers, disableUser}