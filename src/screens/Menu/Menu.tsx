import React, { useEffect, useState } from "react";
import { Box, Flex } from "@radix-ui/themes";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useTheme } from "styled-components";
import { useQuery } from "@tanstack/react-query";

import Basket from "@components/Basket/Basket";
import Header from "@components/Header/Header";
import Search from "@components/Search/Search";
import ListProducts from "@components/ListProducts/ListProducts";
import CustomButtonWithBlur from "@components/CustomButtonWithBlur/CustomButton";
import BasketModal from "@components/Modals/BasketModal/BasketModal";
import CustomButton from "@src/components/CustomButton/CustomButton";
import ExtraInstructionsModal from "@components/Modals/ExtraInstructionsModal/ExtraInstructionsModal";

import { RootState } from "@src/store";

import { useTranslation } from "@hooks/useTranslation";

import MockMenu from "./MockMenu";

const MenuScreen: React.FC = () => {
  const webSettings = useSelector((state: RootState) => state.webSettings);
  const { items } = useSelector((state: RootState) => state.basket);

  const { colors } = useTheme();
  const navigate = useNavigate();
  const { t } = useTranslation(["Basket"]);

  const [searchProductName, setSearchProductName] = useState("");

  const [isBasketVisibleOnMobile, setIsBasketVisibleOnMobile] = useState(false);

  const handleShowBasketModal = () =>
    setIsBasketVisibleOnMobile((prev) => !prev);

  const { isPending } = useQuery({
    queryKey: ["settings"],
  });

  const checkIfBasketIsVisibleOnMobile = isBasketVisibleOnMobile
    ? "none"
    : "inline";

  useEffect(() => {
    if (webSettings.id === 0) {
      navigate("/");
    }
  }, [isPending]);

  return (
    <Box height="100vh">
      {isPending && <MockMenu />}
      {!isPending && (
        <>
          <Box>
            <Box
              style={{
                margin: "0",
                padding: "0",
                backgroundColor: webSettings?.webSettings.backgroundColour,
              }}
            >
              <Header />
              <Box width={{ md: "85%" }} m="auto">
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
                    backgroundColor: colors.main,
                    margin: "10px auto 20px auto",
                    marginTop: "10px",
                  }}
                >
                  <Box
                    display={{
                      initial: checkIfBasketIsVisibleOnMobile,
                      md: "inline",
                    }}
                    minWidth={{ initial: "95vw", md: "65%" }}
                    p="5"
                    flexGrow="2"
                    style={{
                      backgroundColor: "#FFFFFF",
                      boxShadow: "0px 2px 14px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <ListProducts productNameToBeSearched={searchProductName} />
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
                <Box
                  style={{
                    paddingBottom: "130px",
                  }}
                  display={{ initial: "block", md: "none" }}
                  width={{ initial: "90%" }}
                  m="auto"
                >
                  <CustomButton
                    style={{
                      border: `1px solid ${colors.main}}`,
                      borderRadius: "20px",
                      backgroundColor: "grey",
                    }}
                    label={"View Allergic information"}
                  />
                </Box>
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
                initial: checkIfBasketIsVisibleOnMobile,
                md: "none",
              }}
            >
              <CustomButtonWithBlur
                label={`${t(["basket_title"])} - ${items.length} Item`}
                hasBlur
                height="50px"
                onClick={handleShowBasketModal}
              />
            </Box>
          </Box>
          <BasketModal
            isOpenModal={isBasketVisibleOnMobile}
            setCloseModal={handleShowBasketModal}
          />
          <ExtraInstructionsModal />
        </>
      )}
    </Box>
  );
};

export default MenuScreen;
