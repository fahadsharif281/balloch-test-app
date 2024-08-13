import { createSlice } from "@reduxjs/toolkit";
import { IDashboardReducer } from "../../models/IDashboardRedcuer";
import { getAllMapLocations } from "../actions/dashboard.action";

const initialState: IDashboardReducer = {
  allMapLocations: "",
  isMapLocationLoading: false,
  mapLocationError: "",
  allUsers: "",
  walkingRouteCount: 0,
  dogWalkCount: 0,
  toiletCount: 0,
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setAllUsers: (state, action) => {
      state.allUsers = action.payload;
    },
    setWalkingRoute: (state, action) => {
      state.walkingRouteCount = action.payload;
    },
    setDogWalk: (state, action) => {
      state.dogWalkCount = action.payload;
    },
    setTotalToilet: (state, action) => {
      state.toiletCount = action.payload;
    },
    resetDashboard: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllMapLocations.pending, (state, action) => {
        state.isMapLocationLoading = true;
        state.mapLocationError = "";
      })
      .addCase(getAllMapLocations.fulfilled, (state, action) => {
        state.allMapLocations = action.payload;
        state.isMapLocationLoading = false;
        state.mapLocationError = ""; // Clear previous errors on pending
      })
      .addCase(getAllMapLocations.rejected, (state, action: any) => {
        state.isMapLocationLoading = false;
        state.mapLocationError = action?.payload
          ? action?.payload
          : action?.payload?.message
          ? action?.payload?.message
          : "An error occurred";
      });
  },
});

export const {
  resetDashboard,
  setAllUsers,
  setDogWalk,
  setTotalToilet,
  setWalkingRoute,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
