// exampleSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductResponse } from "@src/store/menu/types";

const initialState: ProductResponse = {
  collapse: 0,
  id: 0,
  name: "",
  sections: [],
  type: "",
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenuValue(_, action: PayloadAction<ProductResponse>) {
      return action.payload;
    },
  },
});

export const { setMenuValue } = menuSlice.actions;
export default menuSlice.reducer;
