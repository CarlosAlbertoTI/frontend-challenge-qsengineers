import { createContext, useReducer, ReactNode, Dispatch } from "react";

interface BasketItem {
  id: string;
  name: string;
  price: number;
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
          (item) => item.id === action.payload!.id
        );
        if (existingItem) {
          return {
            ...state,
            items: state.items.map((item) =>
              item.id === action.payload!.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          };
        }
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }
      return state;
    case "REMOVE_ITEM":
      if (action.payload) {
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload!.id),
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
