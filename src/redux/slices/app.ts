import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from ".";

interface ISnackBar {
    show: boolean;
    message: string;
    messageType?: any;
    anchorOrigin?: any;
    langKey?: string;
}
interface IState {
    loading: boolean;
    theme?: string;
    snackbar: ISnackBar;
}
const initialState: IState = {
    loading: false,
    theme: "dark",
    snackbar: {
        show: false,
        message: "",
        messageType: undefined,
    },
};

const appSlice = createSlice({
    name: "app",
    initialState: initialState,
    reducers: {
        setLoading: (state: any, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        changeTheme: (state: any, action: PayloadAction<string>) => {
            state.theme = action.payload;
        },
        updateSnackbar: (state: any, action: PayloadAction<any>) => {
            state.snackbar = {
                ...state.snackbar,
                ...action.payload,
                show: true,
            };
        },
        resetSnackbar: (state) => {
            state.snackbar = {
                ...initialState.snackbar,
            };
        },
    },
});

export const { setLoading, changeTheme, updateSnackbar, resetSnackbar } = appSlice.actions;

export const selectApp = (state: RootState) => state.app;

export default appSlice.reducer;
