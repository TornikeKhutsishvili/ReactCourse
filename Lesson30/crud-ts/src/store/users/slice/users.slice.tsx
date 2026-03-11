import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./users.state";
import { usersExtraReducers } from "./users.extraReducers";

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: usersExtraReducers,
});

export default userSlice.reducer;