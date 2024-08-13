import { createSlice } from "@reduxjs/toolkit";
import { ITermsAndConditionReducer } from "../../models/ITermsAndConditionReducer";
import { getAllTermsAndConditionResults } from "../actions/termsAndConditions.action";

const initialState: ITermsAndConditionReducer = {
  termsAndConditionResults: "",
  isTermsAndConditionResultsLoading: false,
  termsAndConditionResultsError: "",
};

export const termsAndConditionsSlice = createSlice({
  name: "terms-and-conditions",
  initialState,
  reducers: {
    resetTermsAndConditions: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllTermsAndConditionResults.pending, (state, action) => {
        state.isTermsAndConditionResultsLoading = true;
        state.termsAndConditionResultsError = "";
      })
      .addCase(getAllTermsAndConditionResults.fulfilled, (state, action) => {
        state.termsAndConditionResults = action.payload;
        state.isTermsAndConditionResultsLoading = false;
        state.termsAndConditionResultsError = ""; // Clear previous errors on pending
      })
      .addCase(
        getAllTermsAndConditionResults.rejected,
        (state, action: any) => {
          state.isTermsAndConditionResultsLoading = false;
          state.termsAndConditionResultsError = action?.payload
            ? action?.payload
            : action?.payload?.message
            ? action?.payload?.message
            : "An error occurred";
        }
      );
  },
});

export const { resetTermsAndConditions } = termsAndConditionsSlice.actions;

export default termsAndConditionsSlice.reducer;
