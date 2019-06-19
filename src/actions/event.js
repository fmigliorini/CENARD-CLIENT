import axios from "axios";

import { GET_EVENT_WATCHER } from "../constants/actionTypes";

export const getEvents = () => {
  return {
    type: GET_EVENT_WATCHER
  };
};

export const getActiveEvents = () => {
  return axios
    .get("/events")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log("error", error);
    });
};
