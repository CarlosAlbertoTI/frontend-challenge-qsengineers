import React, { useRef } from "react";
import { Box, Flex, Text, Radio } from "@radix-ui/themes";

interface ProductCardProps {
  title: string;
  description: string;
}

const CustomRadio: React.FC<ProductCardProps> = ({ title, description }) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <Box m="5">
      <Flex direction="row" align="center" onClick={() => ref.current?.click()}>
        <Box flexGrow="1">
          <Text as="div" size="2" weight="bold">
            {title}
          </Text>
          <Text as="div" size="2" color="gray">
            {description}
          </Text>
        </Box>
        <Box flexGrow="0">
          <Radio color="gray" size="2" ref={ref} variant="surface" name="surface" value={"0"} />
        </Box>
      </Flex>
    </Box>
  );
};

export default CustomRadio;
