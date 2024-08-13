import { createSlice } from "@reduxjs/toolkit";
import { IAboutUsReducer } from "../../models/IAboutUsReducer";
import { getAllDataAboutUs } from "../actions/aboutUs.action";

const initialState: IAboutUsReducer = {
  aboutUsResults: "",
  isAboutUsResultsLoading: false,
  aboutUsResultsError: "",
};

export const aboutUsSlice = createSlice({
  name: "about-us",
  initialState,
  reducers: {
    resetAboutUs: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllDataAboutUs.pending, (state, action) => {
        state.isAboutUsResultsLoading = true;
        state.aboutUsResultsError = "";
      })
      .addCase(getAllDataAboutUs.fulfilled, (state, action) => {
        state.aboutUsResults = action.payload;
        state.isAboutUsResultsLoading = false;
        state.aboutUsResultsError = ""; // Clear previous errors on pending
      })
      .addCase(getAllDataAboutUs.rejected, (state, action: any) => {
        state.isAboutUsResultsLoading = false;
        state.aboutUsResultsError = action?.payload
          ? action?.payload
          : action?.payload?.message
          ? action?.payload?.message
          : "An error occurred";
      });
  },
});

export const { resetAboutUs } = aboutUsSlice.actions;

export default aboutUsSlice.reducer;
