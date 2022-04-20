import {constants} from "../reducers/users__reducer";
import axios from "axios";

export const setAuthorized = (data) => {
    localStorage.setItem("EMAIL", data.email)
    return{
        type:constants.SET_AUTHORIZED,
        payload:{
            data:data,
            email:localStorage.getItem("EMAIL")
        }
    }
}

export const logoutHandler = () => {
    return{
        type:constants.LOGOUT
    }
}

export const setPostsData = (data) => {
    return{
        type:constants.SET_POSTS,
        payload:{
            data
        }
    }
}

export const setCurrentPost = (post) => {
    return{
        type:constants.SET_CURRENT_POST,
        payload:{
            post
        }
    }
}

export const checkIsOnline = () => {
  if(localStorage.getItem("ISAUTH")){
      return{
          type:constants.CHECK_ONLINE,
          payload:{
              online:true
          }
      }
  }
  else{
      return{
          type:constants.CHECK_ONLINE,
          payload:{
              online:false
          }
      }
  }
}

export const clearCurrentPost = () => {
    return{
        type:constants.CLEAR_CURRENT
    }
}

export const fetchPostsData =  () => async(dispatch) => {
    const response = await axios.get("https://fakestoreapi.com/products")
    const data = await response.data
    dispatch(setPostsData(data))
}

export const fetchCurrentPost = (postId) => async(dispatch) => {
    const id = postId.length ? postId : ""
    const response = id && await axios.get(`https://fakestoreapi.com/products/${postId}`)
    const data = await response.data
    dispatch(setCurrentPost(data))
}