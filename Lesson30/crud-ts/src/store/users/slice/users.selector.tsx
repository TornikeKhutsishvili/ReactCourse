import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../..";

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