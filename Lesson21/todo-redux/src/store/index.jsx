import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todo.reducers";

const rootReducer = combineReducers({
  todo: todoReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

store.subscribe(() => {
  try {
    const state = store.getState().todo;
    localStorage.setItem("todoState", JSON.stringify(state));
  } catch {
    console.log("Error");
  }
});
