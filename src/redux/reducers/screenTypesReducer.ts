import { createSlice } from "@reduxjs/toolkit";
import { IScreenTypesReducer } from "../../models/IScreenTypesReducer";
import { getScreenTypes } from "../actions/screenTypes.action";

const initialState: IScreenTypesReducer = {
  allUsers: "",
  isUsersLoading: false,
  allUsersError: "",
};

export const screenTypesSlice = createSlice({
  name: "screen-types",
  initialState,
  reducers: {
    resetScreenTypes: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getScreenTypes.pending, (state, action) => {
        state.isUsersLoading = true;
        state.allUsersError = "";
      })
      .addCase(getScreenTypes.fulfilled, (state, action) => {
        state.allUsers = action.payload;
        state.isUsersLoading = false;
        state.allUsersError = ""; // Clear previous errors on pending
      })
      .addCase(getScreenTypes.rejected, (state, action: any) => {
        state.isUsersLoading = false;
        state.allUsersError = action?.payload
          ? action?.payload
          : action?.payload?.message
          ? action?.payload?.message
          : "An error occurred";
      });
  },
});

export const { resetScreenTypes } = screenTypesSlice.actions;

export default screenTypesSlice.reducer;
