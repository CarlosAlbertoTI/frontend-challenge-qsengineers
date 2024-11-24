import React from "react";
import { Box, Flex, Separator, Text } from "@radix-ui/themes";

import CountItem from "./CountItem/CountItem";

import { useTranslation } from "@hooks/useTranslation";

interface BasketProps {
  showTitle?: boolean;
  showBottomButton?: boolean;
}

const Basket: React.FC<BasketProps> = ({ showTitle = true }) => {
  const { t } = useTranslation(["Basket"]);

  const BasketComponentContent: React.FC = () => {
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
              <Text style={{ color: "#464646" }} size="4">
                {t(["basket_title"])}
              </Text>
            </Box>
          )}
          <Box ml="-2">
            <CountItem
              productName={"Caipirinha"}
              productInfo={"asdasdasdasd"}
              productPrice={12.0}
              amountProduct={3}
              onPlusChangeAmountProduct={() => {}}
              onMinusChangeAmountProduct={() => {}}
            />
          </Box>

          {/* <p className="text-gray-700 text-base">{t(["basket_empty"])}</p> */}

          {!showTitle && (
            <Separator
              mt="2"
              style={{
                width: "100%",
                opacity: "0.5",
              }}
            />
          )}
          <Box ml="-2">
            <CountItem
              productName={"Caipirinha"}
              productInfo={"asdasdasdas"}
              productPrice={12.0}
              amountProduct={3}
              onPlusChangeAmountProduct={() => {}}
              onMinusChangeAmountProduct={() => {}}
            />
          </Box>
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
                {t(["basket_title"])}
              </Text>
              <Text style={{ color: "#121212" }} weight="medium" size="2">
                {t(["basket_title"])}
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
                {t(["basket_title"])}
              </Text>
              <Text size="3" style={{ color: "#121212" }} weight="medium">
                {t(["basket_title"])}
              </Text>
            </Flex>
          </Box>
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
