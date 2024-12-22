import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Modifier, Product } from "../menu/types";
import { calculateFullPrice } from "@src/utils/calculateFullPriceOfProduct";

interface InitialState {
  selectedProduct: Product | null;
  finalPrice: number;
  amountOfSelectedProduct: number;
  amountOfModifiersSelected: number;
  modifierListOfSelectedProduct: Modifier[];
}

const initialState: InitialState = {
  selectedProduct: null,
  finalPrice: 0,
  amountOfSelectedProduct: 0,
  amountOfModifiersSelected: 0,
  modifierListOfSelectedProduct: [],
};

const productSelectedSlice = createSlice({
  name: "productSelected",
  initialState,
  reducers: {
    setSelectedProduct(state, action: PayloadAction<Product>) {
      const newModifierList = action.payload?.modifiers ?? [];
      state.selectedProduct = { ...action.payload, modifiers: [] };

      state.modifierListOfSelectedProduct =
        newModifierList.length == 0
          ? []
          : newModifierList.map((modifier) => {
              return {
                ...modifier,
                items: modifier.items.map((item) => ({ ...item, quantity: 0 })),
              };
            });
      state.amountOfSelectedProduct = 1;
      if (newModifierList.length > 0) {
        state.finalPrice = calculateFullPrice(
          action.payload,
          newModifierList || [],
          1
        );
      } else {
        state.finalPrice = action.payload.price;
      }
    },

    changeAmountOfSelectProduct(state, action: PayloadAction<number>) {
      if (action.payload > 0) {
        state.amountOfSelectedProduct = action.payload;
      }
      if (state.selectedProduct) {
        state.finalPrice = calculateFullPrice(
          state.selectedProduct,
          state.modifierListOfSelectedProduct || [],
          state.amountOfSelectedProduct
        );
      }
    },
    resetSelectedProduct(state) {
      state.selectedProduct = null;
      state.amountOfSelectedProduct = 0;
      state.modifierListOfSelectedProduct = [];
    },
    addOrRemoveModifierItem(
      state,
      action: PayloadAction<{ modifierId: number; modifierItemId: number }>
    ) {
      const { modifierId, modifierItemId } = action.payload;
      const modifier = state.modifierListOfSelectedProduct?.find(
        (mod) => mod.id === modifierId
      );
      if (!modifier) {
        return;
      }
      const newModifierValue = modifier.items.find(
        (item) => item.id === modifierItemId
      );
      if (!newModifierValue) {
        return;
      }
      state.finalPrice = 0
      state.modifierListOfSelectedProduct =
        state.modifierListOfSelectedProduct.map((item) => {
          return {
            ...item,
            items: item.items.map((itemMap) => {
              if (itemMap.id === modifierItemId) {
                return { ...itemMap, quantity: (itemMap.quantity ?? 0) + 1 };
              } else {
                return {
                  ...itemMap,
                  quantity: item.maxChoices > 1 ? itemMap.quantity ?? 0 - 1 : 0,
                };
              }
            }),
          };
        });

      state.amountOfModifiersSelected = state.amountOfModifiersSelected + 1;
      if (state.selectedProduct) {
        state.finalPrice = calculateFullPrice(
          state.selectedProduct,
          state.modifierListOfSelectedProduct || [],
          state.amountOfSelectedProduct
        );
      }
    },
    addOrRemoveModifierItemsQuantity(
      state,
      action: PayloadAction<{ id: number; qty: number }>
    ) {
      const { id, qty } = action.payload;
      const index = state.modifierListOfSelectedProduct.findIndex(
        (item) => item.id === id
      );
      if (index !== -1) {
        state.modifierListOfSelectedProduct[index].items = state.modifierListOfSelectedProduct[index].items.map(item => ({
          ...item,
          quantity: qty
        }));
      }
    },
  },
});

export const {
  setSelectedProduct,
  changeAmountOfSelectProduct,
  resetSelectedProduct,
  addOrRemoveModifierItem,
  addOrRemoveModifierItemsQuantity,
} = productSelectedSlice.actions;
export default productSelectedSlice.reducer;
