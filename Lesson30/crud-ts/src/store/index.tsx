import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserReducer from "./users/slice/users.slice";
import ThemeReducer from "./themes/slice/themes.slice";

const rootReducer = combineReducers({
  users: UserReducer,
  themes: ThemeReducer,
});

export const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;