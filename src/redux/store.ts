import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { propertyListingApi } from "./services/api";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(propertyListingApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
