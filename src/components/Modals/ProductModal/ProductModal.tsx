import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Container,
  Flex,
  Heading,
  RadioGroup,
  ScrollArea,
  Text,
} from "@radix-ui/themes";
import { IoCloseCircleSharp } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { useTheme } from "styled-components";

import CustomButtom from "@components/CustomButtonWithBlur/CustomButton";
import MinusOrAdd from "@components/MinusOrAdd/MinusOrAdd";
import CustomRadio from "@components/RadioComponent/Radio";
import Modal from "@components/Modals/CustomBasicModal/CustomBasicModal";

import { formatMoney } from "@utils/getFormatCurrency";

import { AppDispatch, RootState } from "@src/store";

import {
  resetSelectedProduct,
  changeAmountOfSelectProduct,
} from "@store/selectedItem";
import { Modifier, ModifierItems } from "@store/menu/types";
import { addItemToBasket } from "@src/store/bag";
import { addOrRemoveModifierItem } from "@store/selectedItem";
import { useTranslation } from "react-i18next";

interface ProductModalProps {
  isOpenModal: boolean;
  setCloseModal: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({
  isOpenModal,
  setCloseModal,
}) => {
  const { t } = useTranslation(["Basket"]);
  const setting = useSelector((state: RootState) => state.webSettings);
  const {
    amountOfSelectedProduct,
    selectedProduct,
    modifierListOfSelectedProduct,
    finalPrice,
  } = useSelector((state: RootState) => state.selectedProduct);

  const dispatch = useDispatch<AppDispatch>();
  const { colors } = useTheme();

  const handlePlusAmountOfSelectedProduct = () =>
    dispatch(changeAmountOfSelectProduct(amountOfSelectedProduct + 1));
  const handleMinusAmountOfSelectedProduct = () => {
    dispatch(changeAmountOfSelectProduct(amountOfSelectedProduct - 1));
  };

  const checkIfThereAreProductModifiers =
    modifierListOfSelectedProduct.length > 0;

  const handleAddModifierOnProduct = (
    modifierId: number,
    modifierItemId: number
  ) => {
    dispatch(addOrRemoveModifierItem({ modifierId, modifierItemId }));
  };

  const formattedPrice = formatMoney(finalPrice, setting.ccy, setting.locale);

  const checkIfSelectProdutButtonIsDisabled = () => {
    if (finalPrice <= 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Modal.ModalRoot
      width="400px"
      isOpenModal={isOpenModal}
      setCloseModal={setCloseModal}
    >
      <Modal.Header>
        <Box
          onClick={setCloseModal}
          style={{
            cursor: "pointer",
            position: "fixed",
            top: 20,
            right: 20,
            zIndex: 105,
          }}
        >
          <IoCloseCircleSharp
            size={40}
            color="white"
            style={{
              borderRadius: "100%",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
            }}
          />
        </Box>
      </Modal.Header>
      <Modal.Content>
        <Box mb="3">
          <Box
            style={{
              backgroundColor: "white",
            }}
            height="100%"
            pb="0"
            position="relative"
          >
            {selectedProduct?.images && selectedProduct?.images?.length > 0 && (
              <img
                src={selectedProduct.images[0].image}
                alt={selectedProduct.name}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "fill",
                }}
              />
            )}
            {!selectedProduct?.images && (
              <img
                src={setting.webSettings.bannerImage}
                alt={selectedProduct?.description}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                }}
              />
            )}
            <Box mb="8">
              <Heading
                style={{ color: colors.darkBackground }}
                size="4"
                ml="5"
                mr="5"
                mt="20px"
              >
                {selectedProduct?.name}
              </Heading>
              <Box
                pl="5"
                pr="5"
                style={{
                  height: !checkIfThereAreProductModifiers ? "150px" : "",
                }}
              >
                <Text style={{ color: colors.lightGray }} size="2" mb="4">
                  {selectedProduct?.description}
                </Text>
              </Box>

              {checkIfThereAreProductModifiers && (
                <>
                  {modifierListOfSelectedProduct?.map(
                    ({
                      items,
                      name,
                      maxChoices,
                      minChoices,
                      id: modifierId,
                    }: Modifier) => {
                      const numberOfOptionsChoose = items.reduce(
                        (acc, item) => acc + (item?.quantity ?? 0),
                        0
                      );
                      const colorOfChoicesText =
                        numberOfOptionsChoose >= maxChoices
                          ? "green"
                          : numberOfOptionsChoose < minChoices
                          ? "black"
                          : "red";
                      return (
                        <Box key={modifierId}>
                          <Container
                            width="100%"
                            pl="4"
                            pr="4"
                            pt="3"
                            pb="3"
                            mb="3"
                            style={{ backgroundColor: colors.main }}
                          >
                            <Flex ml="5" mr="5" direction="column">
                              <Text
                                style={{ color: colors.lightGray }}
                                size="2"
                                weight="bold"
                              >
                                {name}
                              </Text>
                              <Flex mt="3" width="100%" justify="between">
                                <Flex
                                  justify="start"
                                  align="center"
                                  style={{
                                    color: colorOfChoicesText,
                                  }}
                                >
                                  {numberOfOptionsChoose == maxChoices && (
                                    <Box mr="3">
                                      <FaCheckCircle color="green" />
                                    </Box>
                                  )}
                                  <Text
                                    style={{
                                      color: colorOfChoicesText,
                                    }}
                                    size="2"
                                  >
                                    Select {maxChoices} options
                                  </Text>
                                </Flex>
                                <Text
                                  style={{
                                    color: colorOfChoicesText,
                                  }}
                                  size="2"
                                >
                                  {`${numberOfOptionsChoose}/${maxChoices}`}
                                </Text>
                              </Flex>
                            </Flex>
                          </Container>
                          <Box pl="4" pr="4">
                            <ScrollArea
                              scrollbars="vertical"
                              style={{
                                height: "25vh",
                                minWidth: 150,
                                marginBottom: "100px",
                              }}
                            >
                              <RadioGroup.Root
                                color="gray"
                                name={name}
                                onValueChange={(e: string) => {
                                  handleAddModifierOnProduct(
                                    modifierId,
                                    Number(e)
                                  );
                                }}
                              >
                                {items.map((item: ModifierItems) => (
                                  <Box key={item.id}>
                                    {item.available && item.visible && (
                                      <CustomRadio
                                        productMaxChoices={maxChoices}
                                        modifierId={modifierId}
                                        modifierItems={item}
                                        onPressToOneItem={() => {}}
                                        onPressToMultipleItem={() => {}}
                                      />
                                    )}
                                  </Box>
                                ))}
                              </RadioGroup.Root>
                            </ScrollArea>
                          </Box>
                        </Box>
                      );
                    }
                  )}
                </>
              )}
            </Box>
          </Box>
        </Box>
      </Modal.Content>
      <Modal.Footer>
        <CustomButtom
          disabled={checkIfSelectProdutButtonIsDisabled()}
          label={`${t(["basket_title"])}• ${formattedPrice}`}
          height="85px"
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
            setCloseModal();
          }}
          hasActions
          Actions={[
            <MinusOrAdd
              width="150px"
              sizeIcon={35}
              sizeText="25px"
              amountProduct={amountOfSelectedProduct}
              colorOfMinusIcon={colors.lighterGray}
              onPlusChangeAmountProduct={handlePlusAmountOfSelectedProduct}
              onMinusChangeAmountProduct={handleMinusAmountOfSelectedProduct}
              type={"row"}
            />,
          ]}
        />
      </Modal.Footer>
    </Modal.ModalRoot>
  );
};

export default ProductModal;
