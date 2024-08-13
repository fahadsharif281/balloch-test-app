import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAboutUsResultsApiCall } from "../../services/general.services";

export const getAllDataAboutUs = createAsyncThunk(
  "aboutUs/getAllDataAboutUs",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAboutUsResultsApiCall();
      return response?.data?.result;
    } catch (error: any) {
      return rejectWithValue(error); // Assuming the error is in error
    }
  }
);
