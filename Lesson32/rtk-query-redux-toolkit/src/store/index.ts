import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { breweriesApi, detailsBreweryApi, randomBreweriesApi } from "./beers/breweries.api";

const rootReducer = combineReducers({
  [breweriesApi.reducerPath]: breweriesApi.reducer,
  [detailsBreweryApi.reducerPath]: detailsBreweryApi.reducer,
  [randomBreweriesApi.reducerPath]: randomBreweriesApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (GetDefaultMiddleware) =>
    GetDefaultMiddleware()
      .concat(breweriesApi.middleware)
      .concat(detailsBreweryApi.middleware)
      .concat(randomBreweriesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;