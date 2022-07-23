import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PropertyListing } from "../../types";

export const propertyListingApi = createApi({
  reducerPath: "propertyListingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
  }),
  endpoints: (builder) => ({
    getPropertyListing: builder.query<PropertyListing[], string>({
      query: (location: string) => `search?location=${location}`,
    }),
  }),
});

export const { useGetPropertyListingQuery } = propertyListingApi;
