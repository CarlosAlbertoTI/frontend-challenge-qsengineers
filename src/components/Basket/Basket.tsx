import React, { useEffect } from "react";
import {
  Box,
  Button,
  Dialog,
  Flex,
  Heading,
  Link,
  ScrollArea,
  Separator,
  Text,
} from "@radix-ui/themes";
import { useDispatch, useSelector } from "react-redux";
import { TfiWrite } from "react-icons/tfi";
import { FaPlus } from "react-icons/fa";
import { useTheme } from "styled-components";

import CountItem from "./CountItem/CountItem";

import { useTranslation } from "@hooks/useTranslation";

import CustomButton from "@components/CustomButtonWithBlur/CustomButton";

import { formatMoney } from "@utils/getFormatCurrency";

import { AppDispatch, RootState } from "@src/store";
import { addItemToBasket, removeItemFromBasket, setBasket } from "@store/bag";
import { BasketState } from "@store/bag/types";

import { getData } from "@libs/local storage";

interface BasketProps {
  showTitle?: boolean;
}

const Basket: React.FC<BasketProps> = ({ showTitle = true }) => {
  const { t } = useTranslation(["Basket"]);

  const { items, subtotal, instructions } = useSelector(
    (state: RootState) => state.basket
  );
  const setting = useSelector((state: RootState) => state.webSettings);

  const { colors } = useTheme();
  const { webSettings } = setting;

  const dispatch = useDispatch<AppDispatch>();

  const isBasketEmpty = items.length == 0;
  const isNotBasketEmpty = items.length != 0;

  const formattedPrice = formatMoney(subtotal, setting.ccy, setting.locale);

  const checkIfInstructionsAreEmpty = instructions.length === 0;

  const textOfExtraInstructions = checkIfInstructionsAreEmpty
    ? t(["backet_add_extra_instructions"])
    : t(["backet_change_extra_instructions"]);

  useEffect(() => {
    const basketData: BasketState | null = getData(
      "basket"
    ) as BasketState | null;
    if (basketData && basketData.subtotal != 0) {
      dispatch(setBasket(basketData));
    }
  }, [dispatch]);

  return (
    <>
      <Flex
        height={{ initial: "90vh", md: "100%" }}
        wrap="nowrap"
        flexGrow="1"
        direction="column"
        style={{
          backgroundColor: "#FFFFFF",
          boxShadow: !showTitle ? "" : "0px 2px 14px rgba(0, 0, 0, 0.1)",
        }}
      >
        {showTitle && (
          <Box
            height="50px"
            pt="3"
            mb="4"
            pl="5"
            style={{
              zIndex: 1000,
              width: "100%",
              backgroundColor: colors.main,
            }}
          >
            <Heading style={{ color: colors.lightGray }} size="4">
              {t(["basket_title"])}
            </Heading>
          </Box>
        )}

        <Box pt="0">
          {isBasketEmpty && (
            <Flex justify="center" align="center">
              <Box ml="3" mt="4" mb="5">
                <Text size="1" style={{ color: colors.lightGray }}>
                  {t(["basket_empty"])}
                </Text>
              </Box>
            </Flex>
          )}
          {isNotBasketEmpty && (
            <ScrollArea
              style={{
                maxHeight: "300px",
              }}
            >
              {items.map(({ product, quantity, fullPrice, id, modifiers }) => {
                return (
                  <Box key={id}>
                    <Box ml="-2">
                      <CountItem
                        productName={product.name}
                        productPrice={(fullPrice && fullPrice) ?? 0}
                        amountProduct={quantity}
                        productAddModifier={modifiers || []}
                        onPlusChangeAmountProduct={() => {
                          dispatch(
                            addItemToBasket({
                              product: { ...product, modifiers: [] },
                              modifiers: modifiers,
                              quantity: quantity + 1,
                              id,
                            })
                          );
                        }}
                        onMinusChangeAmountProduct={() => {
                          dispatch(
                            removeItemFromBasket({
                              product: { ...product, modifiers: [] },
                              modifiers: modifiers,
                              quantity: quantity + 1,
                              id,
                            })
                          );
                        }}
                      />
                    </Box>
                    {!showTitle && (
                      <Separator
                        mt="2"
                        style={{
                          width: "100%",
                          opacity: "0.5",
                        }}
                      />
                    )}
                  </Box>
                );
              })}
            </ScrollArea>
          )}
        </Box>
        {items.length != 0 && (
          <Box
            flexGrow="1"
            pb={{
              initial: "9",
              md: "0",
            }}
            height="100%"
            style={{
              backgroundColor: colors.main,
            }}
          >
            <Flex
              pl="4"
              pr="4"
              pt="3"
              direction="row"
              justify="between"
              align="center"
              height="50px"
              style={{
                width: "100%",
              }}
            >
              <Text style={{ color: colors.darkBackground }} size="2">
                {t(["basket_sub_total"])}
              </Text>
              <Text
                style={{ color: colors.darkBackground }}
                weight="medium"
                size="2"
              >
                {formattedPrice}
              </Text>
            </Flex>
            <Flex justify="center">
              <Separator
                style={{
                  width: showTitle ? "100%" : "95%",
                  backgroundColor: colors.lighterGray,
                }}
              />
            </Flex>
            <Flex
              pl="4"
              pr="4"
              direction="row"
              justify="between"
              align="center"
              height="50px"
              style={{
                width: "100%",
                backgroundColor: colors.main,
              }}
            >
              <Text size="3" style={{ color: colors.darkBackground }}>
                {t(["basket_total"])}
              </Text>
              <Text
                size="3"
                style={{ color: colors.darkBackground }}
                weight="medium"
              >
                {""}
              </Text>
            </Flex>
            {!checkIfInstructionsAreEmpty && (
              <Flex
                pl="4"
                pr="4"
                direction="column"
                justify="start"
                align="start"
              >
                <Box>
                  <Heading size="2">{t(["instructions_title"])}</Heading>
                </Box>
                <Box>
                  <Text size="1">{instructions}</Text>
                </Box>
              </Flex>
            )}
            <Flex
              mt="4"
              mb="7"
              pl="4"
              pr="4"
              justify="center"
              direction="row"
              align="center"
            >
              <Dialog.Trigger>
                <Button style={{ cursor: "pointer" }} variant="ghost">
                  <Flex direction="row" align="center">
                    <TfiWrite color={webSettings.navBackgroundColour} />
                    <Link size="1" ml="3">
                      {textOfExtraInstructions}
                    </Link>
                  </Flex>
                  <FaPlus color={webSettings.navBackgroundColour} />
                </Button>
              </Dialog.Trigger>
            </Flex>

            <Box width="100%" display={{ initial: "none", md: "inline" }}>
              <Flex
                position="relative"
                direction="row"
                mb="2"
                mt="5"
                height="50px"
                width="100%"
                justify="center"
                align="center"
              >
                <CustomButton
                  style={{
                    backgroundColor: webSettings.primaryColour,
                    color: webSettings.backgroundColour,
                    outline: "none",
                  }}
                  width="90%"
                  disabled={false}
                  height="60px"
                  label={t("backet_checkout")}
                  onClick={function (): void {
                    console.info("checked");
                  }}
                />
              </Flex>
            </Box>
          </Box>
        )}
      </Flex>
    </>
  );
};

export default Basket;
