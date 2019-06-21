import Api from "../helper/axiosInterceptors";
import {
  STADISTICS_USER_GET_WATCHER,
  STADISTICS_USER_TOURNAMENT_GET_WATCHER
} from "../constants/actionTypes";

export const getStadisticsByUserAction = id => {
  return {
    type: STADISTICS_USER_GET_WATCHER,
    userId: id
  };
};

export const getStadisticsByUser = userId => {
  return Api.get("/estadisticas/usuario/" + userId)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log("error", error);
    });
};

export const getStadisticsTournamentAction = id => {
  return {
    type: STADISTICS_USER_TOURNAMENT_GET_WATCHER,
    userId: id
  };
};

export const getStadisticsTournament = () => {
  return Api.get("/estadisticas/torneo/")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log("error", error);
    });
};
