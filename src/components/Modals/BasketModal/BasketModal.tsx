import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Flex, Heading, Separator } from "@radix-ui/themes";
import { IoMdClose } from "react-icons/io";
import { useTheme } from "styled-components";
import { useTranslation } from "react-i18next";

import CustomButtom from "@components/CustomButtonWithBlur/CustomButton";
import Modal from "@components/Modals/CustomBasicModal/CustomBasicModal";
import Basket from "@components/Basket/Basket";

import { AppDispatch, RootState } from "@src/store";
import { resetSelectedProduct } from "@store/selectedItem";
import { addItemToBasket } from "@store/bag";

interface BasketModalProps {
  isOpenModal: boolean;
  setCloseModal: () => void;
}

const BasketModal: React.FC<BasketModalProps> = ({
  isOpenModal,
  setCloseModal,
}) => {
  const {
    amountOfSelectedProduct,
    selectedProduct,
    modifierListOfSelectedProduct,
    finalPrice,
  } = useSelector((state: RootState) => state.selectedProduct);
  const { colors } = useTheme();

  const { t } = useTranslation(["Basket"]);

  const dispatch = useDispatch<AppDispatch>();

  const checkIfSelectProdutButtonIsDisabled = () => {
    if (finalPrice <= 0) {
      return true;
    } else {
      return false;
    }
  };

  const handleOnClick = () => {
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
    setCloseModal();
  };

  return (
    <Modal.ModalRoot
      width="400px"
      isOpenModal={isOpenModal}
      setCloseModal={setCloseModal}
    >
      <Modal.Header>
        <Flex direction="row" justify="between" ml="4" mr="4" mt="4">
          <Flex flexGrow="1" direction="row" justify="center" align="center">
            <Heading ml="7">{t(["basket_title"])}</Heading>
          </Flex>
          <Box onClick={setCloseModal}>
            <IoMdClose
              size={40}
              color="black"
              style={{
                borderRadius: "100%",
              }}
            />
          </Box>
        </Flex>
        <Flex justify="center">
          <Separator
            mt="3"
            mb="3"
            style={{
              width: "100%",
              backgroundColor: colors.lighterGray,
            }}
          />
        </Flex>
      </Modal.Header>
      <Modal.Content>
        <Flex height="100%" flexGrow="1">
          <Basket showTitle={false} />
        </Flex>
      </Modal.Content>
      <Modal.Footer>
        <Box
          width="100%"
          style={{
            position: "fixed",
            bottom: 0,
          }}
        >
          <CustomButtom
            disabled={checkIfSelectProdutButtonIsDisabled()}
            label={`${t("backet_checkout")}`}
            height="85px"
            hasBlur
            onClick={handleOnClick}
          />
        </Box>
      </Modal.Footer>
    </Modal.ModalRoot>
  );
};

export default BasketModal;
