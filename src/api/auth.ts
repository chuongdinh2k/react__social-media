import { ILogin, ISignUp } from "@interfaces";
import { axiosClient } from ".";

export const authApi = {
    login: (params: ILogin) => {
        const url = `${process.env.REACT_APP_BE_URL}/user/login`;
        return axiosClient.post(url, params);
    },
    signUp: (params: ISignUp) => {
        const url = `${process.env.REACT_APP_BE_URL}/user/signup`;
        return axiosClient.post(url, params);
    },
};
