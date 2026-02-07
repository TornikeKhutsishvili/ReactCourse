import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserReducer from "./users/users.slice";
import ThemeReducer from "./themes/themes.slice";

const rootReducer = combineReducers({
  users: UserReducer,
  themes: ThemeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
