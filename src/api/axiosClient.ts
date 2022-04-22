import axios from "axios";

const queryString = require("query-string");

// WHAT: get token in localStorage

export const axiosClient = axios.create({
    headers: {
        Authorization: `Bearer`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
    paramsSerializer: (params: any) => queryString.stringify(params),
});
