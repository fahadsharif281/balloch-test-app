import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTermsAndConditionsApiCall } from "../../services/general.services";

export const getAllTermsAndConditionResults = createAsyncThunk(
  "terms-and-condition/getAllTermsAndConditionResults",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getTermsAndConditionsApiCall();
      return response?.data?.result;
    } catch (error: any) {
      return rejectWithValue(error); // Assuming the error is in error
    }
  }
);
