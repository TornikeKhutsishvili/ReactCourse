import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ThemesReducer from "./themes/slice/themes.slice";
import UsersReducer from "./users/slice/users.slice";
import PostsReducer from "./posts/slice/posts.slice";

const rootReducer = combineReducers({
  themes: ThemesReducer,
  users: UsersReducer,
  posts: PostsReducer,
});

export const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;