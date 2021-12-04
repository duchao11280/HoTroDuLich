const API_URL = 'http://192.168.1.7:3000';
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
//  vô hiệu hóa người dùng
const disableUser = async (id) => {
  try {
    const respone = await fetch(API_URL + `/api/v1/admin/disableuser/${id}`, {
      method: 'PUT',
    });
    const json = await respone.json();
    return json;
  } catch (error) {

  }

}
//  vô hiệu hóa địa điểm
const deletePlace = async (id) => {
  try {
    const respone = await fetch(API_URL + `/api/v1/admin/place/delete/${id}`, {
      method: 'PUT',
    });
    const json = await respone.json();
    return json;
  } catch (error) {

  }
}
// lấy hình ảnh bằng id place 
const getImageByPlaceID = async (id) => {
  try {
    const response = await fetch(
      API_URL + `/api/v1/admin/place/images/${id}`
    );
    const json = await response.json();
    return json;
  } catch (error) {

  }
}
//  Cập nhật thông tin địa điểm du lịch
const updateInfoPlace = async (params) => {
  try {
    const respone = await fetch(API_URL + `/api/v1/admin/place/update/${params.placeID}`, {
      method: 'PUT',
      headers: {
        "Accept": 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        placeName: params.placeName,
        description: params.description,
        tips: params.tips,
        city: params.city
      })
    });
    const json = await respone.json();
    return json;
  } catch (error) {

  }
}

//Upload Image Place
const uploadImagePlace = async (id,uriFromClient) => {
  try {
    let form = new FormData();
    let file = {
      name: id+ "_"+ Date.now()+'.jpg',
      uri:uriFromClient,
      type:"image/jpeg",
    }
    form.append('file',file);
    const respone = await fetch(API_URL + `/api/v1/admin/place/image/upload/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: form
    });
    const json = await respone.json();
    console.log(json);
    return json;
  } catch (error) {

  }
}

// addPlace
const addPlaceInfo = async (params) =>{
  try {
    const respone = await fetch(API_URL + `/api/v1/admin/place`, {
      method: 'POST',
      headers: {
        "Accept": 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        placeName: params.placeName,
        description: params.description,
        tips: params.tips,
        city: params.city
      })
    });
    const json = await respone.json();
    return json;
  } catch (error) {

  }
}
// disable image
const disableImage = async (id) =>{
  
  try {
    const respone = await fetch(API_URL + `/api/v1/admin/place/image/delete/${id}`, {
      method: 'PUT',
    });
    const json = await respone.json();
    return json;
  } catch (error) {

  }
}
export {
  getAllPlaces,
  getAllUsers,
  disableUser,
  deletePlace,
  getImageByPlaceID, 
  updateInfoPlace,
  uploadImagePlace,
  addPlaceInfo,
  disableImage,
}