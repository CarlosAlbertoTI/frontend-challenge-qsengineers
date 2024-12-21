// exampleSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BasketItem, BasketState } from "./types";
import { calculateFullPrice } from "@src/utils/calculateFullPriceOfProduct";

const initialState: BasketState = {
  items: [],
  subtotal: 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setBasket(state, action: PayloadAction<BasketState>) {
      state.items = action.payload.items;
      state.subtotal = action.payload.subtotal;
    },

    addItemToBasket(state, action: PayloadAction<BasketItem>) {
      if (action.payload) {
        const {
          id,
          quantity,
          product,
          modifiers: allModifiers,
        } = action.payload;

        const modifiers = allModifiers?.map((modifier) => ({
          ...modifier,
          items: modifier.items?.filter(
            (item) => item.quantity && item.quantity > 0
          ),
        }));

        let updatedItems;
        if (id) {
          //? Payload has id, not see if exist
          const existingItem = state.items.find((item) => item.id === id);
          if (existingItem) {
            //? If exist on backet, then just add the quantity
            updatedItems = state.items.map((item) =>
              item.id === id
                ? {
                    ...item,
                    modifiers: modifiers,
                    quantity: quantity,
                    fullPrice: calculateFullPrice(
                      item.product,
                      modifiers || [],
                      quantity
                    ),
                  }
                : item
            );
          } else {
            //? If not, then just add the product
            updatedItems = [
              ...state.items,
              {
                ...action.payload,
                fullPrice: calculateFullPrice(
                  product,
                  modifiers || [],
                  quantity
                ),
                id: Math.floor(Math.random() * 1000),
                quantity: quantity > 1 ? quantity : 1,
                modifiers: modifiers,
              },
            ];
          }
        } else {
          //? Payload doest have any id,

          const existingItem = state.items.filter(
            (item) => item.product.id === product.id
          );
          //? Check if there ane any product with the same id

          if (existingItem.length >= 1) {
            //? Check if there is any modifier
            if ((modifiers?.length ?? 0) > 0) {
              //? If there is at least one modifier, then try to find the modifier

              //? Get the list of modifiersItemId of modifiers of the new product
              const modifiersOfPayloadProduct = modifiers?.flatMap(
                (modifier) => modifier.items?.map((item) => item.id) || []
              );

              let isModifierExist;

              for (const existingItemSearch of existingItem) {
                //? the list of modifiersItemId of modifiers of the state that has the same product Id
                const existingModifierItems =
                  existingItemSearch.modifiers?.flatMap(
                    (modifier) => modifier.items?.map((item) => item.id) || []
                  );

                //? Try to find id there is a product that has the exact same modifiers as the new product
                if (
                  JSON.stringify(modifiersOfPayloadProduct) ===
                  JSON.stringify(existingModifierItems)
                ) {
                  isModifierExist = existingItemSearch.id;
                  break;
                }
              }
              //? Check if exist or not
              if (isModifierExist) {
                //? If exist them add a quantity to the product
                updatedItems = state.items.map((item) => {
                  if (item.id == isModifierExist) {
                    return {
                      ...item,
                      quantity: item.quantity + quantity,
                      fullPrice: calculateFullPrice(
                        item.product,
                        modifiers || [],
                        item.quantity + quantity
                      ),
                    };
                  }
                  return item;
                });
              } else {
                updatedItems = [
                  ...state.items,
                  {
                    ...action.payload,
                    modifiers: modifiers,
                    fullPrice: calculateFullPrice(
                      product,
                      modifiers || [],
                      quantity
                    ),
                    id: Math.floor(Math.random() * 1000),
                    quantity: quantity > 1 ? quantity : 1,
                  },
                ];
              }
            } else {
              //
              //? If not exist them find the product with the same id and add quantity
              updatedItems = state.items.map((item) => {
                if (item.product.id == product.id) {
                  return {
                    ...item,
                    quantity: quantity,
                    modifiers: modifiers,
                    fullPrice: calculateFullPrice(
                      item.product,
                      modifiers || [],
                      quantity
                    ),
                  };
                } else {
                  return item;
                }
              });
            }
          } else {
            //? If there isn't, then just add the product

            updatedItems = [
              ...state.items,
              {
                ...action.payload,
                modifiers: modifiers,
                fullPrice: calculateFullPrice(
                  product,
                  modifiers || [],
                  quantity
                ),
                id: Math.floor(Math.random() * 1000),
                quantity: quantity > 1 ? quantity : 1,
              },
            ];
          }
        }

        const updatedSubtotal = updatedItems.reduce(
          (sum, item) => sum + (item.fullPrice || 0),
          0
        );
        return {
          ...state,
          items: updatedItems,
          subtotal: updatedSubtotal,
        };
      }
      return state;
    },

    removeItemFromBasket(state, action: PayloadAction<BasketItem>) {
      if (action.payload) {
        const { id, modifiers } = action.payload;

        if (id) {
          const existingItem = state.items.find((item) => item.id === id);

          let updatedItems;

          if (existingItem && existingItem.quantity > 1) {
            updatedItems = state.items.map((item) =>
              item.id === action.payload!.id
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                    fullPrice: calculateFullPrice(
                      item.product,
                      modifiers || [],
                      item.quantity - 1
                    ),
                  }
                : item
            );
          } else {
            updatedItems = state.items.filter(
              ({ id }) => id !== action.payload!.id
            );
          }

          const updatedSubtotal = updatedItems.reduce(
            (sum, item) => sum + (item.fullPrice || 0),
            0
          );
          return {
            ...state,
            items: updatedItems,
            subtotal: updatedSubtotal,
          };
        }
      }
      return state;
    },

    clearBasket() {
      return initialState;
    },
  },
});

export const { setBasket, addItemToBasket, removeItemFromBasket, clearBasket } =
  basketSlice.actions;
export default basketSlice.reducer;
