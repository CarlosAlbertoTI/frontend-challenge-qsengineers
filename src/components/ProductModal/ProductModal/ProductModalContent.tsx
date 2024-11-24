import {
  Box,
  Container,
  Flex,
  Heading,
  ScrollArea,
  Text,
} from "@radix-ui/themes";
import CustomRadio from "@src/components/RadioComponent/Radio";
import React from "react";

interface ProductModalContentProps {
  productName: string;
  productDescription: string;
}

const ProductModalContent: React.FC<ProductModalContentProps> = ({
  productName,
  productDescription,
}) => {
  return (
    <Box height="100%" mb="5" pb="0" position="relative">
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
        <Heading size="4" ml="5" mr="5" mt="20px">
          {productName}
        </Heading>
        <Heading size="2" ml="5" mr="5" mb="4">
          {productDescription}
        </Heading>

        <Container width="100%" mb="3" style={{ backgroundColor: "lightgrey" }}>
          <Flex ml="5" mr="5" direction="column">
            <Text size="2" weight="medium">
              Choose your size
            </Text>
            <Text size="2">Select 1 option</Text>
          </Flex>
        </Container>
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
  );
};

export default ProductModalContent;
