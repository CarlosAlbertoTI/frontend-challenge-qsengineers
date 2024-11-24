import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  IconButton,
  Separator,
  Text,
} from "@radix-ui/themes";

import { useTranslation } from "@hooks/useTranslation";

interface BasketProps {
  showTitle?: boolean;
  showBottomButton?: boolean;
}

const Basket: React.FC<BasketProps> = ({
  showTitle = true,
  showBottomButton = false,
}) => {
  const { t } = useTranslation(["Basket"]);
  const data = {
    id: 14730,
    name: "FE TEST",
    type: "MENU",
    collapse: 0,
    sections: [
      {
        id: 242403,
        name: "Burgers",
        description: null,
        position: 0,
        visible: 1,
        images: [
          {
            id: 1550,
            image:
              "https://preodemo.gumlet.io/usr/venue/7602/section/646fbe4c64a6f.png",
          },
        ],
        items: [
          {
            id: 1625701,
            name: "Hard Core",
            description:
              "180g angus beef burger, with shredded ribs, gruyere cheese, caramelized onions, lettuce, confit tomato, special house bread, served with fried cassava and passion fruit chipotle.",
            alcoholic: 0,
            price: 33.0,
            position: 0,
            visible: 1,
            availabilityType: "AVAILABLE_NOW",
            sku: "I1625701",
            images: [
              {
                id: 108305,
                image:
                  "https://preodemo.gumlet.io/usr/venue/7602/menuItem/646fbdc8cecca.png",
              },
            ],
            available: true,
          },
          {
            id: 1625702,
            name: "Smash Brooks",
            description:
              "100g pressed hamburger, mozzarella cheese, pickles, red onion, grilled bacon and traditional Heinz mayonnaise.",
            alcoholic: 0,
            price: 0.0,
            position: 1000,
            visible: 1,
            availabilityType: "AVAILABLE_NOW",
            sku: "I1625702",
            modifiers: [
              {
                id: 1101202,
                name: "Choose a size",
                minChoices: 1,
                maxChoices: 1,
                items: [
                  {
                    id: 7476054,
                    name: "1 meat",
                    price: 33.0,
                    maxChoices: 1,
                    position: 0,
                    visible: 1,
                    availabilityType: "AVAILABLE_NOW",
                    available: true,
                  },
                  {
                    id: 7476055,
                    name: "2 meats",
                    price: 35.0,
                    maxChoices: 1,
                    position: 1000,
                    visible: 1,
                    availabilityType: "AVAILABLE_NOW",
                    qty: 1,
                    available: true,
                  },
                  {
                    id: 7476056,
                    name: "3 meats",
                    price: 37.0,
                    maxChoices: 1,
                    position: 2000,
                    visible: 1,
                    availabilityType: "AVAILABLE_NOW",
                    available: true,
                  },
                ],
              },
            ],
            images: [
              {
                id: 108307,
                image:
                  "https://preodemo.gumlet.io/usr/venue/7602/menuItem/646fbe01b3373.png",
              },
            ],
            available: true,
          },
          {
            id: 1625703,
            name: "Ogro Burger",
            description:
              "180g angus beef burger, homemade molasses barbecue with golden bacon cubes, mozzarella cheese and homemade roasted garlic mayonnaise.",
            alcoholic: 0,
            price: 33.0,
            position: 2000,
            visible: 1,
            availabilityType: "AVAILABLE_NOW",
            sku: "I1625703",
            images: [
              {
                id: 108309,
                image:
                  "https://preodemo.gumlet.io/usr/venue/7602/menuItem/646fbe292998e.png",
              },
            ],
            available: true,
          },
        ],
      },
      {
        id: 242404,
        name: "Drinks",
        position: 1000,
        visible: 1,
        images: [
          {
            id: 1551,
            image:
              "https://preodemo.gumlet.io/usr/venue/7602/section/646fbe5dc1bf3.png",
          },
        ],
        items: [
          {
            id: 1625705,
            name: "Caipirinha",
            alcoholic: 0,
            price: 13.0,
            position: 0,
            visible: 1,
            availabilityType: "AVAILABLE_NOW",
            sku: "I1625705",
            available: true,
          },
          {
            id: 1004123,
            name: "Red Label",
            alcoholic: 0,
            price: 13.0,
            position: 1000,
            availabilityType: "AVAILABLE_NOW",
            sku: "I1004123",
            available: true,
          },
          {
            id: 1004122,
            name: "Smirnoff",
            alcoholic: 0,
            price: 10.0,
            position: 2000,
            availabilityType: "AVAILABLE_NOW",
            sku: "I1004122",
            available: true,
          },
          {
            id: 1625706,
            name: "Pink Lemonade",
            alcoholic: 0,
            price: 12.0,
            position: 3000,
            availabilityType: "AVAILABLE_NOW",
            sku: "I1004123",
            available: true,
          },
        ],
      },
      {
        id: 242677,
        name: "Desserts",
        position: 2000,
        images: [
          {
            id: 1552,
            image:
              "https://preodemo.gumlet.io/usr/venue/7602/section/646fbe93cb615.png",
          },
        ],
        items: [
          {
            id: 1625704,
            name: "Nutella",
            alcoholic: 0,
            price: 18.9,
            position: 0,
            visible: 1,
            availabilityType: "AVAILABLE_NOW",
            images: [
              {
                id: 108310,
                image:
                  "https://preodemo.gumlet.io/usr/venue/7602/menuItem/646fbf0bec8fe.png",
              },
            ],
            available: true,
          },
        ],
      },
    ],
  };

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
                width: "100%",
                backgroundColor: "gray",
              }}
            >
              <Text size="4">{t(["basket_title"])}</Text>
            </Box>
          )}
          <Box pl="5" pr="5" pb="4">
            <Box>
              <Flex direction="row" justify="between">
                <Flex direction="column" justify="start" mb="3">
                  <Text size="2" weight="medium">
                    {data.sections[0].items[0].name}
                  </Text>
                  <Text size="1" weight="regular">
                    {data.sections[0].items[0].name}
                  </Text>
                </Flex>
                <Text size="1" className="text-lg">
                  ${data.sections[0].items[0].price.toFixed(2)}
                </Text>
              </Flex>
              <Flex direction="row" justify="between">
                <Box>
                  <IconButton size="1" radius="full" variant="soft">
                    +
                  </IconButton>
                  <Text ml={"2"} mr={"2"}>
                    1
                  </Text>
                  <IconButton size="1" radius="full" variant="soft">
                    -
                  </IconButton>
                </Box>
                <Text className="text-lg">
                  ${data.sections[0].items[0].price.toFixed(2)}
                </Text>
              </Flex>
              {/* <p className="text-gray-700 text-base">{t(["basket_empty"])}</p> */}
            </Box>
          </Box>
          {!showTitle && (
            <Separator
              mb="4"
              mt="2"
              style={{
                width: "100%",
              }}
            />
          )}
          <Box pl="5" pr="5" pb="4">
            <Box>
              <Flex direction="row" justify="between">
                <Flex direction="column" justify="start" mb="3">
                  <Text size="2" weight="medium">
                    {data.sections[0].items[0].name}
                  </Text>
                  <Text size="1" weight="regular">
                    {data.sections[0].items[0].name}
                  </Text>
                </Flex>
                <Text size="1" className="text-lg">
                  ${data.sections[0].items[0].price.toFixed(2)}
                </Text>
              </Flex>
              <Flex direction="row" justify="between">
                <Box>
                  <IconButton size="1" radius="full" variant="soft">
                    +
                  </IconButton>
                  <Text ml={"2"} mr={"2"}>
                    1
                  </Text>
                  <IconButton size="1" radius="full" variant="soft">
                    -
                  </IconButton>
                </Box>
                <Text className="text-lg">
                  ${data.sections[0].items[0].price.toFixed(2)}
                </Text>
              </Flex>
              {/* <p className="text-gray-700 text-base">{t(["basket_empty"])}</p> */}
            </Box>
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
        {showBottomButton && (
          <Container
            style={{
              position: "absolute",
              width: "100%",
              height: "100px",
              bottom: 0,
              left: 0,
            }}
          >
            <Container
              style={{
                position: "absolute",
                width: "100%",
                height: "100px",
                top: 0,
                left: 0,
                zIndex: 1,
              }}
            >
              <Box
                style={{
                  width: "100%",
                  height: "100px",
                  backgroundColor: "#ffffea",
                  opacity: 1,
                  filter: "blur(10px)",
                }}
              ></Box>
            </Container>

            <Container
              style={{
                position: "absolute",
                width: "100%",
                height: "50px",
                top: 0,
                left: 0,
                zIndex: 2,
              }}
            >
              <Flex direction="column" justify="center" align="center">
                <Flex width="90%" justify="center">
                  <Button
                    radius="full"
                    style={{
                      width: "100%",
                    }}
                  >
                    Checkout now
                  </Button>
                </Flex>
              </Flex>
            </Container>
          </Container>
        )}
      </>
    );
  };

  return (
    <>
      {/* {mobileMode && (
        <Container
          size="1"
          width="100vw"
          height="100vh !important"
          position="absolute"
          top="0"
        >
          <BasketComponentContent />
        </Container>
      )} */}
      {/* {!mobileMode && ( */}
      {/* <Box
          display={{ initial: mobileMode ? "inline" : "none", md: "inline" }}
          width={mobileMode ? "100%" : "40%"}
          minWidth="35%"
        > */}
      <BasketComponentContent />
      {/* </Box> */}
      {/* )} */}
      {/* <Box
        display={{ initial: mobileMode ? "inline" : "none", md: "inline" }}
        width={mobileMode ? "100%" : "40%"}
        minWidth="35%"
      >
        <BasketComponentContent /> */}
      {/* <Flex
        flexGrow="1"
        direction="column"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <Box
          height="50px"
          pt="1"
          mb="4"
          pl="5"
          style={{
            width: "100%",
            backgroundColor: "gray",
          }}
        >
          <Text size="4">{t(["basket_title"])}</Text>
        </Box>
        <Box pl="5" pr="5" pb="4" flexGrow="1">
          <Box>
            <Flex direction="row" justify="between">
              <Flex direction="column" justify="start" mb="3">
                <Text size="2" weight="medium">
                  {data.sections[0].items[0].name}
                </Text>
                <Text size="1" weight="regular">
                  {data.sections[0].items[0].name}
                </Text>
              </Flex>
              <Text size="1" className="text-lg">
                ${data.sections[0].items[0].price.toFixed(2)}
              </Text>
            </Flex>
            <Flex direction="row" justify="between">
              <Box>
                <IconButton size="1" radius="full" variant="soft">
                  +
                </IconButton>
                <Text ml={"2"} mr={"2"}>
                  1
                </Text>
                <IconButton size="1" radius="full" variant="soft">
                  -
                </IconButton>
              </Box>
              <Text className="text-lg">
                ${data.sections[0].items[0].price.toFixed(2)}
              </Text>
            </Flex>
            {/* <p className="text-gray-700 text-base">{t(["basket_empty"])}</p> */}
      {/* </Box> */}
      {/* </Box> */}
      {/* <Box>
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
      </Flex> */}
      {/* </Box> */}
    </>
  );
};

export default Basket;
