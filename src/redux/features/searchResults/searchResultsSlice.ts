import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface SearchResult {}

const initialState = {
  data: [],
  isSuccess: false,
  status: "failed",
  loading: false,
};

export const getSearchResults = createAsyncThunk(
  "searchResults/getSearchResultsData",
  async (location: string, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/search?location=${location}`
      );
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const searchResultsSlice = createSlice({
  name: "searchResults",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSearchResults.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getSearchResults.fulfilled, (state, action) => {
      state.loading = false;
      state.status = "success";
      state.data = action.payload;
      state.isSuccess = true;
    });

    builder.addCase(getSearchResults.rejected, (state, action) => {
      state.loading = false;
      state.status = "rejected";
      state.isSuccess = false;
    });
  },
});
