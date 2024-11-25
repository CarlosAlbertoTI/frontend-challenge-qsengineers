import React, { createContext, useContext, useState, ReactNode } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  availabilityType: string;
  available: boolean;
  images: { url: string }[];
  position: number;
  sku: string;
  alcoholic: boolean;
}

interface ProductResponse {
  collapse: number;
  id: number;
  name: string;
  sections: Section[];
  type: string;
}

interface Section {
  id: number;
  name: string;
  position: number;
  description: string | null;
  images?: { id: string; image: string }[];
  items: Product[];
  visible: boolean;
}

interface ProductsContextProps {
  products: ProductResponse;
  addProductList: (product: ProductResponse) => void;
}

export const ProductsContext = createContext<ProductsContextProps>({
  products: {} as ProductResponse,
  addProductList: () => {},
});

export const ProductsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<ProductResponse>(
    {} as ProductResponse
  );

  const addProductList = (product: ProductResponse) => {
    setProducts(() => product);
  };

  return (
    <ProductsContext.Provider value={{ products, addProductList }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = (): ProductsContextProps => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
};
