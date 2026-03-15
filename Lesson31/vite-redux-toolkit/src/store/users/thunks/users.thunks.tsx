import { createAsyncThunk } from "@reduxjs/toolkit";
import type { UserList } from "../../../interfaces/userList.inteface";
const BASE_URL = `${import.meta.env.VITE_API_URL}/users`;

// Get
export const getUsers = createAsyncThunk<
  UserList[],
  void,
  { rejectValue: string }
>("users/getUsers", async (_, thunkAPI) => {
  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error();
    return await res.json();
  } catch {
    return thunkAPI.rejectWithValue("Failed to fetch users");
  }
});

// Add
export const addUser = createAsyncThunk<
  UserList,
  Omit<UserList, "id">,
  { rejectValue: string }
>("users/addUser", async (user, thunkAPI) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    return await res.json();
  } catch {
    return thunkAPI.rejectWithValue("Failed to add user");
  }
});

// Update
export const updateUser = createAsyncThunk<
  UserList,
  { id: number; user: UserList },
  { rejectValue: string }
>("users/updateUser", async ({ id, user }, thunkAPI) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    return await res.json();
  } catch {
    return thunkAPI.rejectWithValue("Failed to update user");
  }
});

// Delete
export const deleteUser = createAsyncThunk<
  number,
  number,
  { rejectValue: string }
>("users/deleteUser", async (id, thunkAPI) => {
  try {
    await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
    return id;
  } catch {
    return thunkAPI.rejectWithValue("Failed to delete user");
  }
});