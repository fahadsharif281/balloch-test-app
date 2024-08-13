import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllContentCardApiCall,
  getWebPageContentApiCall,
} from "../../services/general.services";

export const getAllContentCard = createAsyncThunk(
  "webContent/getAllContentCard",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllContentCardApiCall();
      return response?.data?.result;
    } catch (error: any) {
      return rejectWithValue(error); // Assuming the error is in error
    }
  }
);

export const getWebPageContents = createAsyncThunk(
  "webContent/getWebPageContents",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getWebPageContentApiCall();
      return response?.data?.result;
    } catch (error: any) {
      return rejectWithValue(error); // Assuming the error is in error
    }
  }
);
