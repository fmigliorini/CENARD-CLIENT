import axios from "axios";

export default axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    if (401 === error.response.status) {
      
    }

    return Promise.reject(error);
  }
);
