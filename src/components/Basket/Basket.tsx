import React, { useContext } from "react";
import { Box, Flex, Heading, Separator, Text } from "@radix-ui/themes";

import CountItem from "./CountItem/CountItem";

import { useTranslation } from "@hooks/useTranslation";
import { BasketContext } from "@src/contexts/Basket/BasketProvider";

interface BasketProps {
  showTitle?: boolean;
  showBottomButton?: boolean;
}

const Basket: React.FC<BasketProps> = ({ showTitle = true }) => {
  const { t } = useTranslation(["Basket"]);

  const { state, dispatch } = useContext(BasketContext);
  const { items } = state;

  const BasketComponentContent: React.FC = () => {
    const fullPrice = state.items.reduce(
      (total, { product, quantity }) => total + product.price * quantity,
      0
    );

    return (
      <>
        <Flex
          height="100%"
          wrap="nowrap"
          flexGrow="1"
          direction="column"
          style={{
            backgroundColor: "#FFFFFF",
            boxShadow: !showTitle ? "" : "0px 2px 14px rgba(0, 0, 0, 0.1)",
          }}
        >
          {showTitle && (
            <Box
              height="50px"
              pt="3"
              mb="4"
              pl="5"
              style={{
                zIndex: 1000,
                width: "100%",
                backgroundColor: "#F8F9FA",
              }}
            >
              <Heading style={{ color: "#464646" }} size="4">
                {t(["basket_title"])}
              </Heading>
            </Box>
          )}

          <Box pt="0">
            {items.length == 0 && (
              <Flex justify="center" align="center">
                <Box ml="3" mt="4" mb="5">
                  <Text size="1" style={{ color: "#464646" }}>
                    {t(["basket_empty"])}
                  </Text>
                </Box>
              </Flex>
            )}
            {items.length != 0 && (
              <>
                {items.map(({ product, quantity }) => (
                  <Box key={product.id}>
                    <Box ml="-2">
                      <CountItem
                        productName={product.name}
                        productInfo={""}
                        productPrice={product.price}
                        amountProduct={quantity}
                        onPlusChangeAmountProduct={() =>
                          dispatch({
                            type: "ADD_ITEM",
                            payload: { product, quantity: quantity + 1 },
                          })
                        }
                        onMinusChangeAmountProduct={() =>
                          dispatch({
                            type: "REMOVE_ITEM",
                            payload: { product, quantity: quantity - 1 },
                          })
                        }
                      />
                    </Box>
                    {!showTitle && (
                      <Separator
                        mt="2"
                        style={{
                          width: "100%",
                          opacity: "0.5",
                        }}
                      />
                    )}
                  </Box>
                ))}
              </>
            )}
          </Box>
          {items.length != 0 && (
            <Box>
              <Flex
                pl="4"
                pr="4"
                pt="3"
                direction="row"
                justify="between"
                align="center"
                height="50px"
                style={{
                  width: "100%",
                  backgroundColor: "#F8F9FA",
                }}
              >
                <Text style={{ color: "#121212" }} size="2">
                  {t(["basket_sub_total"])}
                </Text>
                <Text style={{ color: "#121212" }} weight="medium" size="2">
                  {fullPrice}
                </Text>
              </Flex>
              <Flex justify="center">
                <Separator
                  style={{
                    width: showTitle ? "100%" : "95%",
                    backgroundColor: "#DADADA",
                  }}
                />
              </Flex>
              <Flex
                pl="4"
                pr="4"
                direction="row"
                justify="between"
                align="center"
                height="50px"
                style={{
                  width: "100%",
                  backgroundColor: "#F8F9FA",
                }}
              >
                <Text size="3" style={{ color: "#121212" }}>
                  {t(["basket_total"])}
                </Text>
                <Text size="3" style={{ color: "#121212" }} weight="medium">
                  {fullPrice}
                </Text>
              </Flex>
            </Box>
          )}
        </Flex>
      </>
    );
  };

  return (
    <>
      <BasketComponentContent />
    </>
  );
};

export default Basket;
