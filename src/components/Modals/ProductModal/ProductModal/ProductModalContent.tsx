import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  RadioGroup,
  ScrollArea,
  Text,
} from "@radix-ui/themes";
import { FaCheckCircle } from "react-icons/fa";

import CustomRadio from "@components/RadioComponent/Radio";

import { CiImageOff } from "react-icons/ci";
import { Modifier, ModifierItems } from "@src/store/menu/types";
import { AppDispatch, RootState } from "@src/store";
import { useDispatch, useSelector } from "react-redux";
import {
  addOrRemoveModifierItem,
  addOrRemoveModifierItemsQuantity,
} from "@src/store/selectedItem";

const ProductModalContent: React.FC = () => {
  const {
    // amountOfSelectedProduct,
    selectedProduct,
    modifierListOfSelectedProduct,
  } = useSelector((state: RootState) => state.selectedProduct);

  const dispatch = useDispatch<AppDispatch>();

  const checkIfThereAreProductModifiers =
    modifierListOfSelectedProduct.length > 0;

  const handleAddModifierOnProduct = (
    modifierId: number,
    modifierItemId: number
  ) => {
    dispatch(addOrRemoveModifierItem({ modifierId, modifierItemId }));
  };

  return (
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
        <CiImageOff
          size="30px"
          style={{
            width: "100%",
            height: "250px",
            objectFit: "fill",
            borderRadius: "var(--radius-2)",
          }}
        />
      )}
      <Box>
        <Heading style={{ color: "#121212" }} size="4" ml="5" mr="5" mt="20px">
          {selectedProduct?.name}
        </Heading>
        <Box
          pl="5"
          pr="5"
          style={{
            height: !checkIfThereAreProductModifiers ? "150px" : "",
          }}
        >
          <Text style={{ color: "#464646" }} size="2" mb="4">
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
                      style={{ backgroundColor: "#F8F9FA" }}
                    >
                      <Flex ml="5" mr="5" direction="column">
                        <Text
                          style={{ color: "#464646" }}
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
                    <Box pl="4" pr="4" style={{}}>
                      <ScrollArea
                        scrollbars="vertical"
                        style={{ height: "25vh", minWidth: 150 }}
                      >
                        <RadioGroup.Root
                          color="gray"
                          name={name}
                          onValueChange={(e: string) => {
                            handleAddModifierOnProduct(modifierId, Number(e));
                          }}
                        >
                          {items.map((item: ModifierItems) => (
                            <Box key={item.id}>
                              {item.available && (
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
  );
};

export default ProductModalContent;
