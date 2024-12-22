import { Modifier, Product } from "../menu/types";

export interface BasketItem {
  id?: number;
  product: Product;
  modifiers?: Modifier[];
  fullPrice?: number;
  quantity: number;
}

export interface BasketState {
  items: BasketItem[];
  subtotal: number;
  instructions: string;
}
