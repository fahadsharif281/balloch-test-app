import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPrivacyPolicyApiCall } from "../../services/general.services";

export const getPrivacyPolicyResults = createAsyncThunk(
  "privacyPolicy/getPrivacyPolicyResults",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getPrivacyPolicyApiCall();
      return response?.data?.result;
    } catch (error: any) {
      return rejectWithValue(error); // Assuming the error is in error
    }
  }
);
