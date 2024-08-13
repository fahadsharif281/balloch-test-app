import { createSlice } from "@reduxjs/toolkit";
import { getAllDataAboutUs } from "../actions/aboutUs.action";
import { IWebContentReducer } from "../../models/IWebContentReducer";
import {
  getAllContentCard,
  getWebPageContents,
} from "../actions/webContent.action";

const initialState: IWebContentReducer = {
  contentCards: "",
  isContentCardsLoading: false,
  contentCardError: "",
  webContentResult: "",
  isWebContentLoading: false,
  webContentResultError: "",
};

export const webContentSlice = createSlice({
  name: "about-us",
  initialState,
  reducers: {
    resetWebContent: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllContentCard.pending, (state, action) => {
        state.isContentCardsLoading = true;
        state.contentCardError = "";
      })
      .addCase(getAllContentCard.fulfilled, (state, action) => {
        state.contentCards = action.payload;
        state.isContentCardsLoading = false;
        state.contentCardError = ""; // Clear previous errors on pending
      })
      .addCase(getAllContentCard.rejected, (state, action: any) => {
        state.isContentCardsLoading = false;
        state.contentCardError = action?.payload
          ? action?.payload
          : action?.payload?.message
          ? action?.payload?.message
          : "An error occurred";
      })
      .addCase(getWebPageContents.pending, (state, action) => {
        state.isWebContentLoading = true;
        state.webContentResultError = "";
      })
      .addCase(getWebPageContents.fulfilled, (state, action) => {
        state.webContentResult = action.payload;
        state.isWebContentLoading = false;
        state.webContentResultError = ""; // Clear previous errors on pending
      })
      .addCase(getWebPageContents.rejected, (state, action: any) => {
        state.isWebContentLoading = false;
        state.webContentResultError = action?.payload
          ? action?.payload
          : action?.payload?.message
          ? action?.payload?.message
          : "An error occurred";
      });
  },
});

export const { resetWebContent } = webContentSlice.actions;

export default webContentSlice.reducer;
