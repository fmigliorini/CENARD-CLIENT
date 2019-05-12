import {} from "../constants/actionTypes";

const initialState = {
  appName: "CENARD"
};

export default (state = initialState, action) => {
  switch (action) {
    case "APP_INIT":
      return { ...state, appStart: true };
    default:
      return state;
  }
};
