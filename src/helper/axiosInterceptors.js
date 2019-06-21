import axios from "axios";
import { getTokenStorage } from "./localStorageUser";

export default class Api {
  // shorthand for the request method
  static get(route, data = {}) {
    return this.request({
      httpMethod: "GET",
      route: route,
      data: data
    });
  }

  static post(route, data = {}) {
    return this.request({
      httpMethod: "POST",
      route: route,
      data: data
    });
  }

  // global class for creating API calls
  static request(context) {
    /*
            receives object with these properties:
            httpMethod, route, data
         */

    const ErrorCode = {
      ACCESS_DENIED: 106,
      BAD_REQUEST: 400,
      UNAUTHORIZED: 401,
      FORBIDDEN: 403,
      NOT_FOUND: 404,
      SERVICE_UNAVAILABLE: 503 // maintenance mode
    };

    if (!context.route) {
      console.log("Request route required");
      return;
    }

    axios.interceptors.response.use(
      response => {
        console.log(response);
        return response;
      },
      error => {
        if (error.response) {
            console.log(error.response);
          switch (error.response.status) {
            case ErrorCode.UNAUTHORIZED:
            case ErrorCode.FORBIDDEN:
              return Promise.reject(error);
            default:
              console.log("ERROR REJET");
              return Promise.reject(error);
          }
        }
      }
    );

    let data = context.params || context.data || {};

    let httpMethod = context.httpMethod
      ? context.httpMethod.toUpperCase()
      : "GET";

    const endpoint = "http://localhost:3000/" + context.route;
    console.log(endpoint);
    const ajaxOpts = {
      method: httpMethod,
      url: endpoint,
      headers: {
        Ahutorization: "bearer " + getTokenStorage()
      },
      withCredentials: true
    };

    switch (httpMethod) {
      case "POST":
        ajaxOpts.data = data;
        ajaxOpts.headers["Content-Type"] = "application/x-www-form-urlencoded";
        break;
      case "GET":
        ajaxOpts.params = data;
        break;
      default:
    }

    console.log(ajaxOpts);

    return axios(ajaxOpts);
  }
}
