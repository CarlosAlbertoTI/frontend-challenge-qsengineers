import React, { useEffect, useState } from "react";
import { Box, Flex, ScrollArea } from "@radix-ui/themes";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";

import Basket from "@components/Basket/Basket";
import Header from "@components/Header/Header";
import Search from "@components/Search/Search";
import ListProducts from "@components/ListProducts/ListProducts";
import MinusOrAdd from "@components/MinusOrAdd/MinusOrAdd";
import CustomButtonWithBlur from "@components/CustomButtonWithBlur/CustomButton";

import ContainerFullScreen from "@components/ContainerFullScreen/ContainerFullScreen";

import ProductModal from "@components/Modals/ProductModal/ProductModal";
import ProductModalContent from "@components/Modals/ProductModal/ProductModal/ProductModalContent";

import { getProductsRequest } from "@services/api/getProductsRequest";

import { useTranslation } from "@hooks/useTranslation";

import { AppDispatch, RootState } from "@src/store";
import { setMenuValue } from "@store/menu";
import { addItemToBasket } from "@store/bag";
import BasicModal from "@src/components/Modals/Basic/BasicModal";
// import StickyBox from "react-sticky-box";

const MenuScreen: React.FC = () => {
  const { t } = useTranslation(["Basket"]);

  const webSettings = useSelector((state: RootState) => state.webSettings);
  const { items } = useSelector((state: RootState) => state.basket);

  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  const [loadingWebSettings, setLoadingWebSettings] = useState(true);
  const [isBasketVisibleOnMobile, setIsBasketVisibleOnMobile] = useState(false);
  const [
    showChooseProductCardOnFullScreen,
    setShowChooseProductCardOnFullScreen,
  ] = useState(false);
  const [searchProductName, setSearchProductName] = useState("");

  const handleAddSelectedProductToBasket = () => {
    dispatch(
      addItemToBasket({
        product: selectedProduct,
        quantity: amountOfSelectedProduct,
      })
    );
  };

  // const handlePlusAmountOfSelectedProduct = () =>
  //   changeAmountOfSelectProduct(amountOfSelectedProduct + 1);
  // const handleMinusAmountOfSelectedProduct = () => {
  //   changeAmountOfSelectProduct(amountOfSelectedProduct - 1);
  // };

  useEffect(() => {
    setTimeout(() => {
      if (webSettings.id === 0) {
        navigate("/");
      } else {
        setLoadingWebSettings(false);
      }
    }, 2000);
  }, [webSettings]);

  return (
    <Box height="100vh">
      {!loadingWebSettings && (
        <>
          <Box
            style={{
              margin: "0",
              padding: "0",
              backgroundColor: webSettings?.webSettings.backgroundColour,
            }}
          >
            {/* <BasicModal
              isOpen={true}
              onRequestClose={function (): void {
                throw new Error("Function not implemented.");
              }}
              contentLabel={""}
            /> */}

            <ProductModal />
            <Header />

            <Box width={{ md: "70%" }} m="auto">
              <Search
                searchValue={searchProductName}
                onSearchValue={setSearchProductName}
              />
              <Flex
                p={{ initial: "0", md: "5" }}
                gap="3"
                width={{ md: "93%", initial: "100%" }}
                justify="center"
                position="relative"
                align="start"
                style={{
                  backgroundColor: "#F8F9FA",
                  margin: "10px auto 20px auto",
                  marginTop: "10px",
                }}
              >
                <Box
                  display={{
                    initial: isBasketVisibleOnMobile ? "none" : "inline",
                    md: "inline",
                  }}
                  minWidth={{ initial: "100vw", md: "65%" }}
                  p="5"
                  flexGrow="2"
                  style={{
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0px 2px 14px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <ListProducts
                    productNameToBeSearched={searchProductName}
                    onPressMobile={() =>
                      setShowChooseProductCardOnFullScreen(
                        (prevState) => !prevState
                      )
                    }
                  />
                </Box>

                <Box
                  position="sticky"
                  top="20px"
                  display={{
                    initial: "none",
                    md: "inline",
                  }}
                  width={"80%"}
                  height="100%"
                  minWidth="35%"
                >
                  <Basket />
                </Box>
              </Flex>
            </Box>
          </Box>

          <Box
            style={{
              zIndex: 100,
            }}
            position="fixed"
            bottom="4"
            width="100%"
            display={{
              initial: isBasketVisibleOnMobile ? "none" : "inline",
              md: "none",
            }}
          >
            <CustomButtonWithBlur
              label={`Your Basket - ${items.length} Item`}
              hasBlur
              height="50px"
              onClick={() =>
                setIsBasketVisibleOnMobile(!isBasketVisibleOnMobile)
              }
            />
          </Box>
        </>
      )}{" "}
      {/* {isBasketVisibleOnMobile && (
        <Box display={{ initial: "inline", md: "none" }}>
          <ContainerFullScreen
            title={t("Carrinho")}
            titleType={"text"}
            onCloseContainer={() =>
              setIsBasketVisibleOnMobile(!isBasketVisibleOnMobile)
            }
            titleBackgroundColor="#fff"
            backgroundColor="#F8F9FA"
            buttonTitle={t("backet_checkout")}
          >
            <Basket showTitle={false} showBottomButton />
          </ContainerFullScreen>
        </Box>
      )} */}
    </Box>
  );
};

export default MenuScreen;
