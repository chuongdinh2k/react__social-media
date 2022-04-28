import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { authApi } from "@api";
import { ILogin, ISignUp, IUserInfo } from "@interfaces";
import { RootState } from ".";

import { updateSnackbar } from "./app";

interface IState {
    loading: boolean;
    userInfo?: IUserInfo;
    message?: string;
}
const initialState: IState = {
    loading: false,
    userInfo: undefined,
};
export const login = createAsyncThunk("auth/login", async (params: any) => {
    const { values, dispatch } = params;
    try {
        const res = await authApi.login(values);
        dispatch(
            updateSnackbar({
                message: `Hi ${res.data.data.firstname} ${res.data.data.lastname}, Welcome back!`,
                messageType: "success",
            })
        );
        return res.data.data;
    } catch (error: any) {
        const status = error.response.status;
        if (status === 404) {
            dispatch(
                updateSnackbar({
                    message: "Something is wrong! Please try again",
                    messageType: "error",
                })
            );
        } else {
            dispatch(
                updateSnackbar({
                    message: error.response.data.message,
                    messageType: "error",
                })
            );
        }
    }
});

interface ISignupParams {
    dispatch: any;
    values: ISignUp;
}
export const signUp = createAsyncThunk("auth/signup", async (params: ISignupParams) => {
    const { values, dispatch } = params;
    try {
        const res = await authApi.signUp(values);
        dispatch(
            updateSnackbar({
                message: `Created account successfully!`,
                messageType: "success",
            })
        );
        return res.data.data;
    } catch (error: any) {
        const status = error.response.status;
        if (status === 404) {
            dispatch(
                updateSnackbar({
                    message: "Something is wrong! Please try again",
                    messageType: "error",
                })
            );
        } else {
            dispatch(
                updateSnackbar({
                    message: error.response.data.message,
                    messageType: "error",
                })
            );
        }
    }
});

// export const signOut = createAsyncThunk("auth/signOut", async (params: any) => {
//     const { values, dispatch } = params;
//     try {
//         const res = await authApi.login(values);
//         dispatch(
//             updateSnackbar({
//                 message: `Hi ${res.data.data.firstname} ${res.data.data.lastname}, Welcome back!`,
//                 messageType: "success",
//             })
//         );
//         return res.data.data;
//     } catch (error: any) {
//         const status = error.response.status;
//         if (status === 404) {
//             dispatch(
//                 updateSnackbar({
//                     message: "Something is wrong! Please try again",
//                     messageType: "error",
//                 })
//             );
//         } else {
//             dispatch(
//                 updateSnackbar({
//                     message: error.response.data.message,
//                     messageType: "error",
//                 })
//             );
//         }
//     }
// });

const authSlice = createSlice({
    name: " auth",
    initialState: initialState,
    reducers: {
        signOut: (state) => {
            state.userInfo = undefined;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(login.fulfilled, (state, action: PayloadAction<IUserInfo>) => {
            state.loading = false;
            state.userInfo = action.payload;
        });
        builder.addCase(login.rejected, (state) => {
            state.loading = false;
        });
    },
});

export const { signOut } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;
export default authSlice.reducer;
