import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addUser, deleteUser, getUsers, updateUser } from "../thunks/users.thunks";
import type { UserList } from "../../../interfaces/userList.inteface";
import type { RootState } from "../../index";

type TypeError = string | null;

interface IUsersState {
  userList: UserList[];
  loading: boolean;
  error: TypeError;
}

export const initialState: IUsersState = {
  userList: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},

  extraReducers(builder) {
    // GET
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.userList = action.payload;
    })
    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    })

    // ADD
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.userList.push(action.payload);
    })

    // UPDATE
    builder.addCase(updateUser.fulfilled, (state, action) => {
      const index = state.userList.findIndex((u) => u.id === action.payload.id);
      if (index !== -1) state.userList[index] = action.payload;
    })

    // DELETE
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.userList = state.userList.filter((u) => u.id !== action.payload);
    });
  },
});

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

export default userSlice.reducer;