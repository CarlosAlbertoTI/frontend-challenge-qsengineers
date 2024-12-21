import { forwardRef } from "react";
import { useSelector } from "react-redux";
import { Box, Flex, Avatar, Text, IconButton } from "@radix-ui/themes";

import { formatMoney } from "@utils/getFormatCurrency";

import { RootState } from "@store/index";
import { Product } from "@store/menu/types";

interface ProductContentProps {
  product: Product;
  count: number | undefined;
}

const ProductContent = forwardRef<HTMLDivElement, ProductContentProps>(
  ({ product, count }, contentRef) => {
    const setting = useSelector((state: RootState) => state.webSettings);

    const { webSettings } = setting;

    return (
      <Box  ref={contentRef} m="2" mb="4">
        <Flex
          position="relative"
          justify="between"
          direction="row"
        >
          <Box mr="0">
            <Flex direction="row">
                {count != undefined && count != 0 && (
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
                    {count}
                  </IconButton>
                )}
                <Text
                  style={{ color: "#121212" }}
                  as="div"
                  size="4"
                  weight="bold"
                  wrap="wrap"
                >
                  {product.name}
                </Text>
              </Flex>
            <Text
                style={{ color: "#464646", minWidth: "30px", width: "100px" }}
                weight="light"
                size="1"
                wrap="wrap"
              >
                {product.description}
              </Text>
            <Text
              style={{ color: "#464646" }}
              as="div"
              weight="medium"
              size="3"
            >
              {formatMoney(product.price || 0, "BRL", "pt-BR")}
            </Text>
          </Box>
          <Box ml="5">
              {product?.images && product.images.length > 0 && (
                <Avatar
                  size="7"
                  src={product.images[0]?.image}
                  radius="small"
                  fallback={""}
                />
              )}
            </Box>
        </Flex>
      </Box>
    );
  }
);

export default ProductContent;
