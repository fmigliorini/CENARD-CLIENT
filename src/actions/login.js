import {
  SING_IN_WATCHER,
  GET_USER_WATCHER,
  SING_OUT_WATCHER
} from "../constants/actionTypes";
import Api from "../helper/axiosInterceptors";

export const loginAction = payload => {
  return {
    type: SING_IN_WATCHER,
    payload
  };
};

export const login = (email, password) => {
  return Api.post("/login", { email, password })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log("error", error);
    });
};

export const getUserLoggedAction = userId => {
  return {
    type: GET_USER_WATCHER,
    payload: {
      userId
    }
  };
};

export const getUserLogged = userId => {
  return Api.post("/usuario/" + userId)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log("error", error);
    });
};

export const logOutAction = () => {
  return {
    type: SING_OUT_WATCHER
  };
};
