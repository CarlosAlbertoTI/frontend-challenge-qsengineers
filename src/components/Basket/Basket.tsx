import React, { useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Link,
  ScrollArea,
  Separator,
  Text,
} from "@radix-ui/themes";
import { TfiWrite } from "react-icons/tfi";
import { FaPlus } from "react-icons/fa";

import CountItem from "./CountItem/CountItem";

import { useTranslation } from "@hooks/useTranslation";

import CustomButton from "../CustomButton/CustomButton";
import { formatMoney } from "@src/utils/getFormatCurrency";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@src/store";
import {
  addItemToBasket,
  removeItemFromBasket,
  setBasket,
} from "@src/store/bag";
import { getData } from "@src/libs/local storage";
import { BasketItem, BasketState } from "@src/store/bag/types";

interface BasketProps {
  showTitle?: boolean;
  showBottomButton?: boolean;
}

const Basket: React.FC<BasketProps> = ({ showTitle = true }) => {
  const { t } = useTranslation(["Basket"]);

  const { items, subtotal } = useSelector((state: RootState) => state.basket);

  const dispatch = useDispatch<AppDispatch>();

  const isBasketEmpty = items.length == 0;
  const isNotBasketEmpty = items.length != 0;

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
        height="100%"
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
              backgroundColor: "#F8F9FA",
            }}
          >
            <Heading style={{ color: "#464646" }} size="4">
              {t(["basket_title"])}
            </Heading>
          </Box>
        )}

        <Box pt="0">
          {isBasketEmpty && (
            <Flex justify="center" align="center">
              <Box ml="3" mt="4" mb="5">
                <Text size="1" style={{ color: "#464646" }}>
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
            style={{
              backgroundColor: "#F8F9FA",
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
              <Text style={{ color: "#121212" }} size="2">
                {t(["basket_sub_total"])}
              </Text>
              <Text style={{ color: "#121212" }} weight="medium" size="2">
                {formatMoney(subtotal || 0, "BRL", "pt-BR")}
              </Text>
            </Flex>
            <Flex justify="center">
              <Separator
                style={{
                  width: showTitle ? "100%" : "95%",
                  backgroundColor: "#DADADA",
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
                backgroundColor: "#F8F9FA",
              }}
            >
              <Text size="3" style={{ color: "#121212" }}>
                {t(["basket_total"])}
              </Text>
              <Text size="3" style={{ color: "#121212" }} weight="medium">
                {""}
              </Text>
            </Flex>
            <Flex
              mt="4"
              pl="4"
              pr="4"
              justify="between"
              direction="row"
              align="center"
            >
              <Flex
                direction="row"
                align="center"
                onClick={() => {
                  console.info("open modal");
                }}
              >
                <TfiWrite />
                <Link size="1" ml="3">
                  {t("backet_add_extra_instructions")}
                </Link>
              </Flex>
              <FaPlus />
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
                  width="90%"
                  disable={false}
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
