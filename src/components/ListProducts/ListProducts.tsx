import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import {
  Box,
  Heading,
  Flex,
  Skeleton,
  Separator,
  Container,
  Text,
  Avatar,
  ScrollArea,
} from "@radix-ui/themes";
import { RootState } from "@src/store";
import { getProductsRequest } from "@services/api/getProductsRequest";
import { setMenuValue } from "@store/menu";
import ProductCard from "@components/ProductCard/ProductCard";
import { Product, Section } from "@src/store/menu/types";
import useInViewPort from "@src/hooks/useInViewPort";
import Collapse from "../Collapse/Collapse";

const ListProducts: React.FC<{
  productNameToBeSearched: string;
}> = ({ productNameToBeSearched }) => {
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [slideIndex, setSlideIndex] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);

  const sliderRef = useRef<Slider | null>(null);
  const productRefs = useRef<(HTMLDivElement | null)[]>([]);

  // const webSetting = useSelector((state: RootState) => state.webSettings);
  const menuProducts = useSelector((state: RootState) => state.menu);
  const { items } = useSelector((state: RootState) => state.basket);

  const dispatch = useDispatch();

  // const { webSettings } = webSetting;

  const { sections } = menuProducts;

  const handleClickOnSectionIcon = (index: number) => {
    const currentRef = productRefs.current[index];
    if (currentRef) {
      currentRef.scrollIntoView({ behavior: "smooth", block: "center" });
      setSlideIndex((_: number) => index);
    }
  };

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

  const checkIfSearchIsEmpty = productNameToBeSearched.length == 0;

  const settings = {
    vertical: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: items.length,
    slidesToScroll: items.length,
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
      {loadingProducts && (
        <>
          <Flex direction="row" gap="3" justify="between">
            <Skeleton height="200px">
              <Box width={{ initial: "90%" }} height="200px" mb="3"></Box>
            </Skeleton>
            <Skeleton height="200px">
              <Box width={{ initial: "90%" }} height="200px" mb="3"></Box>
            </Skeleton>
            <Skeleton height="200px">
              <Box width={{ initial: "90%" }} height="200px" mb="3"></Box>
            </Skeleton>
          </Flex>
          <Separator style={{ width: "100%" }} />
          <Box mt="4">
            <Container size="1">
              <Flex direction="row" justify="between">
                <Flex direction="column" gap="2">
                  <Text>
                    <Skeleton>Lorem ipsum dolor sit amet.</Skeleton>
                  </Text>

                  <Skeleton>
                    <Text wrap="wrap">
                      Lorem ipsum dolor sit amet Lorem ipsum{" "}
                    </Text>
                  </Skeleton>
                </Flex>
                <Skeleton width="78px" height="78px" />
              </Flex>
            </Container>
          </Box>
          <Box mt="4">
            <Container size="1">
              <Flex direction="row" justify="between">
                <Flex direction="column" gap="2">
                  <Text>
                    <Skeleton>Lorem ipsum dolor sit amet.</Skeleton>
                  </Text>

                  <Skeleton>
                    <Text wrap="wrap">
                      Lorem ipsum dolor sit amet Lorem ipsum{" "}
                    </Text>
                  </Skeleton>
                </Flex>
                <Skeleton width="78px" height="78px" />
              </Flex>
            </Container>
          </Box>
          <Box mt="4">
            <Container size="1">
              <Flex direction="row" justify="between">
                <Flex direction="column" gap="2">
                  <Text>
                    <Skeleton>Lorem ipsum dolor sit amet.</Skeleton>
                  </Text>

                  <Skeleton>
                    <Text wrap="wrap">
                      Lorem ipsum dolor sit amet Lorem ipsum{" "}
                    </Text>
                  </Skeleton>
                </Flex>
                <Skeleton width="78px" height="78px" />
              </Flex>
            </Container>
          </Box>
        </>
      )}
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
                      <Flex
                        key={section.id}
                        direction="column"
                        align="center"
                        justify="center"
                        gap="5"
                        style={{
                          cursor: "pointer",
                          paddingBottom: "10px",
                          borderBottom: checkIfThisSectionIsSelected
                            ? "3px solid #000"
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
                                ? "2px solid #000"
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
                          <ProductCard
                            numberOrProductOnBasket={1}
                            product={item}
                            onPressMobile={() => {
                              // onPressMobile
                            }}
                          />
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
                          <ListOfSectionProducts
                            productRefs={productRefs}
                            section={section}
                            sectionIndex={sectionIndex}
                            onPressMobile={() => {}}
                            onHandleSectionView={setSlideIndex}
                          />
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
    </>
  );
};

export default ListProducts;

function ListOfSectionProducts({
  productRefs,
  sectionIndex,
  section,
  onPressMobile,
  onHandleSectionView,
}: {
  productRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  section: Section;
  sectionIndex: number;
  onPressMobile: () => void;
  onHandleSectionView: (index: number) => void;
}) {
  const inViewport = useInViewPort(
    { current: productRefs.current[sectionIndex] },
    {
      threshold: 0.8,
    }
  );

  useEffect(() => {
    if (inViewport) {
      onHandleSectionView(sectionIndex);
    }
  }, [inViewport, sectionIndex, onHandleSectionView]);

  return (
    <Box
      id={section.name}
      key={`${sectionIndex}`}
      position="relative"
      overflow="hidden"
      ref={(el) => {
        productRefs.current[sectionIndex] = el;
      }}
    >
      <>
        <Collapse title={section.name}>
          {section.items.map((item: Product) => (
            <Box key={item.id}>
              <ProductCard
                product={item}
                onPressMobile={onPressMobile}
                numberOrProductOnBasket={undefined}
              />
            </Box>
          ))}
        </Collapse>
      </>
    </Box>
  );
}
