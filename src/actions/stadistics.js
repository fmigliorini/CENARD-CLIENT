import axios from "axios";

import { STADISTICS_USER_GET_WATCHER } from "../constants/actionTypes";

export const getStadisticsByUserAction = id => {
  return {
    type: STADISTICS_USER_GET_WATCHER,
    userId: id
  };
};

export const getStadisticsByUser = id => {
  return axios
    .get("/authenticate/" + id)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log("error", error);
    });
};
