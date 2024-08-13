import { createSlice } from "@reduxjs/toolkit";
import { IManageWSReducer } from "../../models/IManageWSReducer";
import {
  getManageWelcomeContactDetails,
  getManageWelcomeScreenTitles,
} from "../actions/manageWS.action";

const initialState: IManageWSReducer = {
  results: "",
  isTitlesLoading: false,
  resultError: "",
  contactNumber: "",
  isContactNoLoading: false,
  contactNoError: "",
};

export const manageWelcomeScreenSlice = createSlice({
  name: "manage-welcome-screen",
  initialState,
  reducers: {
    resetManageWelcomeScreen: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getManageWelcomeScreenTitles.pending, (state, action) => {
        state.isTitlesLoading = true;
        state.resultError = "";
      })
      .addCase(getManageWelcomeScreenTitles.fulfilled, (state, action) => {
        state.results = action.payload;
        state.isTitlesLoading = false;
        state.resultError = ""; // Clear previous errors on pending
      })
      .addCase(getManageWelcomeScreenTitles.rejected, (state, action: any) => {
        state.isTitlesLoading = false;
        state.resultError = action?.payload
          ? action?.payload
          : action?.payload?.message
          ? action?.payload?.message
          : "An error occurred";
      })
      .addCase(getManageWelcomeContactDetails.pending, (state, action) => {
        state.isContactNoLoading = true;
        state.contactNoError = "";
      })
      .addCase(getManageWelcomeContactDetails.fulfilled, (state, action) => {
        state.contactNumber = action.payload;
        state.isContactNoLoading = false;
        state.contactNoError = "";
      })
      .addCase(
        getManageWelcomeContactDetails.rejected,
        (state, action: any) => {
          state.isContactNoLoading = false;
          state.contactNoError = action?.payload
            ? action?.payload
            : action?.payload?.message
            ? action?.payload?.message
            : "An error occurred";
        }
      );
  },
});

export const { resetManageWelcomeScreen } = manageWelcomeScreenSlice.actions;

export default manageWelcomeScreenSlice.reducer;
