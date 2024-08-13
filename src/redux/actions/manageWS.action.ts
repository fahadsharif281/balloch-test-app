import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getManageWelcomeScreenContactDetailApiCall,
  getManageWelcomeScreenTitlesApiCall,
} from "../../services/general.services";

export const getManageWelcomeScreenTitles = createAsyncThunk(
  "manageWelcomeScreen/getManageWelcomeScreenTitles",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getManageWelcomeScreenTitlesApiCall();
      return response?.data?.result[0];
    } catch (error: any) {
      return rejectWithValue(error); // Assuming the error is in error
    }
  }
);

export const getManageWelcomeContactDetails = createAsyncThunk(
  "manageWelcomeScreen/getManageWelcomeContactDetails",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getManageWelcomeScreenContactDetailApiCall();
      return response?.data?.result[0]?.contactNumber;
    } catch (error: any) {
      return rejectWithValue(error); // Assuming the error is in error
    }
  }
);
