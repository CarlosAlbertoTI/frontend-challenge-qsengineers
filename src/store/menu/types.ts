export interface ModifierItems {
  id: number;
  name: string;
  price: number;
  maxChoices: number;
  position: number;
  visible: number;
  availabilityType: string;
  available: boolean;
  qty?: number;
  quantity?: number;
}
export interface Modifier {
  id: number;
  name: string;
  minChoices: number;
  maxChoices: number;
  items: ModifierItems[];
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
  availabilityType: string;
  available: boolean;
  modifiers?: Modifier[];
  images?: {
    image: string;
    id: number;
  }[];
  position: number;
  sku?: string;
  alcoholic: 0 | 1;
  visible?: 0 | 1;
}

export interface Section {
  id: number;
  name: string;
  position: number;
  description?: string | null;
  images?: { id: number; image: string }[];
  items: Product[];
  visible?: 0 | 1;
}

export interface ProductResponse {
  collapse: number;
  id: number;
  name: string;
  sections: Section[];
  type: string;
}
