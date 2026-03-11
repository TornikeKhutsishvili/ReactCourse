import type { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import type { IUsersState } from "./users.state";
import {
  addUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../thunks/users.thunks";

export const usersExtraReducers = (
  builder: ActionReducerMapBuilder<IUsersState>,
) => {
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
      const index = state.userList.findIndex((u) => u.id === action.payload.id);
      if (index !== -1) state.userList[index] = action.payload;
    })

    // DELETE
    .addCase(deleteUser.fulfilled, (state, action) => {
      state.userList = state.userList.filter((u) => u.id !== action.payload);
    });
};