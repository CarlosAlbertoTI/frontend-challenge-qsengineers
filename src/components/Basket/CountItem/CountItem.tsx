import React from "react";
import { Box, Flex, Text } from "@radix-ui/themes";

import MinusOrAdd from "@components/MinusOrAdd/MinusOrAdd";

import { Modifier } from "@src/store/menu/types";

import { formatMoney } from "@src/utils/getFormatCurrency";

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

  return (
    <Box pl="5" pr="5" pb="4" pt="2">
      <Box>
        <Flex direction="row" justify="between">
          <Flex direction="column" justify="start" mb="3">
            <Text
              style={{
                color: "#121212",
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
                        {item.quantity && item.quantity >= 1 && (
                          <>
                            <Box display={{ initial: "inline", md: "none" }}>
                              <Flex justify="between" align="center">
                                <Text size="1">{item.name}</Text>
                                <Text ml="2" size="1">
                                  {`(+ ${formatMoney(
                                    item.price * (item.qty || 1),
                                    "BRL",
                                    "pt-BR"
                                  )})`}
                                </Text>
                              </Flex>
                            </Box>
                            <Box display={{ initial: "none", md: "inline" }}>
                              <Text size="1">{item.name}</Text>
                            </Box>
                          </>
                        )}
                        {item.quantity && item.quantity <= 1 && <>{""}</>}
                      </Box>
                    ))}
                  </Box>
                ))}
              </>
            )}
          </Flex>
          <Text size="2" weight="bold" className="text-lg">
            {formatMoney(productPrice || 0, "BRL", "pt-BR")}
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
