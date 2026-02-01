import { createSelector, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./users.thunks";

const initialState = {
  userList: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},

  // Extra Reducers
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.userList = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { userAdd, userDelete, userUpdate } = usersSlice.actions;
export const baseSelector = (state) => state.users;
export const usersSelector = createSelector(
  baseSelector,
  (users) => users.userList,
);

export default usersSlice.reducer;
