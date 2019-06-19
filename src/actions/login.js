import { SING_IN_WATCHER } from "../constants/actionTypes";
import axios from "axios";

export const loginAction = payload => {
  return {
    type: SING_IN_WATCHER,
    payload
  };
};

export const login = (username, password) => {
  return axios
    .post("/authenticate", {
      username,
      password
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
};
