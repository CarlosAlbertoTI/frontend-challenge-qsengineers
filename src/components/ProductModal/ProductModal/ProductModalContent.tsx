import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  ScrollArea,
  Text,
} from "@radix-ui/themes";

import CustomRadio from "@components/RadioComponent/Radio";

interface ProductModalContentProps {
  productName: string;
  productDescription: string;
}

const ProductModalContent: React.FC<ProductModalContentProps> = ({
  productName,
  productDescription,
}) => {
  return (
    <Box
      style={{
        backgroundColor: "white",
      }}
      height="100%"
      mb="5"
      pb="0"
      position="relative"
    >
      <img
        src="https://preodemo.gumlet.io/usr/venue/7602/section/646fbe4c64a6f.png"
        alt="A house in a forest"
        style={{
          width: "100%",
          height: "250px",
          objectFit: "fill",
          borderRadius: "var(--radius-2)",
        }}
      />
      <Box>
        <Heading style={{ color: "#121212" }} size="4" ml="5" mr="5" mt="20px">
          {productName}
        </Heading>
        <Heading style={{ color: "#464646" }} size="2" ml="5" mr="5" mb="4">
          {productDescription}
        </Heading>

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
            <Text style={{ color: "#464646" }}  size="2" weight="bold">
              Choose your size
            </Text>
            <Text style={{ color: "#5F5F5F" }} size="2">Select 1 option</Text>
          </Flex>
        </Container>
        <Box pl="4" pr="4">
          <ScrollArea
            scrollbars="vertical"
            style={{ height: 150, minWidth: 150 }}
          >
            <CustomRadio title={"Teodros Girmay"} description={"Engineering"} />
            <CustomRadio title={"Teodros Girmay"} description={"Engineering"} />
            <CustomRadio title={"Teodros Girmay"} description={"Engineering"} />
            <CustomRadio title={"Teodros Girmay"} description={"Engineering"} />
            <CustomRadio title={"Teodros Girmay"} description={"Engineering"} />
            <CustomRadio title={"Teodros Girmay"} description={"Engineering"} />
            <CustomRadio title={"Teodros Girmay"} description={"Engineering"} />
            <CustomRadio title={"Teodros Girmay"} description={"Engineering"} />
            <CustomRadio title={"Teodros Girmay"} description={"Engineering"} />
            <CustomRadio title={"Teodros Girmay"} description={"Engineering"} />
          </ScrollArea>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductModalContent;
