import { createSlice } from "@reduxjs/toolkit";
import { IContactUsReducer } from "../../models/IContactUsReducer";
import { getAllDataContactUs } from "../actions/contactUs.action";

const initialState: IContactUsReducer = {
  results: "",
  isResultsLoading: false,
  resultError: "",
};

export const contactUsSlice = createSlice({
  name: "contact-us",
  initialState,
  reducers: {
    resetContactUs: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllDataContactUs.pending, (state, action) => {
        state.isResultsLoading = true;
        state.resultError = "";
      })
      .addCase(getAllDataContactUs.fulfilled, (state, action) => {
        state.results = action.payload;
        state.isResultsLoading = false;
        state.resultError = ""; // Clear previous errors on pending
      })
      .addCase(getAllDataContactUs.rejected, (state, action: any) => {
        state.isResultsLoading = false;
        state.resultError = action?.payload
          ? action?.payload
          : action?.payload?.message
          ? action?.payload?.message
          : "An error occurred";
      });
  },
});

export const { resetContactUs } = contactUsSlice.actions;

export default contactUsSlice.reducer;
