import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Dialog, Theme } from "@radix-ui/themes";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";

import "@radix-ui/themes/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css";

import "@locales/config.ts";

import store from "@store/index";

import AppRouter from "@routes/routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme>
      <BrowserRouter>
        <Dialog.Root>
          <Provider store={store}>
            <AppRouter />
          </Provider>
        </Dialog.Root>
      </BrowserRouter>
    </Theme>
  </StrictMode>
);
