import Api from "../helper/axiosInterceptors";
import { GET_EVENT_WATCHER, GET_EVENTS_BY_USER_WATCHER } from "../constants/actionTypes";

export const getEventsAction = () => {
  return {
    type: GET_EVENT_WATCHER
  };
};

export const getActiveEvents = () => {
  return Api.get("/events")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log("error", error);
    });
};

export const getActiveEventsByUesrAction = () => {
  return {
    type: GET_EVENTS_BY_USER_WATCHER
  };
};


export const getEventsByUser = userId => {
  return Api.get("/events/" + userId)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log("error", error);
    });
};
