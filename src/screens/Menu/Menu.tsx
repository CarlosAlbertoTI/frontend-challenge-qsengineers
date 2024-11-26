import { Box, Flex, ScrollArea } from "@radix-ui/themes";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

import Basket from "@components/Basket/Basket";
import CustomButton from "@components/CustomButton/CustomButton";
import Header from "@components/Header/Header";
import Search from "@components/Search/Search";
import ListProducts from "@components/ListProducts/ListProducts";
import MinusOrAdd from "@components/MinusOrAdd/MinusOrAdd";

import ContainerFullScreen from "@components/ContainerFullScreen/ContainerFullScreen";

import ProductModal from "@components/ProductModal/ProductModal";
import ProductModalContent from "@components/ProductModal/ProductModal/ProductModalContent";

import { getProductsRequest } from "@src/services/api/getProductsRequest";

import { AppSettingsContext } from "@src/contexts/AppSettings/AppSettingsProvider";
import { ProductsContext } from "@src/contexts/Products/ProductsProvider";
import { BasketContext } from "@src/contexts/Basket/BasketProvider";
import { ProductSelectedContext } from "@src/contexts/ProductSelected/ProductSelected";

const MenuScreen: React.FC = () => {
  const navigate = useNavigate();

  const {
    selectedProduct,
    amountOfSelectedProduct,
    changeAmountOfSelectProduct,
    resetSelectedProduct,
  } = useContext(ProductSelectedContext);
  const { dispatch, state } = useContext(BasketContext);
  const { addProductList } = useContext(ProductsContext);
  const { setting } = useContext(AppSettingsContext);
  const { webSettings } = setting;

  const [loadingWebSettings, setLoadingWebSettings] = useState(true);
  const [isBasketVisibleOnMobile, setIsBasketVisibleOnMobile] = useState(false);
  const [
    showChooseProductCardOnFullScreen,
    setShowChooseProductCardOnFullScreen,
  ] = useState(false);

  const handleAddSelectedProductToBasket = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: { product: selectedProduct, quantity: amountOfSelectedProduct },
    });
  };

  const handlePlusAmountOfSelectedProduct = () =>
    changeAmountOfSelectProduct(amountOfSelectedProduct + 1);
  const handleMinusAmountOfSelectedProduct = () => {
    changeAmountOfSelectProduct(amountOfSelectedProduct - 1);
  };

  useEffect(() => {
    setTimeout(() => {
      if (Object.keys(setting).length === 0) {
        navigate("/");
      } else {
        setLoadingWebSettings(false);
      }
    }, 2000);
  }, [setting, navigate]);

  useEffect(() => {
    const getProductsOfStore = async () => {
      const response = await getProductsRequest();
      if (response) {
        addProductList(response);
      }
    };

    getProductsOfStore();

    return () => {};
  }, []);

  return (
    <Box width="100vw" height="100vh" position="relative">
      {!loadingWebSettings && (
        <>
          <ScrollArea
            style={{
              position: "relative",
              paddingBottom:'30px'
            }}
          >
            <Box
              style={{
                backgroundColor: webSettings?.backgroundColour,
                overflow: "scroll",
              }}
              position="relative"
            >
              <ProductModal />
              <Header />
              <Box width={{ md: "70%" }} m="auto">
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
                    width={{ md: "50%", xl: "50%" }}
                    p="5"
                    flexGrow="2"
                    style={{
                      backgroundColor: "#FFFFFF",
                      boxShadow: "0px 2px 14px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <ListProducts
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
              label={`Your Basket - ${state.items.length} Item`}
              hasBlur
              height="50px"
              onClick={() =>
                setIsBasketVisibleOnMobile(!isBasketVisibleOnMobile)
              }
            />
          </Box>
        </>
      )}
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
            onCloseContainer={() => {
              resetSelectedProduct();
              setShowChooseProductCardOnFullScreen(
                !showChooseProductCardOnFullScreen
              );
            }}
            onPressBottomButton={() => {
              resetSelectedProduct();
              handleAddSelectedProductToBasket();
              setShowChooseProductCardOnFullScreen(
                !showChooseProductCardOnFullScreen
              );
            }}
            buttonTitle={`Add to Order • R$${
              selectedProduct.price * amountOfSelectedProduct
            }`}
            hasActions
            bottomActions={[
              <MinusOrAdd
                width="150px"
                sizeIcon={35}
                sizeText="25px"
                amountProduct={amountOfSelectedProduct}
                colorOfMinusIcon="#DADADA"
                onPlusChangeAmountProduct={handlePlusAmountOfSelectedProduct}
                onMinusChangeAmountProduct={handleMinusAmountOfSelectedProduct}
                type={"row"}
              />,
            ]}
            buttonHeight="100px"
          >
            <ProductModalContent />
          </ContainerFullScreen>
        </Box>
      )}
    </Box>
  );
};

export default MenuScreen;
