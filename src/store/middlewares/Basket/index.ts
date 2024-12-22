/* eslint-disable @typescript-eslint/no-explicit-any */
import { Middleware } from "@reduxjs/toolkit";

import { addData } from "@src/libs/local storage";

const saveToLocalStorageMiddleware: Middleware =
  (storeAPI) => (next) => (action: any) => {
    const result = next(action);
    if (action.type.startsWith("basket/")) {
      const state = storeAPI.getState();
      addData("basket", state.basket);
    }
    return result;
  };

export { saveToLocalStorageMiddleware };
