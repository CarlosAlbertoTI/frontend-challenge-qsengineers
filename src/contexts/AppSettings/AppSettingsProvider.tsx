import React, { createContext, useState, ReactNode } from "react";

interface WebSettings {
  id: number;
  venueId: number;
  bannerImage: string;
  backgroundColour: string;
  primaryColour: string;
  primaryColourHover: string;
  navBackgroundColour: string;
}

interface AppSettingProps {
  id: number;
  name: string;
  internalName: string;
  description: string | null;
  liveFlag: number;
  demoFlag: number;
  address1: string;
  address2: string;
  address3: string | null;
  city: string;
  county: string;
  postcode: string;
  country: string;
  timezoneOffset: string;
  locale: string;
  timeZone: string;
  webSettings: WebSettings;
  ccy: string;
  ccySymbol: string;
  currency: string;
}

interface AppSettingsContextProps {
  setting: AppSettingProps;
  setSetting: (newSettings: AppSettingProps) => void;
}

export const AppSettingsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [settings, setSettings] = useState<AppSettingProps | {}>({});

  return (
    <AppSettingsContext.Provider
      value={{ setting: settings as AppSettingProps, setSetting: setSettings }}
    >
      {children}
    </AppSettingsContext.Provider>
  );
};

export const AppSettingsContext = createContext<AppSettingsContextProps>({
  setting: {
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
  },
  setSetting: () => {},
});
