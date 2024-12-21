import { Action, Middleware } from "@reduxjs/toolkit";

import { addData } from "@src/libs/local storage";

const saveToLocalStorageMiddleware: Middleware =
  (storeAPI) => (next) => (action: Action) => {
    const result = next(action);
    if (action.type.startsWith("basket/")) {
      const state = storeAPI.getState();
      addData("basket", state.basket);
    }
    return result;
  };

export { saveToLocalStorageMiddleware };
