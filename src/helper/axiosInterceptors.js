import axios from "axios";

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

        axios.interceptors.response.use((response) => {
            return response;
        }, (error) => {
            if (error.response) {
                switch (error.response.status) {
                    case ErrorCode.UNAUTHORIZED:
                    case ErrorCode.FORBIDDEN:
                        if (error.response.data && error.response.data.status === ErrorCode.ACCESS_DENIED) {
                            return Promise.reject(error);
                        }
                        break;
                    default:
                        return Promise.reject(error);
                }
            }
        });

        let data = context.params || context.data || {};

        let httpMethod = (context.httpMethod) ? context.httpMethod.toUpperCase() : "GET";



        const endpoint = 'http://localhost' + context.route;

        const ajaxOpts = {
            "method": httpMethod,
            "url": endpoint,
            "headers": {},
            "withCredentials": true
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

        return axios(ajaxOpts);
    }
}
