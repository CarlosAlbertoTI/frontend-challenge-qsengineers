import React, { useContext } from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  ScrollArea,
  Text,
} from "@radix-ui/themes";

import CustomRadio from "@components/RadioComponent/Radio";

import { ProductSelectedContext } from "@contexts/ProductSelected/ProductSelected";
import { CiImageOff } from "react-icons/ci";

const ProductModalContent: React.FC = () => {
  const { selectedProduct } = useContext(ProductSelectedContext);

  const checkIfThereAreProductModifiers =
    selectedProduct.modifiers && selectedProduct.modifiers.length > 0;

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
          {selectedProduct.name}
        </Heading>
        <Box
          pl="5"
          pr="5"
          style={{
            height: !checkIfThereAreProductModifiers ? "150px" : "",
          }}
        >
          <Text style={{ color: "#464646" }} size="2" mb="4">
            {selectedProduct.description}
          </Text>
        </Box>

        {checkIfThereAreProductModifiers && (
          <>
            {selectedProduct.modifiers?.map(
              ({
                items,
                name,
                maxChoices,
                minChoices,
                id,
              }: {
                items: [];
                name: string;
                maxChoices: number;
                minChoices: number;
                id: number;
              }) => {
                const selectNumberOfChooices =
                  maxChoices === undefined ? minChoices : maxChoices;
                return (
                  <Box key={id}>
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
                        <Text style={{ color: "#5F5F5F" }} size="2">
                          Select {selectNumberOfChooices} options
                        </Text>
                      </Flex>
                    </Container>
                    <Box pl="4" pr="4" style={{}}>
                      <ScrollArea
                        scrollbars="vertical"
                        style={{ height: "15vh", minWidth: 150 }}
                      >
                        {items.map((item: any) => (
                          <Box key={item?.id}>
                            <CustomRadio
                              title={item?.name}
                              description={item?.price}
                            />
                          </Box>
                        ))}
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
