import { Box, Flex, IconButton, Text } from "@radix-ui/themes";
import React from "react";

interface CountItemProps {
  productName: string;
  productInfo: string;
  productPrice: number;
  amountProduct: number;
  onPlusChangeAmountProduct: () => void;
  onMinusChangeAmountProduct: () => void;
}

const CountItem: React.FC<CountItemProps> = ({
  productName,
  productInfo,
  productPrice,
  amountProduct = 0,
  onPlusChangeAmountProduct,
  onMinusChangeAmountProduct,
}) => {
  return (
    <Box pl="5" pr="5" pb="4" pt="2">
      <Box>
        <Flex direction="row" justify="between">
          <Flex direction="column" justify="start" mb="3">
            <Text size="2" weight="medium">
              {productName}
            </Text>
            <Text size="1" weight="regular">
              {productInfo}
            </Text>
          </Flex>
          <Text size="1" className="text-lg">
            ${productPrice}
          </Text>
        </Flex>
        <Flex direction="row" justify="between">
          <Box>
            <IconButton
              size="1"
              radius="full"
              variant="soft"
              onClick={onPlusChangeAmountProduct}
            >
              +
            </IconButton>
            <Text ml={"2"} mr={"2"}>
              {amountProduct}
            </Text>
            <IconButton
              size="1"
              radius="full"
              variant="soft"
              onClick={onMinusChangeAmountProduct}
            >
              -
            </IconButton>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default CountItem;
