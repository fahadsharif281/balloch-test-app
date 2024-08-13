import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllMapLocationsAPICall } from "../../services/general.services";

export const getAllMapLocations = createAsyncThunk(
  "user/getAllMapLocations",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllMapLocationsAPICall(); // Assuming fetchUser Routes returns a Promise
      return response?.data?.data;
      // Assuming the location data is in response.data
    } catch (error: any) {
      return rejectWithValue(error); // Assuming the error is in error
    }
  }
);
