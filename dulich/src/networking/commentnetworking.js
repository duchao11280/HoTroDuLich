import AsyncStorage from '@react-native-async-storage/async-storage';
const API_URL = 'http://192.168.1.6:3000';

const getToken = async () => {
    try {
        const token = await AsyncStorage.getItem('keytoken')
        return token
    } catch (error) {
        return;
    }
}

// get comment for user by place id
const getAllCommentByPlaceID = async (id) => {
    try {
        let accessToken = await getToken();
        const response = await fetch(
            API_URL + `/api/v1/comment/placeid=${id}`,
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

const deleteCommentByUser = async (id,userID) => {
    try {
      let accessToken = await getToken();
      const respone = await fetch(API_URL + `/api/v1/comment/${id}`, {
        method: 'DELETE',
        headers: {
          "Accept": 'application/json',
          'Content-Type': 'application/json',
          "x-access-token": accessToken,
        },
        body: JSON.stringify({
          userID:userID
        })
      });
      const json = await respone.json();

      return json;
    } catch (error) {
  
    }
  }
// post comment
const addComment = async (userID, content, placeID) => {
    try {
      let accessToken = await getToken();

      const respone = await fetch(
        API_URL + `/api/v1/comment/`, {
        method: 'POST',
        headers: {
          "Accept": 'application/json',
          'Content-Type': 'application/json',
          "x-access-token": accessToken,
        },
        body: JSON.stringify({
          userID: userID,
          content: content,
          placeID: placeID
        })
      });
      const json = await respone.json();
      return json;
    } catch (error) {
  
    }
  }
export {
    getAllCommentByPlaceID,
    deleteCommentByUser,
    addComment,
}