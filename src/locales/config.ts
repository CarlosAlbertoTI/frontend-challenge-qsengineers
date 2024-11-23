import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./translations/en-US.json";
import pt from "./translations/pt-BR.json";

const resources = {
  ["pt-BR"]: pt,
  ["en-US"]: en,
  ["en"]: en,
  ["pt-US"]: pt,
};

i18n

  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    compatibilityJSON: "v4",
    resources,
    lng: "en", // default language to use.
  });

export default { i18n };
