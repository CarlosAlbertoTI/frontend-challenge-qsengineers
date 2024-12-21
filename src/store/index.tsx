// store.ts
import { configureStore } from "@reduxjs/toolkit";
import { appSettings } from "./appSettings";

import { menu } from "./menu";
import { basket } from "./bag";
import { productSelectedSlice } from "./selectedItem";

import { saveToLocalStorageMiddleware } from "./middlewares/Basket";

const store = configureStore({
  reducer: {
    webSettings: appSettings,
    menu: menu,
    basket: basket,
    selectedProduct: productSelectedSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveToLocalStorageMiddleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
