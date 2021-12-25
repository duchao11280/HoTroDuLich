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
const getAllPlaces = async () => {
  try {
    let accessToken = await getToken();
    const response = await fetch(
      API_URL + `/api/v1/admin/places`,
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

// get all users
const getAllUsers = async () => {
  try {
    let accessToken = await getToken();
    const response = await fetch(
      API_URL + `/api/v1/admin/users`,
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


// get all feedback
const getAllFeedBack = async () => {
  try {
    let accessToken = await getToken();
    const response = await fetch(
      API_URL + `/api/v1/admin/feedback`,
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

//  vô hiệu hóa người dùng
const disableUser = async (id) => {
  try {
    let accessToken = await getToken();
    const respone = await fetch(API_URL + `/api/v1/admin/disableuser/${id}`, {
      method: 'PUT',
      headers: {
        "x-access-token": accessToken,
      }

    });
    const json = await respone.json();
    return json;
  } catch (error) {

  }

}
//  vô hiệu hóa địa điểm
const deletePlace = async (id) => {
  try {
    let accessToken = await getToken();
    const respone = await fetch(API_URL + `/api/v1/admin/place/delete/${id}`, {
      method: 'PUT',
      headers: {
        "x-access-token": accessToken,
      }
    });
    const json = await respone.json();
    return json;
  } catch (error) {

  }
}
// lấy hình ảnh bằng id place 
const getImageByPlaceID = async (id) => {
  try {
    let accessToken = await getToken();
    const response = await fetch(
      API_URL + `/api/v1/admin/place/images/${id}`,
      {
        headers: {
          "x-access-token": accessToken,
        }
      }
    );
    const json = await response.json();
    return json;
  } catch (error) {

  }
}
//  Cập nhật thông tin địa điểm du lịch
const updateInfoPlace = async (params) => {
  try {
    let accessToken = await getToken();
    const respone = await fetch(API_URL + `/api/v1/admin/place/update/${params.placeID}`, {
      method: 'PUT',
      headers: {
        "Accept": 'application/json',
        'Content-Type': 'application/json',
        "x-access-token": accessToken,
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
const uploadImagePlace = async (id, uriFromClient) => {
  try {
    let accessToken = await getToken();
    let form = new FormData();
    let file = {
      name: id + "_" + Date.now() + '.jpg',
      uri: uriFromClient,
      type: "image/jpeg",
    }
    form.append('file', file);
    //console.log(form);
    const respone = await fetch(API_URL + `/api/v1/admin/place/image/upload/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        "x-access-token": accessToken,
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
const addPlaceInfo = async (params) => {
  try {
    let accessToken = await getToken();
    const respone = await fetch(API_URL + `/api/v1/admin/place`, {
      method: 'POST',
      headers: {
        "Accept": 'application/json',
        'Content-Type': 'application/json',
        "x-access-token": accessToken,
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
const disableImage = async (id) => {
  try {
    let accessToken = await getToken();
    const respone = await fetch(API_URL + `/api/v1/admin/place/image/delete/${id}`, {
      method: 'PUT',
      headers: {
        "x-access-token": accessToken,
      }
    });
    const json = await respone.json();
    return json;
  } catch (error) {

  }
}
//=====================Notification==================//
//get all notifications
const getAllNotifications = async () => {
  try {
    let accessToken = await getToken();
    const response = await fetch(
      API_URL + `/api/v1/admin/notification`,
      {
        headers: {
          "x-access-token": accessToken,
        }
      }
    );
    const json = await response.json();
    return json;
  } catch (error) {

  }
}
// delete notification
const deleteNotification = async (id) => {
  try {
    let accessToken = await getToken();
    const respone = await fetch(API_URL + `/api/v1/admin/notification/delete/${id}`, {
      method: 'DELETE',
      headers: {
        "x-access-token": accessToken,
      }
    });
    const json = await respone.json();
    return json;
  } catch (error) {

  }
}
// add new notification
const addNotification = async (title, content) => {
  try {
    let accessToken = await getToken();
    var now = new Date();
    var month = now.getMonth() + 1;
    var time = (now.getFullYear() + "-" + month + "-" + now.getDate() +
      " " + now.getHours() + ":" + now.getMinutes());
    const respone = await fetch(
      API_URL + `/api/v1/admin/notification/addnew`, {
      method: 'POST',
      headers: {
        "Accept": 'application/json',
        'Content-Type': 'application/json',
        "x-access-token": accessToken,
      },
      body: JSON.stringify({
        title: title,
        content: content,
        time: time
      })
    });
    const json = await respone.json();
    return json;
  } catch (error) {

  }
}
// Update 
const updateNotification = async (id, title, content) => {
  try {
    let accessToken = await getToken();
    var now = new Date();
    var month = now.getMonth() + 1;
    var time = (now.getFullYear() + "-" + month + "-" + now.getDate() +
      " " + now.getHours() + ":" + now.getMinutes());
    const respone = await fetch(
      API_URL + `/api/v1/admin/notification/update/${id}`, {
      method: 'PUT',
      headers: {
        "Accept": 'application/json',
        'Content-Type': 'application/json',
        "x-access-token": accessToken,
      },
      body: JSON.stringify({
        title: title,
        content: content,
        time: time
      })
    });
    const json = await respone.json();
    return json;
  } catch (error) {

  }
}
//=========comment===========//
// get comment for admin by place id
const getAllUserCommentByPlaceID = async (id) => {
  try {
      let accessToken = await getToken();
      const response = await fetch(
          API_URL + `/api/v1/admin/comment/placeid=${id}`,
          {
              method: 'GET',
              headers: {
                  "x-access-token": accessToken,
              }
          }
      );
      const json = await response.json();
      return json;
  } catch (error) {

  }
};
// delete comment

const deleteCommentByAdmin = async (id) => {
  try {
    let accessToken = await getToken();
    const respone = await fetch(API_URL + `/api/v1/admin/comment/${id}`, {
      method: 'DELETE',
      headers: {
        "x-access-token": accessToken,
      }
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
  getAllFeedBack,
  getAllNotifications,
  deleteNotification,
  addNotification,
  updateNotification,
  getAllUserCommentByPlaceID,
  deleteCommentByAdmin,
}

