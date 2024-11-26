import React, { createContext, useState, ReactNode } from "react";
import { Product } from "../Products/ProductsProvider";

interface ProductSelectedContextProps {
  selectedProduct: Product;
  amountOfSelectedProduct: number;
  setSelectedProduct: React.Dispatch<React.SetStateAction<Product>>;
  changeAmountOfSelectProduct: (newValue: number) => void;
  resetSelectedProduct: () => void;
}

export const ProductSelectedContext =
  createContext<ProductSelectedContextProps>({} as ProductSelectedContextProps);

export const ProductSelectedProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<Product>(
    {} as Product
  );
  const [amountOfSelectedProduct, setAmountOfSelectedProduct] =
    useState<number>(0);

  const changeAmountOfSelectProduct = (newValue: number) => {
    if (newValue > 0) {
      setAmountOfSelectedProduct(newValue);
    }
  };

  const resetSelectedProduct = () => {
    setSelectedProduct({} as Product);
    setAmountOfSelectedProduct(1);
  };

  return (
    <ProductSelectedContext.Provider
      value={{
        selectedProduct,
        amountOfSelectedProduct,
        changeAmountOfSelectProduct,
        setSelectedProduct,
        resetSelectedProduct,
      }}
    >
      {children}
    </ProductSelectedContext.Provider>
  );
};
