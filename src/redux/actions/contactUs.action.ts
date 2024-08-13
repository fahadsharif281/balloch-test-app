import { createAsyncThunk } from "@reduxjs/toolkit";
import { getContactUsDataApiCall } from "../../services/general.services";

export const getAllDataContactUs = createAsyncThunk(
  "user/getAllDataContactUs",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getContactUsDataApiCall();
      return response?.data?.result?.reverse();
    } catch (error: any) {
      return rejectWithValue(error); // Assuming the error is in error
    }
  }
);
