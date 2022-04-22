import { combineReducers } from "redux";
import { AnyAction, Reducer } from "@reduxjs/toolkit";

import appReducer from "./app";
import postReducer from "./post";

export * from "./app";
export * from "./post";

const productReducer = combineReducers({
    app: appReducer,
    posts: postReducer,
});

export type RootState = ReturnType<typeof productReducer>;

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
    return productReducer(state, action);
};

export default rootReducer;
