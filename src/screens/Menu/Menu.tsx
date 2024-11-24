import { Avatar, Box, Flex, ScrollArea, Tabs, Text } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";

import Basket from "@components/Basket/Basket";
import Collapse from "@components/Collapse/Collapse";
import ContainerFullScreen from "@components/ContainerFullScreen/ContainerFullScreen";
import CustomButton from "@components/CustomButton/CustomButton";
import Header from "@components/Header/Header";
import ProductCard from "@components/ProductCard/ProductCard";
import ProductModal from "@components/ProductModal/ProductModal";
import ProductModalContent from "@components/ProductModal/ProductModal/ProductModalContent";
import Search from "@components/Search/Search";

import axiosInstance from "@libs/axios/config";
import MinusOrAdd from "@src/components/MinusOrAdd/MinusOrAdd";

const MenuScreen: React.FC = () => {
  const [isBasketVisibleOnMobile, setIsBasketVisibleOnMobile] = useState(false);
  const [
    showChooseProductCardOnFullScreen,
    setShowChooseProductCardOnFullScreen,
  ] = useState(false);

  useEffect(() => {
    const request = async () => {
      const { data } = await axiosInstance.get("/venue/9");
      console.info(data);
    };
    request();

    return () => {};
  }, []);

  return (
    <Box width="100vw" height="100vh" position="relative">
      <ScrollArea
        style={{
          position: "relative",
        }}
      >
        <Box
          style={{ backgroundColor: "#EEEEEE", overflow: "scroll" }}
          position="relative"
        >
          <ProductModal />
          <Header />
          <Box width={{ initial: "100%", md: "70%" }} m="auto">
            <Search />
            <Flex
              style={{ backgroundColor: "#F8F9FA" }}
              align="start"
              justify="between"
              gap="3"
              m={{ initial: "0", md: "6" }}
              p={{ initial: "0", md: "5" }}
              mt="2"
            >
              <Box
                display={{
                  initial: isBasketVisibleOnMobile ? "none" : "inline",
                  md: "inline",
                }}
                width={{ initial: "100%", md: "70%", xl: "70%" }}
                p="5"
                flexGrow="2"
                style={{
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0px 2px 14px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Tabs.Root defaultValue="account">
                  <ScrollArea
                    scrollbars="horizontal"
                    style={{ height: 150, minWidth: 150 }}
                  >
                    <Tabs.List color="gray" size="2">
                      <Tabs.Trigger
                        style={{
                          marginLeft: 10,
                          marginRight: 10,
                          width: "60px",
                          height: "140px",
                        }}
                        value="account"
                      >
                        <Flex
                          direction="column"
                          justify="between"
                          align="center"
                          style={{
                            height: "140px",
                          }}
                        >
                          <Avatar
                            style={{
                              width: "85px",
                              height: "85px",
                            }}
                            radius="full"
                            fallback="A"
                            src="https://preodemo.gumlet.io/usr/venue/7602/section/646fbe4c64a6f.png"
                          />
                          <Text mt="5" mb="3" style={{ color: "#121212" }}>
                            Account
                          </Text>
                        </Flex>
                      </Tabs.Trigger>
                    </Tabs.List>
                  </ScrollArea>

                  <Box pt="10">
                    <Collapse title="Burgers">
                      <Tabs.Content value="account">
                        <ProductCard
                          title="Burgers"
                          description="180g angus beef burger, plus ribs, quijo mussarela, picles, cebola"
                          price="R$ 2.85"
                          productAlreadyChooseAndAmount={1}
                          imageUrl="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                          onPressMobile={() =>
                            setShowChooseProductCardOnFullScreen(
                              (prevState) => !prevState
                            )
                          }
                        />
                        <ProductCard
                          title="Burgers"
                          description="180g angus beef burger, plus ribs, quijo mussarela, picles, cebola"
                          price="R$ 2.85"
                          productAlreadyChooseAndAmount={0}
                          imageUrl="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                          onPressMobile={() =>
                            setShowChooseProductCardOnFullScreen(
                              (prevState) => !prevState
                            )
                          }
                        />
                        <ProductCard
                          title="Burgers"
                          description="180g angus beef burger, plus ribs, quijo mussarela, picles, cebola"
                          price="R$ 2.85"
                          productAlreadyChooseAndAmount={0}
                          imageUrl="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                          onPressMobile={() =>
                            setShowChooseProductCardOnFullScreen(
                              (prevState) => !prevState
                            )
                          }
                        />
                        <ProductCard
                          title="Burgers"
                          description="180g angus beef burger, plus ribs, quijo mussarela, picles, cebola"
                          price="R$ 2.85"
                          productAlreadyChooseAndAmount={0}
                          imageUrl="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                          onPressMobile={() =>
                            setShowChooseProductCardOnFullScreen(
                              (prevState) => !prevState
                            )
                          }
                        />
                        <ProductCard
                          title="Burgers"
                          description="180g angus beef burger, plus ribs, quijo mussarela, picles, cebola"
                          price="R$ 2.85"
                          productAlreadyChooseAndAmount={0}
                          imageUrl="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                          onPressMobile={() =>
                            setShowChooseProductCardOnFullScreen(
                              (prevState) => !prevState
                            )
                          }
                        />
                        <ProductCard
                          title="Burgers"
                          description="180g angus beef burger, plus ribs, quijo mussarela, picles, cebola"
                          price="R$ 2.85"
                          productAlreadyChooseAndAmount={0}
                          imageUrl="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                          onPressMobile={() =>
                            setShowChooseProductCardOnFullScreen(
                              (prevState) => !prevState
                            )
                          }
                        />
                        <ProductCard
                          title="Burgers"
                          description="180g angus beef burger, plus ribs, quijo mussarela, picles, cebola"
                          price="R$ 2.85"
                          productAlreadyChooseAndAmount={0}
                          imageUrl="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                          onPressMobile={() =>
                            setShowChooseProductCardOnFullScreen(
                              (prevState) => !prevState
                            )
                          }
                        />
                      </Tabs.Content>
                    </Collapse>
                  </Box>
                </Tabs.Root>
              </Box>
              <Box
                display={{
                  initial: "none",
                  md: "inline",
                }}
                width={"40%"}
                height="100%"
                minWidth="35%"
              >
                <Basket />
              </Box>
            </Flex>
          </Box>
        </Box>
      </ScrollArea>
      <Box
        display={{
          initial: isBasketVisibleOnMobile ? "none" : "inline",
          md: "none",
        }}
      >
        <CustomButton
          label={"Your Basket - 1 Item"}
          hasBlur
          height="55px"
          onClick={() => setIsBasketVisibleOnMobile(!isBasketVisibleOnMobile)}
        />
      </Box>
      {isBasketVisibleOnMobile && (
        <Box display={{ initial: "inline", md: "none" }}>
          <ContainerFullScreen
            title="Basket"
            titleType={"text"}
            
            onCloseContainer={() =>
              setIsBasketVisibleOnMobile(!isBasketVisibleOnMobile)
            }
            titleBackgroundColor="#fff"
            backgroundColor="#F8F9FA"
            buttonTitle="Checkout Now"
          >
            <Basket showTitle={false} showBottomButton />
          </ContainerFullScreen>
        </Box>
      )}
      {showChooseProductCardOnFullScreen && (
        <Box display={{ initial: "inline", md: "none" }}>
          <ContainerFullScreen
            title="Choose your size"
            titleType={"image"}
            onCloseContainer={() =>
              setShowChooseProductCardOnFullScreen(
                !showChooseProductCardOnFullScreen
              )
            }
            buttonTitle="Add to Order • R$11.75"
            hasActions
            bottomActions={[
              <MinusOrAdd
                width="150px"
                sizeIcon={35}
                sizeText="25px"
                amountProduct={1}
                colorOfMinusIcon="#DADADA"
                onPlusChangeAmountProduct={() => {}}
                onMinusChangeAmountProduct={() => {}}
                type={"row"}
              />,
            ]}
            buttonHeight="100px"
          >
            <ProductModalContent
              productName={"teste"}
              productDescription={"teste"}
            />
          </ContainerFullScreen>
        </Box>
      )}
    </Box>
  );
};

export default MenuScreen;
