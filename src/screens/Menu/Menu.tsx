import { Box, Flex, ScrollArea } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";

import Basket from "@components/Basket/Basket";
import CustomButton from "@components/CustomButton/CustomButton";
import Header from "@components/Header/Header";
import Search from "@components/Search/Search";
import ListProducts from "@components/ListProducts/ListProducts";
import MinusOrAdd from "@components/MinusOrAdd/MinusOrAdd";

import ContainerFullScreen from "@components/ContainerFullScreen/ContainerFullScreen";

import ProductModal from "@components/ProductModal/ProductModal";
import ProductModalContent from "@components/ProductModal/ProductModal/ProductModalContent";

import axiosInstance from "@libs/axios/config";

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
                <ListProducts
                  data={[]}
                  onPressMobile={() =>
                    setShowChooseProductCardOnFullScreen(
                      (prevState) => !prevState
                    )
                  }
                />
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
