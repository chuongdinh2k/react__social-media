export interface ILogin {
    email?: string;
    password?: string;
}
export interface ISignUp {
    email: string;
    firstname: string;
    lastname: string;
    password: string;
    nickname: string;
}
export interface IUserInfo {
    token?: string;
    refreshToken?: string;
    email: string;
    lastname: string;
    firstname: string;
    nickname: string;
    avatar?: string;
}
