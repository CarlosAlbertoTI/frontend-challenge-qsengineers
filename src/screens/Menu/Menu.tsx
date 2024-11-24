import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  ScrollArea,
  Separator,
  Tabs,
  Text,
} from "@radix-ui/themes";
import { IoIosClose } from "react-icons/io";

import Header from "@components/Header/Header";
import Search from "@components/Search/Search";
import Basket from "@components/Basket/Basket";
import Collapse from "@components/Collapse/Collapse";
import ProductCard from "@components/ProductCard/ProductCard";
import ProductModal from "@components/ProductModal/ProductModal";
import ContainerFullScreen from "@components/ContainerFullScreen/ContainerFullScreen";
import axiosInstance from "@src/libs/axios/config";

const MenuScreen: React.FC = () => {
  const [isBasketVisibleOnMobile, setIsBasketVisibleOnMobile] = useState(false);

  useEffect(() => {
    const requestToData = async () => {
      const { data } = await axiosInstance.get("/venue/9");
      console.log(data);
    };

    requestToData();
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
          style={{ backgroundColor: "#ffffff", overflow: "scroll" }}
          position="relative"
        >
          <ProductModal />
          <Header />
          <Box width={{ initial: "100%", md: "70%", xl: "70%" }} m="auto">
            <Search />
            <Flex
              style={{ backgroundColor: "lightgray" }}
              align="start"
              justify="between"
              gap="3"
              p="5"
            >
              <Box
                display={{
                  initial: isBasketVisibleOnMobile ? "none" : "inline",
                  md: "inline",
                }}
                p="5"
                flexGrow="2"
                style={{ backgroundColor: "white" }}
              >
                <Tabs.Root defaultValue="account">
                  <ScrollArea
                    scrollbars="horizontal"
                    style={{ height: 150, minWidth: 150 }}
                  >
                    <Tabs.List>
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
                            height: "100px",
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

                          <Text>Account</Text>
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
                        />
                        <ProductCard
                          title="Burgers"
                          description="180g angus beef burger, plus ribs, quijo mussarela, picles, cebola"
                          price="R$ 2.85"
                          productAlreadyChooseAndAmount={0}
                          imageUrl="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                        />
                        <ProductCard
                          title="Burgers"
                          description="180g angus beef burger, plus ribs, quijo mussarela, picles, cebola"
                          price="R$ 2.85"
                          productAlreadyChooseAndAmount={0}
                          imageUrl="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                        />
                        <ProductCard
                          title="Burgers"
                          description="180g angus beef burger, plus ribs, quijo mussarela, picles, cebola"
                          price="R$ 2.85"
                          productAlreadyChooseAndAmount={0}
                          imageUrl="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                        />
                        <ProductCard
                          title="Burgers"
                          description="180g angus beef burger, plus ribs, quijo mussarela, picles, cebola"
                          price="R$ 2.85"
                          productAlreadyChooseAndAmount={0}
                          imageUrl="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                        />
                        <ProductCard
                          title="Burgers"
                          description="180g angus beef burger, plus ribs, quijo mussarela, picles, cebola"
                          price="R$ 2.85"
                          productAlreadyChooseAndAmount={0}
                          imageUrl="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                        />
                        <ProductCard
                          title="Burgers"
                          description="180g angus beef burger, plus ribs, quijo mussarela, picles, cebola"
                          price="R$ 2.85"
                          productAlreadyChooseAndAmount={0}
                          imageUrl="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
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
        <Container
          style={{
            position: "absolute",
            width: "100%",
            height: "50px",
            bottom: 2,
            left: 0,
          }}
        >
          <Container
            style={{
              position: "absolute",
              width: "100%",
              height: "25px",
              bottom: 0,
              left: 0,
              zIndex: 1,
            }}
          >
            <Box
              style={{
                width: "100%",
                height: "50px",
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
              <Box
                style={{
                  width: "90%",
                }}
              >
                <Flex justify="center">
                  <Button
                    onClick={() =>
                      setIsBasketVisibleOnMobile(!isBasketVisibleOnMobile)
                    }
                    radius="full"
                    style={{
                      width: "100%",
                    }}
                  >
                    Your Basket - 1 item
                  </Button>
                </Flex>
              </Box>
            </Flex>
          </Container>
        </Container>
      </Box>
      {isBasketVisibleOnMobile && (
        <Box display={{ initial: "inline", md: "none" }}>
          <ContainerFullScreen>
            <Flex
              height="90px"
              style={{
                backgroundColor: "lightgrey",
              }}
              direction="row"
              justify="between"
              align="center"
            >
              <Box
                style={{
                  width: "50px",
                }}
              />
              <Heading size="7">Basket</Heading>
              <Box pr="4">
                <IoIosClose
                  size="30"
                  onClick={() =>
                    setIsBasketVisibleOnMobile(!isBasketVisibleOnMobile)
                  }
                />
              </Box>
            </Flex>
            <Separator
              style={{
                width: "100%",
                height: "2px",
                backgroundColor: "lightgrey",
              }}
              mb="4"
            />
            <Basket showTitle={false} showBottomButton />
          </ContainerFullScreen>
        </Box>
      )}
    </Box>
  );
};

export default MenuScreen;
