import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Dialog, Theme } from "@radix-ui/themes";

import "./index.css";
import "@radix-ui/themes/styles.css";

import "@locales/config.ts";

import MenuScreen from "@screens/Menu/Menu.tsx";

import { AppSettingsProvider } from "@contexts/AppSettings/AppSettingsProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme>
      <AppSettingsProvider>
        <Dialog.Root>
          <MenuScreen />
        </Dialog.Root>
      </AppSettingsProvider>
    </Theme>
  </StrictMode>
);
