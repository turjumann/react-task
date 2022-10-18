import { createSlice } from "@reduxjs/toolkit";
export const appSlice = createSlice({
  name: "App",
  initialState: {
    cityInfo: {
      country: "SA",
      city: "Riyadh",
      temp: "NaN",
      lat: 24.774265,
      lng: 46.738586,
    },
    pending: false,
    error: false,
    errorMsg: "",
    exporting: false,
  },
  reducers: {
    updateCityInfo: (state, action) => {
      state.cityInfo = action.payload;
    },
    startApi: (state) => {
      state.pending = true;
      state.error = false;
    },
    apiSuccess: (state) => {
      state.pending = false;
      state.error = false;
    },
    apiError: (state, action) => {
      state.error = true;
      state.pending = false;
      state.errorMsg = action.payload.errorMsg;
    },
    startExporting: (state) => {
      state.exporting = true;
    },
    finishExporting: (state) => {
      state.exporting = false;
    },
  },
});

export const {
  updateCityInfo,
  startApi,
  apiSuccess,
  apiError,
  startExporting,
  finishExporting,
} = appSlice.actions;

export default appSlice.reducer;
