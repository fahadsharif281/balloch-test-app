import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllRoutesOfSideBar } from "../../services/general.services";

export const getAllUserRoutes = createAsyncThunk<any>(
  "user/getAllUserRoutes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllRoutesOfSideBar(); // Assuming fetchUser Routes returns a Promise
      return response?.data;
      // Assuming the user data is in response.data
    } catch (error: any) {
      return rejectWithValue(error); // Assuming the user data is in response.data
    }
  }
);
