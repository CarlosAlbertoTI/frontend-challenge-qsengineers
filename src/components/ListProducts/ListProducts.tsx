import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import {
  Box,
  Heading,
  Flex,
  Avatar,
  ScrollArea,
} from "@radix-ui/themes";

import { RootState } from "@src/store";
import { setMenuValue } from "@store/menu";
import { Product, Section } from "@store/menu/types";

import ProductCard from "@components/ProductCard/ProductCard";
import ProductModal from "@components/Modals/ProductModal/ProductModal";

import { getProductsRequest } from "@services/api/getProductsRequest";

import { ListOfSectionProducts } from "./ListOfSectionProducts";
import MockListOfProducts from "./MockListOfProducts";

const ListProducts: React.FC<{
  productNameToBeSearched: string;
}> = ({ productNameToBeSearched }) => {
  const [showProductModal, setShowProductModal] = useState(false);

  const [loadingProducts, setLoadingProducts] = useState(true);
  const [slideIndex, setSlideIndex] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);

  const sliderRef = useRef<Slider | null>(null);
  const productRefs = useRef<(HTMLDivElement | null)[]>([]);

  const webSetting = useSelector((state: RootState) => state.webSettings);
  const menuProducts = useSelector((state: RootState) => state.menu);

  const dispatch = useDispatch();

  const { webSettings } = webSetting;

  const { sections } = menuProducts;

  const handleClickOnSectionIcon = (index: number) => {
    const currentRef = productRefs.current[index];
    if (currentRef) {
      currentRef.scrollIntoView({ behavior: "smooth", block: "end" });
      setSlideIndex(() => index);
    }
  };

  const checkIfSearchIsEmpty = productNameToBeSearched.length == 0;

  const findProductsByName =
    productNameToBeSearched.length > 0
      ? sections
          .flatMap((item) => item.items)
          .filter((product) =>
            product.name
              .toLowerCase()
              .includes(productNameToBeSearched.toLowerCase())
          )
      : [];

  const countAmountOfSectionsToBeShown = checkIfSearchIsEmpty
    ? productNameToBeSearched.length
    : sections.reduce((sum, section) => {
        return section.visible ? sum + 1 : sum;
      }, 0);

  const settings = {
    vertical: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: countAmountOfSectionsToBeShown,
    slidesToScroll: countAmountOfSectionsToBeShown,
    swipeToSlide: true,
    adaptiveHeight: true,
    verticalSwiping: true,
    afterChange: () => {
      setUpdateCount(updateCount + 1);
    },
    beforeChange: (_: number, next: number) => setSlideIndex(next),
  };

  useEffect(() => {
    setLoadingProducts(true);

    const getProductsOfStore = async () => {
      const response = await getProductsRequest();
      if (response) {
        dispatch(setMenuValue(response));
      }
    };

    getProductsOfStore();

    setLoadingProducts(false);
    return () => {};
  }, []);

  return (
    <>
      {loadingProducts && <MockListOfProducts />}
      {!loadingProducts && (
        <Flex direction="column" justify="start">
          {checkIfSearchIsEmpty && (
            <Box
              position="sticky"
              style={{ backgroundColor: "white", zIndex: 10 }}
              top="0"
              mb="5"
            >
              <ScrollArea scrollbars="horizontal">
                <Flex gap="7" p="2" pt="5">
                  {sections.map((section, index: number) => {
                    const checkIfThisSectionIsSelected = index == slideIndex;
                    return (
                      <Box key={section.id}>
                        {section.visible && (
                          <Flex
                            direction="column"
                            align="center"
                            justify="center"
                            gap="5"
                            style={{
                              cursor: "pointer",
                              paddingBottom: "10px",
                              borderBottom: checkIfThisSectionIsSelected
                                ? `3px solid ${webSettings.primaryColour}`
                                : "",
                            }}
                            onClick={() => handleClickOnSectionIcon(index)}
                          >
                            <Box>
                              <Avatar
                                radius="full"
                                style={{
                                  width: "100px",
                                  height: "100px",
                                  padding: "2px",
                                  border: checkIfThisSectionIsSelected
                                    ? `2px solid ${webSettings.primaryColour}`
                                    : "",
                                }}
                                src={section.images?.[0]?.image}
                                fallback={""}
                              />
                            </Box>
                            <Box>
                              <Heading size="3">{section.name}</Heading>
                            </Box>
                          </Flex>
                        )}
                      </Box>
                    );
                  })}
                </Flex>
              </ScrollArea>
            </Box>
          )}
          <Box style={{ zIndex: 2 }} pb="10">
            <Box
              overflow="hidden"
              mb={{ initial: "9", md: "0" }}
              style={{
                width: "99%",
              }}
              className="slider-container"
            >
              <Slider
                ref={(slider) => {
                  sliderRef.current = slider;
                }}
                {...settings}
              >
                {!checkIfSearchIsEmpty && (
                  <>
                    {findProductsByName.map((item: Product) => {
                      return (
                        <Box key={item.id}>
                          {item.visible && item.available && (
                            <ProductCard
                              product={item}
                              onPressMobile={() =>
                                setShowProductModal((prev) => !prev)
                              }
                            />
                          )}
                        </Box>
                      );
                    })}
                  </>
                )}
                {checkIfSearchIsEmpty && (
                  <>
                    {sections.map((section: Section, sectionIndex: number) => {
                      return (
                        <Box key={section.id} mb="5">
                          {section.visible && (
                            <ListOfSectionProducts
                              productRefs={productRefs}
                              section={section}
                              sectionIndex={sectionIndex}
                              onPressMobile={() =>
                                setShowProductModal((prev) => !prev)
                              }
                              onHandleSectionView={setSlideIndex}
                            />
                          )}
                        </Box>
                      );
                    })}
                  </>
                )}
              </Slider>
            </Box>
          </Box>
        </Flex>
      )}
      <ProductModal
        isOpenModal={showProductModal}
        setCloseModal={() => setShowProductModal((prev) => !prev)}
      />
    </>
  );
};

export default ListProducts;
