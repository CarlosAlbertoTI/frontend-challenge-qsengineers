import React from "react";
import { Box, Flex, Text } from "@radix-ui/themes";

import MinusOrAdd from "@components/MinusOrAdd/MinusOrAdd";

interface CountItemProps {
  productName: string;
  productInfo: string;
  productPrice: number;
  amountProduct: number;
  colorOfPlusIcon?: string;
  colorOfMinusIcon?: string;
  onPlusChangeAmountProduct: () => void;
  onMinusChangeAmountProduct: () => void;
}

const CountItem: React.FC<CountItemProps> = ({
  productName,
  productInfo,
  productPrice,
  amountProduct = 0,
  colorOfPlusIcon ,
  colorOfMinusIcon ,
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
            <Text
              style={{
                color: "#5F5F5F",
              }}
              size="1"
              weight="regular"
            >
              {productInfo}
            </Text>
          </Flex>
          <Text size="2" weight="bold" className="text-lg">
            ${productPrice}
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
