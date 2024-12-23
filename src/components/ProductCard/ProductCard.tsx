import { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Box, Flex, IconButton, Text } from "@radix-ui/themes";
import { useTheme } from "styled-components";

import { AppDispatch, RootState } from "@src/store";
import { Product } from "@store/menu/types";
import { setSelectedProduct } from "@store/selectedItem";

import { formatMoney } from "@utils/getFormatCurrency";

interface ProductCardMainComponentProps {
  product: Product;
  onPressMobile: () => void;
}

const ProductCard = forwardRef<HTMLDivElement, ProductCardMainComponentProps>(
  ({ product, onPressMobile }, ref) => {
    const { items } = useSelector((state: RootState) => state.basket);
    const setting = useSelector((state: RootState) => state.webSettings);
    const dispatch = useDispatch<AppDispatch>();

    const handleSaveSelectedProduct = () => {
      dispatch(setSelectedProduct(product));
      onPressMobile();
    };

    const { webSettings } = setting;
    const { colors } = useTheme();

    const checkIfPriceIsZero = () => {
      if (product.price === 0.0) {
        return product.modifiers?.[0]?.items?.[0]?.price;
      } else {
        return product.price;
      }
    };

    const checkIfProductIsOnBasket = () => {
      return items.reduce((acc, item) => {
        if (item.product.id === product.id) {
          return acc + item.quantity;
        }
        return acc;
      }, 0);
    };

    const formattedPrice = formatMoney(
      checkIfPriceIsZero() || 0,
      setting.ccy,
      setting.locale
    );

    return (
      <Box
        key={`${product.id}-box`}
        style={{ cursor: "pointer" }}
        onClick={handleSaveSelectedProduct}
        ref={ref}
        m="2"
        mb="4"
      >
        <Flex position="relative" justify="between" direction="row">
          <Box flexGrow="1" mr="0">
            <Flex width="100%" direction="row">
              {checkIfProductIsOnBasket() != undefined &&
                checkIfProductIsOnBasket() != 0 && (
                  <IconButton
                    disabled
                    size="1"
                    mr="3"
                    radius="medium"
                    style={{
                      backgroundColor: webSettings.primaryColour,
                      color: webSettings.backgroundColour,
                    }}
                  >
                    {checkIfProductIsOnBasket()}
                  </IconButton>
                )}
              <Text
                style={{ color: colors.darkBackground }}
                as="div"
                size="4"
                weight="bold"
                wrap="wrap"
              >
                {product.name}
              </Text>
            </Flex>

            <Text
              style={{
                maxWidth: "100%",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 3,
                overflow: "hidden",
                textOverflow: "ellipsis",
                color: colors.lightGray,
              }}
              weight="light"
              size="1"
              wrap="wrap"
            >
              {product.description}
            </Text>

            <Text
              style={{ color: colors.lightGray }}
              as="div"
              weight="medium"
              size="3"
            >
              {formattedPrice}
            </Text>
          </Box>
          <Box flexGrow="0" ml="5">
            {product?.images && product.images.length > 0 && (
              <Box width={{ initial: "100px", md: "150px" }}>
                <Avatar
                  size="7"
                  src={product.images[0]?.image}
                  radius="small"
                  fallback={""}
                />
              </Box>
            )}
          </Box>
        </Flex>
      </Box>
    );
  }
);

export default ProductCard;
