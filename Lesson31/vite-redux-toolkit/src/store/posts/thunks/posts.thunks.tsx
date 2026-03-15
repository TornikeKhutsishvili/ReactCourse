import { createAsyncThunk } from "@reduxjs/toolkit";
import type { PostList } from "../../../interfaces/postList.interface";
const BASE_URL = `${import.meta.env.VITE_API_URL}/posts`;

// Get
export const getPosts = createAsyncThunk<
  PostList[],
  void,
  { rejectValue: string }
>("posts/getPosts", async (_, thunkAPI) => {
  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error();
    return await res.json();
  } catch {
    return thunkAPI.rejectWithValue("Failed to fetch posts");
  }
});

// Add
export const addPost = createAsyncThunk<
  PostList,
  Omit<PostList, "id">,
  { rejectValue: string }
>("posts/addPost", async (post, thunkAPI) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });
    return await res.json();
  } catch {
    return thunkAPI.rejectWithValue("Failed to add post");
  }
});

// Update
export const updatePost = createAsyncThunk<
  PostList,
  { id: number; post: PostList },
  { rejectValue: string }
>("posts/updatePost", async ({ id, post }, thunkAPI) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });
    return await res.json();
  } catch {
    return thunkAPI.rejectWithValue("Failed to update post");
  }
});

// Delete
export const deletePost = createAsyncThunk<
  number,
  number,
  { rejectValue: string }
>("posts/deletePost", async (id, thunkAPI) => {
  try {
    await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
    return id;
  } catch {
    return thunkAPI.rejectWithValue("Failed to delete post");
  }
});