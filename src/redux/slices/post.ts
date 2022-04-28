import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { postApi } from "@api";

interface IState {
    loading?: boolean;
    listPosts?: any;
    loadMore?: boolean;
    page?: number;
}

const initialState: IState = {
    loading: false,
    listPosts: [],
};

export const viewListPosts = createAsyncThunk("posts/view", async (values: any) => {
    const res = await postApi.getListPost(values);
    return res.data;
});

const posts = createSlice({
    name: "post",
    initialState: initialState,
    reducers: {
        loadData: (state, action: PayloadAction<any>) => {
            state.listPosts = [...state.listPosts, ...action.payload];
        },
    },
    extraReducers: (builder) => {
        // WHAT: view detail
        builder.addCase(viewListPosts.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(viewListPosts.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
            // state.listPosts = [...state.listPosts, ...action.payload];
            state.listPosts = action.payload;
        });
        builder.addCase(viewListPosts.rejected, (state) => {
            state.loading = false;
        });
    },
});
export const { loadData } = posts.actions;
export const selectPost = (state: RootState) => state.posts;
export default posts.reducer;
