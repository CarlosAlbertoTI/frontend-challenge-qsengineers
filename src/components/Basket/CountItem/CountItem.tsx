import React from "react";
import { Box, Flex, Text } from "@radix-ui/themes";
import { useSelector } from "react-redux";
import { useTheme } from "styled-components";

import MinusOrAdd from "@components/MinusOrAdd/MinusOrAdd";

import { Modifier } from "@store/menu/types";
import { RootState } from "@src/store";

import { formatMoney } from "@utils/getFormatCurrency";

interface CountItemProps {
  productName: string;
  productPrice: number;
  productAddModifier: Modifier[];
  amountProduct: number;
  colorOfPlusIcon?: string;
  colorOfMinusIcon?: string;
  onPlusChangeAmountProduct: () => void;
  onMinusChangeAmountProduct: () => void;
}

const CountItem: React.FC<CountItemProps> = ({
  productName,
  productPrice,
  productAddModifier = [],
  amountProduct = 0,
  colorOfPlusIcon,
  colorOfMinusIcon,
  onPlusChangeAmountProduct,
  onMinusChangeAmountProduct,
}) => {
  const { colors } = useTheme();
  const setting = useSelector((state: RootState) => state.webSettings);

  const formattedPrice = (price: number) =>
    formatMoney(price, setting.ccy, setting.locale);

  return (
    <Box pl="5" pr="5" pb="4" pt="2">
      <Box>
        <Flex direction="row" justify="between">
          <Flex direction="column" justify="start" mb="3">
            <Text
              style={{
                color: colors.darkBackground,
              }}
              size="2"
              weight="medium"
            >
              {productName}
            </Text>
            {productAddModifier && productAddModifier?.length > 0 && (
              <>
                {productAddModifier.map((modifier) => (
                  <Box key={modifier.id}>
                    {modifier.items.map((item) => (
                      <Box key={item.id}>
                        {item.quantity &&
                          item.quantity >= 1 &&
                          item.available &&
                          item.visible && (
                            <>
                              <Box display={{ initial: "none", md: "inline" }}>
                                <Text size="1">{item.name}</Text>
                                <Text ml="2" size="1">
                                  {`(+ ${formattedPrice(
                                    item.price * (item.qty || 1)
                                  )})`}
                                </Text>
                              </Box>
                            </>
                          )}
                      </Box>
                    ))}
                  </Box>
                ))}
              </>
            )}
          </Flex>
          <Text size="2" weight="bold" className="text-lg">
            {formattedPrice(productPrice)}
          </Text>
        </Flex>

        <Flex ml="2" mt="-2" justify="between">
          <MinusOrAdd
            width="70px"
            colorOfMinusIcon={colorOfMinusIcon}
            colorOfPlusIcon={colorOfPlusIcon}
            amountProduct={amountProduct}
            onPlusChangeAmountProduct={onPlusChangeAmountProduct}
            onMinusChangeAmountProduct={onMinusChangeAmountProduct}
            type={"row"}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default CountItem;
