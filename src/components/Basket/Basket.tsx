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
          style={{ backgroundColor: "#FFFFFF" }}
        >
          {showTitle && (
            <Box
              height="50px"
              pt="1"
              mb="4"
              pl="5"
              style={{
                zIndex: 1000,
                width: "100%",
                backgroundColor: "gray",
              }}
            >
              <Text size="4">{t(["basket_title"])}</Text>
            </Box>
          )}
          <CountItem
            productName={"Caipirinha"}
            productInfo={""}
            productPrice={12.0}
            amountProduct={3}
            onPlusChangeAmountProduct={() => {}}
            onMinusChangeAmountProduct={() => {}}
          />

          {/* <p className="text-gray-700 text-base">{t(["basket_empty"])}</p> */}

          {!showTitle && (
            <Separator
              mt="2"
              style={{
                width: "100%",
              }}
            />
          )}
          <CountItem
            productName={"Caipirinha"}
            productInfo={""}
            productPrice={12.0}
            amountProduct={3}
            onPlusChangeAmountProduct={() => {}}
            onMinusChangeAmountProduct={() => {}}
          />
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
                backgroundColor: "gray",
              }}
            >
              <Text size="2">{t(["basket_title"])}</Text>
              <Text size="2">{t(["basket_title"])}</Text>
            </Flex>
            <Separator
              style={{
                width: "100%",
              }}
            />
            <Flex
              pl="4"
              pr="4"
              direction="row"
              justify="between"
              align="center"
              height="50px"
              style={{
                width: "100%",
                backgroundColor: "gray",
              }}
            >
              <Text size="3">{t(["basket_title"])}</Text>
              <Text size="3">{t(["basket_title"])}</Text>
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
