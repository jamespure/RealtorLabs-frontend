import { configureStore } from "@reduxjs/toolkit";
import { searchResultsSlice } from "./features/searchResults/searchResultsSlice";

export const store = configureStore({
  reducer: {
    searchResults: searchResultsSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
