import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllLocationsByTypeApiCall } from "../../services/general.services";

export const getAllLocationsByType = createAsyncThunk<any, any>(
  "user/getAllLocationsByType",
  async (params, { rejectWithValue }) => {
    const { type } = params;
    try {
      const response = await getAllLocationsByTypeApiCall(type); // Assuming fetchUser Routes returns a Promise
      return response?.data?.result?.reverse();
      // Assuming the location data is in response.data
    } catch (error: any) {
      return rejectWithValue(error); // Assuming the user data is in response.data
    }
  }
);
