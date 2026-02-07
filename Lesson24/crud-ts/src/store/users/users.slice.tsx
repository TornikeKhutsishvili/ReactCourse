import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addUser, deleteUser, getUsers, updateUser } from "./users.thunks";

import type { UserList } from "../../interfaces/userList.inteface";
import type { RootState } from "../../store";

type TypeError = string | null;

interface UsersState {
  userList: UserList[];
  loading: boolean;
  error: TypeError;
}

const initialState: UsersState = {
  userList: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},

  // Extra Reducers
  extraReducers: (builder) => {
    builder
      // GET
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
        state.error = action.payload as string;
      })

      // ADD
      .addCase(addUser.fulfilled, (state, action) => {
        state.userList.push(action.payload);
      })

      // UPDATE
      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.userList.findIndex(
          (u) => u.id === action.payload.id,
        );
        if (index !== -1) state.userList[index] = action.payload;
      })

      // DELETE
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.userList = state.userList.filter((u) => u.id !== action.payload);
      });
  },
});

export default userSlice.reducer;

export const usersStateSelector = (state: RootState) => state.users;

export const userListSelector = createSelector(
  usersStateSelector,
  (state) => state.userList,
);

export const usersLoadingSelector = createSelector(
  usersStateSelector,
  (state) => state.loading,
);

export const usersErrorSelector = createSelector(
  usersStateSelector,
  (state) => state.error,
);
