import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserReducer from "./users/users.slice";
import themeReducer from "./themes/themes.slice";

const rootReducer = combineReducers({
  users: UserReducer,
  themes: themeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
