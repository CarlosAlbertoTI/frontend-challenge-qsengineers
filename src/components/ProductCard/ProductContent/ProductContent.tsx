import { forwardRef } from "react";
import { Box, Flex, IconButton, Avatar, Text } from "@radix-ui/themes";

import { ProductCardProps } from "../ProductCard";

const ProductContent = forwardRef<HTMLDivElement, ProductCardProps>(
  (props, contentRef) => (
    <Box ref={contentRef} m="2" mb="8">
      <Box>
        <Flex position="relative" justify="between" direction="row">
          <Box mr="4">
            <Flex direction="row">
              {props.productAlreadyChooseAndAmount !== 0 && (
                <IconButton
                  disabled
                  size="1"
                  mr="3"
                  radius="medium"
                  style={{
                    backgroundColor: "gray",
                  }}
                >
                  {props.productAlreadyChooseAndAmount}
                </IconButton>
              )}
              <Text as="div" size="4" weight="bold" wrap="wrap">
                {props.title}
              </Text>
            </Flex>
            <Text as="div" weight="light" size="3" wrap="wrap">
              {props.description}
            </Text>
            <Text as="div" weight="medium" size="3">
              {props.price}
            </Text>
          </Box>
          <Box m="-3">
            <Avatar size="8" src={props.imageUrl} radius="none" fallback="T" />
          </Box>
        </Flex>
      </Box>
    </Box>
  )
);

export default ProductContent;
