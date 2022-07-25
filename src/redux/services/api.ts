import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PropertyListing } from "../../types";

export const propertyListingApi = createApi({
  reducerPath: "propertyListingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://realtorlabs-backend.herokuapp.com/",
  }),
  endpoints: (builder) => ({
    getPropertyListing: builder.query<PropertyListing[], string>({
      query: (location: string) => `search?location=${location}`,
    }),
  }),
});

export const { useGetPropertyListingQuery } = propertyListingApi;
