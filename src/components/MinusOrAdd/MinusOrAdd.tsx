import React from "react";
import { Flex, Text } from "@radix-ui/themes";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

interface MinusOrAddPrpps {
  width?: string;
  amountProduct: number;
  colorOfPlusIcon?: string;
  colorOfMinusIcon?: string;
  onPlusChangeAmountProduct: () => void;
  onMinusChangeAmountProduct: () => void;
  type: "row" | "column";
  sizeIcon?: number;
  sizeText?: string;
}

const MinusOrAdd: React.FC<MinusOrAddPrpps> = ({
  width = "60px",
  type = "row",
  sizeIcon = 17,
  sizeText = "20px",
  amountProduct,
  colorOfPlusIcon,
  colorOfMinusIcon,
  onPlusChangeAmountProduct,
  onMinusChangeAmountProduct,
}) => {
  return (
    <Flex width={width} direction={type} justify="between" align="center">
      <FaMinusCircle
        size={sizeIcon}
        color={colorOfMinusIcon}
        onClick={onMinusChangeAmountProduct}
      />
      <Text style={{ fontSize: sizeText }} ml={"2"} mr={"2"}>
        {amountProduct}
      </Text>

      <FaPlusCircle
        size={sizeIcon}
        color={colorOfPlusIcon}
        onClick={onPlusChangeAmountProduct}
      />
    </Flex>
  );
};

export default MinusOrAdd;
