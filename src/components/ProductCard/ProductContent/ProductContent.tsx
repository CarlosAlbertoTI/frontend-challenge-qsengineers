import { forwardRef } from "react";
import { Box, Flex, Avatar, Text } from "@radix-ui/themes";

// import { AppSettingsContext } from "@contexts/AppSettings/AppSettingsProvider";
import { Product } from "@src/contexts/Products/ProductsProvider";

interface ProductContentProps {
  product: Product;
}

const ProductContent = forwardRef<HTMLDivElement, ProductContentProps>(
  ({ product }, contentRef) => {
    // const { setting } = useContext(AppSettingsContext);
    // const { webSettings } = setting;

    return (
      <Box ref={contentRef} m="2" mb="8">
        <Box>
          <Flex position="relative" justify="between" direction="row">
            <Box mr="4">
              <Flex direction="row">
                {/* {0 == 0 && (
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
                    {1}
                  </IconButton>
                )} */}
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
                {product.price}
              </Text>
            </Box>
            <Box>
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
      </Box>
    );
  }
);

export default ProductContent;
