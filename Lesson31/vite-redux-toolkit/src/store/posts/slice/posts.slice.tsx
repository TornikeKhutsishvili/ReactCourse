import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addPost, deletePost, getPosts, updatePost } from "../thunks/posts.thunks";
import type { PostList } from "../../../interfaces/postList.interface";
import type { RootState } from "../../index";

type TypeError = string | null;

export interface IPostsState {
  postList: PostList[];
  loading: boolean;
  error: TypeError;
}

export const initialState: IPostsState = {
  postList: [],
  loading: false,
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder.addCase(getPosts.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.postList = action.payload;
    })
    builder.addCase(getPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    })

    // ADD
    builder.addCase(addPost.fulfilled, (state, action) => {
      state.postList.push(action.payload);
    })

    // UPDATE
    builder.addCase(updatePost.fulfilled, (state, action) => {
      const index = state.postList.findIndex((u) => u.id === action.payload.id);
      if (index !== -1) state.postList[index] = action.payload;
    })

    // DELETE
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.postList = state.postList.filter((u) => u.id !== action.payload);
    });
  },
});

export const postsStateSelector = (state: RootState) => state.posts;

export const postsListSelector = createSelector(
  postsStateSelector,
  (state) => state.postList,
);

export const postsLoadingSelector = createSelector(
  postsStateSelector,
  (state) => state.loading,
);

export const postsErrorSelector = createSelector(
  postsStateSelector,
  (state) => state.error,
);

export default postsSlice.reducer;