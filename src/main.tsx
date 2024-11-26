import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Dialog, Theme } from "@radix-ui/themes";
import { BrowserRouter } from "react-router";

import "@locales/config.ts";

import "@radix-ui/themes/styles.css";
import "./index.css";

import { AppSettingsProvider } from "@contexts/AppSettings/AppSettingsProvider";
import { ProductsProvider } from "@contexts/Products/ProductsProvider";
import { BasketProvider } from "@contexts/Basket/BasketProvider";

import AppRouter from "@routes/routes";
import { ProductSelectedProvider } from "./contexts/ProductSelected/ProductSelected";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme>
      <BrowserRouter>
        <AppSettingsProvider>
          <ProductsProvider>
            <BasketProvider>
              <ProductSelectedProvider>
                <Dialog.Root>
                  <AppRouter />
                </Dialog.Root>
              </ProductSelectedProvider>
            </BasketProvider>
          </ProductsProvider>
        </AppSettingsProvider>
      </BrowserRouter>
    </Theme>
  </StrictMode>
);
