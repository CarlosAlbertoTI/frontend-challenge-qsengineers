import React, { useContext, useEffect } from "react";
import { Box, Dialog, VisuallyHidden } from "@radix-ui/themes";
import { IoCloseCircleSharp } from "react-icons/io5";

import { ProductSelectedContext } from "@contexts/ProductSelected/ProductSelected";
import { BasketContext } from "@contexts/Basket/BasketProvider";

import ProductModalContent from "./ProductModal/ProductModalContent";
import CustomButtom from "../CustomButton/CustomButton";
import MinusOrAdd from "../MinusOrAdd/MinusOrAdd";

const ProductModal: React.FC = () => {
  const {
    selectedProduct,
    amountOfSelectedProduct,
    changeAmountOfSelectProduct,
    resetSelectedProduct,
  } = useContext(ProductSelectedContext);
  const { dispatch } = useContext(BasketContext);

  const handlePlusAmountOfSelectedProduct = () =>
    changeAmountOfSelectProduct(amountOfSelectedProduct + 1);
  const handleMinusAmountOfSelectedProduct = () => {
    changeAmountOfSelectProduct(amountOfSelectedProduct - 1);
  };

  return (
    <Box
      maxWidth="100%"
      width={{ initial: "100vw", md: "70%" }}
      height="100%"
      maxHeight="100%"
    >
      <Dialog.Content
        maxWidth="100%"
        width={{ initial: "100%", md: "40%" }}
        height={{ initial: "100%", md: "75vh" }}
        style={{
          borderRadius: 0,
          paddingTop: 0,
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        <ProductModalContent />

        <Box position="absolute" top="5" right="4">
          <Dialog.Close onClick={resetSelectedProduct}>
            <IoCloseCircleSharp
              size={40}
              color="white"
              style={{
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
              }}
            />
          </Dialog.Close>
        </Box>
        <VisuallyHidden>
          <Dialog.Title>{selectedProduct.name}</Dialog.Title>
        </VisuallyHidden>
        <VisuallyHidden>
          <Dialog.Description>{selectedProduct.description}</Dialog.Description>
        </VisuallyHidden>
        <Dialog.Close>
          <CustomButtom
            label={`Add to Order • R$${
              selectedProduct.price * amountOfSelectedProduct
            }`}
            height="95px"
            hasBlur
            onClick={() => {
              resetSelectedProduct();
              dispatch({
                payload: {
                  product: selectedProduct,
                  quantity: amountOfSelectedProduct,
                },
                type: "ADD_ITEM",
              });
            }}
            hasActions
            Actions={[
              <MinusOrAdd
                width="150px"
                sizeIcon={35}
                sizeText="25px"
                amountProduct={amountOfSelectedProduct}
                colorOfMinusIcon="#DADADA"
                onPlusChangeAmountProduct={handlePlusAmountOfSelectedProduct}
                onMinusChangeAmountProduct={handleMinusAmountOfSelectedProduct}
                type={"row"}
              />,
            ]}
          />
        </Dialog.Close>
      </Dialog.Content>
    </Box>
  );
};

export default ProductModal;
