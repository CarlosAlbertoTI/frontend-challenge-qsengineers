import React, { useEffect, useState } from "react";
import { Box, Flex, Text, RadioGroup } from "@radix-ui/themes";
import { IoIosAdd } from "react-icons/io";

import { ModifierItems } from "@contexts/Products/ProductsProvider";

import MinusOrAdd from "@components/MinusOrAdd/MinusOrAdd";
import { formatMoney } from "@src/utils/getFormatCurrency";

interface ProductCardProps {
  productMaxChoices: number;
  modifierId: number;
  modifierItems: ModifierItems;
  onPressToOneItem: (isChecked: boolean | undefined) => void;
  onPressToMultipleItem: (
    newModifierId: number,
    newModifierItemId: number,
    newValue: number
  ) => void;
}

const CustomRadio: React.FC<ProductCardProps> = ({
  productMaxChoices,
  modifierId,
  modifierItems,
  onPressToMultipleItem,
}) => {
  const [openCountOfModifiers, setOpenCountOfModifiers] = useState(false);
  const [amount, setAmount] = useState(0);

  const AddToAmount = () => {
    if (
      amount + 1 <= modifierItems.maxChoices &&
      amount + 1 <= productMaxChoices
    ) {
      setAmount(amount + 1);
    }
  };
  const SubToAmount = () => {
    setAmount(amount - 1);
  };

  useEffect(() => {
    if (amount != 0)
      onPressToMultipleItem(modifierId, modifierItems.id, amount);
    if (amount == 0) {
      setOpenCountOfModifiers(false);
    }
  }, [amount]);

  return (
    <Box m="5">
      <Flex direction="row" align="center">
        <Box flexGrow="1">
          <Text as="div" size="2" weight="bold">
            {modifierItems?.name}
          </Text>
          <Text as="div" size="2" color="gray">
            {formatMoney(modifierItems?.price || 0, "BRL", "pt-BR")}
          </Text>
        </Box>
        <Flex flexGrow="0" justify="center" align="center">
          {modifierItems.maxChoices === 1 && (
            <RadioGroup.Item value={`${modifierItems.id}`} />
          )}
          {modifierItems.maxChoices > 1 && (
            <>
              {!openCountOfModifiers && (
                <Box width="21px">
                  <IoIosAdd
                    size="27"
                    onClick={() => {
                      setOpenCountOfModifiers((prevValue) => !prevValue);
                      AddToAmount();
                    }}
                  />
                </Box>
              )}
              {openCountOfModifiers && (
                <>
                  <MinusOrAdd
                    amountProduct={amount}
                    onPlusChangeAmountProduct={AddToAmount}
                    onMinusChangeAmountProduct={SubToAmount}
                    type={"row"}
                  />
                </>
              )}
            </>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default CustomRadio;
