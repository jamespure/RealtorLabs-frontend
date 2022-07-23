import { combineReducers } from "@reduxjs/toolkit";
import { propertyListingApi } from "./services/api";
const rootReducer = combineReducers({
  [propertyListingApi.reducerPath]: propertyListingApi.reducer,
});

export default rootReducer;
