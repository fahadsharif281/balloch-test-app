import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUsersScreenTypesApiCall } from "../../services/general.services";

export const getScreenTypes = createAsyncThunk(
  "screenTypes/getScreenTypes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllUsersScreenTypesApiCall();
      return response?.data?.result;
    } catch (error: any) {
      return rejectWithValue(error); // Assuming the error is in error
    }
  }
);
