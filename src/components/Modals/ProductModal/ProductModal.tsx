import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dialog, Box, VisuallyHidden } from "@radix-ui/themes";

import { IoCloseCircleSharp } from "react-icons/io5";

import ProductModalContent from "./ProductModal/ProductModalContent";
import CustomButtom from "@components/CustomButtonWithBlur/CustomButton";
import MinusOrAdd from "@components/MinusOrAdd/MinusOrAdd";

import { formatMoney } from "@utils/getFormatCurrency";

import { AppDispatch, RootState } from "@src/store";

import {
  resetSelectedProduct,
  changeAmountOfSelectProduct,
} from "@store/selectedItem";
import { addItemToBasket } from "@src/store/bag";

const ProductModal: React.FC = () => {
  const {
    amountOfSelectedProduct,
    selectedProduct,
    modifierListOfSelectedProduct,
    finalPrice,
  } = useSelector((state: RootState) => state.selectedProduct);

  const dispatch = useDispatch<AppDispatch>();

  const handlePlusAmountOfSelectedProduct = () =>
    dispatch(changeAmountOfSelectProduct(amountOfSelectedProduct + 1));
  const handleMinusAmountOfSelectedProduct = () => {
    dispatch(changeAmountOfSelectProduct(amountOfSelectedProduct - 1));
  };
  return (
    <Box
      maxWidth="100%"
      width={{ initial: "100vw", md: "70%" }}
      height="100%"
      maxHeight="100%"
    >
      <Dialog.Content

        style={{
          borderRadius: 0,
          paddingTop: 0,
          paddingLeft: 0,
          paddingRight: 0,
          paddingBottom: 0,
        }}
      >
        <ProductModalContent />

        <Box >
          <Dialog.Close onClick={() => dispatch(resetSelectedProduct())}>
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
          <Dialog.Title>{selectedProduct?.name}</Dialog.Title>
        </VisuallyHidden>
        <VisuallyHidden>
          <Dialog.Description>
            {selectedProduct?.description}
          </Dialog.Description>
        </VisuallyHidden>
        <Dialog.Close>
          <CustomButtom
            label={`Add to Order • ${formatMoney(
              finalPrice ?? 0,
              "BRL",
              "pt-BR"
            )}`}
            height="95px"
            hasBlur
            onClick={() => {
              if (selectedProduct) {
                dispatch(
                  addItemToBasket({
                    product: { ...selectedProduct, modifiers: [] },
                    modifiers: modifierListOfSelectedProduct,
                    quantity: amountOfSelectedProduct,
                  })
                );
              }
              dispatch(resetSelectedProduct());
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
