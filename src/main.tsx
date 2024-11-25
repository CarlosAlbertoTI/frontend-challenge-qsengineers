import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Dialog, Theme } from "@radix-ui/themes";
import { BrowserRouter } from "react-router";

import "@locales/config.ts";

import "@radix-ui/themes/styles.css";
import "./index.css";


import { AppSettingsProvider } from "@contexts/AppSettings/AppSettingsProvider";
import { ProductsProvider } from "./contexts/Products/ProductsProvider";

import AppRouter from "@routes/routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme>
      <BrowserRouter>
        <AppSettingsProvider>
          <ProductsProvider>
            <Dialog.Root>
              <AppRouter />
            </Dialog.Root>
          </ProductsProvider>
        </AppSettingsProvider>
      </BrowserRouter>
    </Theme>
  </StrictMode>
);
