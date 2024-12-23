import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Dialog, Theme } from "@radix-ui/themes";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";

import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@radix-ui/themes/styles.css";

import "@locales/config.ts";

import { queryClient } from "@libs/react-query";

import store from "@store/index";

import theme from "@theme/theme";

import AppRouter from "@routes/routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Provider store={store}>
              <Dialog.Root>
                <AppRouter />
              </Dialog.Root>
            </Provider>
          </BrowserRouter>
        </QueryClientProvider>
      </ThemeProvider>
    </Theme>
  </StrictMode>
);
