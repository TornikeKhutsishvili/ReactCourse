import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
//   [breweriesApi.reducerPath]: breweriesApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
//   middleware: (GetDefaultMiddleware) =>
//     GetDefaultMiddleware().concat(breweriesApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;