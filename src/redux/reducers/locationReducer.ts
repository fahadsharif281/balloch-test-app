import { createSlice } from "@reduxjs/toolkit";
import { ILoactionReducer } from "../../models/ILocationReducer";
import { getAllLocationsByType } from "../actions/locations.action";

const initialState: ILoactionReducer = {
  allLocations: "",
  isLoading: false,
  error: "",
  longitude: "",
  latitude: "",
  selectedLocation: "",
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLongitude: (state, action) => {
      state.longitude = action.payload;
    },
    setLatitude: (state, action) => {
      state.latitude = action.payload;
    },
    setSelectedLocation: (state, action) => {
      state.selectedLocation = action.payload;
    },
    resetLocation: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllLocationsByType.pending, (state) => {
        state.isLoading = true;
        state.error = ""; // Clear previous errors on pending
      })
      .addCase(getAllLocationsByType.fulfilled, (state, action) => {
        state.allLocations = action.payload;
        state.isLoading = false;
        state.error = ""; // Clear previous errors on pending
      })
      .addCase(getAllLocationsByType.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = action?.payload
          ? action?.payload
          : action?.payload?.message
          ? action?.payload?.message
          : "An error occurred";
      });
  },
});

export const { resetLocation, setLatitude, setLongitude, setSelectedLocation } =
  locationSlice.actions;

export default locationSlice.reducer;
