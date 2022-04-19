import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from ".";

interface IState {
    loading: boolean;
    theme?: string;
}

const initialState: IState = {
    loading: false,
    theme: "dark",
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
    },
});

export const { setLoading, changeTheme } = appSlice.actions;

export const selectApp = (state: RootState) => state.app;

export default appSlice.reducer;
