import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authQueryApi } from "./authQueryApi";

const rootReducer = combineReducers({
  authQueryApi: authQueryApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware({
  //       serializableCheck: false,
  //     }),
});
