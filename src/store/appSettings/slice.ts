import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppSettingProps } from "./types";

const initialState: AppSettingProps = {
  id: 0,
  name: "",
  internalName: "",
  description: null,
  liveFlag: 0,
  demoFlag: 0,
  address1: "",
  address2: "",
  address3: null,
  city: "",
  county: "",
  postcode: "",
  country: "",
  timezoneOffset: "",
  locale: "",
  timeZone: "",
  webSettings: {
    id: 0,
    venueId: 0,
    bannerImage: "",
    backgroundColour: "",
    primaryColour: "",
    primaryColourHover: "",
    navBackgroundColour: "",
  },
  ccy: "",
  ccySymbol: "",
  currency: "",
};

const appSettingsSlice = createSlice({
  name: "appSettings",
  initialState,
  reducers: {
    setAppSettingsValue(_, action: PayloadAction<AppSettingProps>) {
      return action.payload;
    },
  },
});

export const { setAppSettingsValue } = appSettingsSlice.actions;
export default appSettingsSlice.reducer;
