import { forwardRef, useContext } from "react";
import { Box, Flex, IconButton, Avatar, Text } from "@radix-ui/themes";

import { AppSettingsContext } from "@contexts/AppSettings/AppSettingsProvider";
import { ProductCardProps } from "../ProductCard";

const ProductContent = forwardRef<HTMLDivElement, ProductCardProps>(
  (props, contentRef) => {
    const { setting } = useContext(AppSettingsContext);
    const { webSettings } = setting;

    return (
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
                      backgroundColor: webSettings.primaryColour,
                      color: "#fff",
                    }}
                  >
                    {props.productAlreadyChooseAndAmount}
                  </IconButton>
                )}

                <Text
                  style={{ color: "#121212" }}
                  as="div"
                  size="4"
                  weight="bold"
                  wrap="wrap"
                >
                  {props.title}
                </Text>
              </Flex>
              <Text
                style={{ color: "#464646", minWidth: "30px", width: "100px" }}
                weight="light"
                size="1"
                wrap="wrap"
              >
                {props.description}
              </Text>
              <Text
                style={{ color: "#464646" }}
                as="div"
                weight="medium"
                size="3"
              >
                {props.price}
              </Text>
            </Box>
            <Box>
              <Avatar
                size="7"
                src={props.imageUrl}
                radius="small"
                fallback="T"
              />
            </Box>
          </Flex>
        </Box>
      </Box>
    );
  }
);

export default ProductContent;
