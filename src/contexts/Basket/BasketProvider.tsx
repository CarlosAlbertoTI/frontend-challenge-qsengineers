import { createContext, useReducer, ReactNode, Dispatch } from "react";
import { Product } from "../Products/ProductsProvider";

interface BasketItem {
  product: Product;
  quantity: number;
}

interface BasketState {
  items: BasketItem[];
}

interface BasketAction {
  type: "ADD_ITEM" | "REMOVE_ITEM" | "CLEAR_BASKET";
  payload?: BasketItem;
}

const initialState: BasketState = {
  items: [],
};

const BasketContext = createContext<{
  state: BasketState;
  dispatch: Dispatch<BasketAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

const basketReducer = (
  state: BasketState,
  action: BasketAction
): BasketState => {
  switch (action.type) {
    case "ADD_ITEM":
      if (action.payload) {
        const existingItem = state.items.find(
          ({ product }) => product.id === action.payload!.product.id
        );
        if (existingItem) {
          return {
            ...state,
            items: state.items.map((item) =>
              item.product.id === action.payload!.product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          };
        }
        return {
          ...state,
          items: [
            ...state.items,
            {
              ...action.payload,
              quantity:
                action.payload.quantity > 1 ? action.payload.quantity : 1,
            },
          ],
        };
      }
      return state;
    case "REMOVE_ITEM":
      if (action.payload) {
        const existingItem = state.items.find(
          ({ product }) => product.id === action.payload!.product.id
        );
        if (existingItem && existingItem.quantity > 1) {
          return {
            ...state,
            items: state.items.map((item) =>
              item.product.id === action.payload!.product.id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          };
        }
        return {
          ...state,
          items: state.items.filter(
            ({ product }) => product.id !== action.payload!.product.id
          ),
        };
      }
      return state;
    case "CLEAR_BASKET":
      return initialState;
    default:
      return state;
  }
};

const BasketProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(basketReducer, initialState);

  return (
    <BasketContext.Provider value={{ state, dispatch }}>
      {children}
    </BasketContext.Provider>
  );
};

export { BasketProvider, BasketContext };
