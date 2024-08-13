import { createSlice } from "@reduxjs/toolkit";
import { getAllTermsAndConditionResults } from "../actions/termsAndConditions.action";
import { IPrivacyPolicyReducer } from "../../models/IPrivacyPolicyReducer";
import { getPrivacyPolicyResults } from "../actions/privacyPolicy.action";

const initialState: IPrivacyPolicyReducer = {
  privacyPolicyResults: "",
  isPrivacyPolicyResultsLoading: false,
  privacyPolicyResultsError: "",
};

export const privacyPolicySlice = createSlice({
  name: "terms-and-conditions",
  initialState,
  reducers: {
    resetPrivacyPolicy: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPrivacyPolicyResults.pending, (state, action) => {
        state.isPrivacyPolicyResultsLoading = true;
        state.privacyPolicyResultsError = "";
      })
      .addCase(getPrivacyPolicyResults.fulfilled, (state, action) => {
        state.privacyPolicyResults = action.payload;
        state.isPrivacyPolicyResultsLoading = false;
        state.privacyPolicyResultsError = ""; // Clear previous errors on pending
      })
      .addCase(getPrivacyPolicyResults.rejected, (state, action: any) => {
        state.isPrivacyPolicyResultsLoading = false;
        state.privacyPolicyResultsError = action?.payload
          ? action?.payload
          : action?.payload?.message
          ? action?.payload?.message
          : "An error occurred";
      });
  },
});

export const { resetPrivacyPolicy } = privacyPolicySlice.actions;

export default privacyPolicySlice.reducer;
