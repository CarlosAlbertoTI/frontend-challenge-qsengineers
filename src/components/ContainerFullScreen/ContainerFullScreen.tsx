import React from "react";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
} from "@radix-ui/themes";
import { IoIosClose, IoIosCloseCircleOutline } from "react-icons/io";

interface ContainerFullScreenProps {
  titleType: "image" | "text";
  onCloseContainer: () => void;
  children: React.ReactNode;
  buttonTitle?: string;
  bottomActions?: [React.ReactNode];
  hasBottomButton?: boolean;
  onPressBottomButton?: () => void;
}

const ContainerFullScreen: React.FC<ContainerFullScreenProps> = ({
  titleType = "text",
  onCloseContainer,
  children,
  buttonTitle,
  bottomActions = [],
  hasBottomButton = true,
  onPressBottomButton,
}) => {
  return (
    <Container
      style={{
        position: "absolute",
        width: "100vw",
        height: "100vh",
        top: 0,
        zIndex: 10,
        backgroundColor: "white",
      }}
    >
      <Container
        style={{
          width: "100vw",
        }}
      >
        {titleType === "image" && (
          <>
            <Box position="absolute" style={{ zIndex: 10 }} top="5" right="4">
              <IoIosCloseCircleOutline
                onClick={onCloseContainer}
                size={40}
                color="white"
              />
            </Box>
          </>
        )}
        {titleType === "text" && (
          <>
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
                <IoIosClose size="30" onClick={onCloseContainer} />
              </Box>
            </Flex>
          </>
        )}
        {children}
        {hasBottomButton && (
          <>
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
                  <Flex
                    mt="2"
                    mb="2"
                    direction="row"
                    justify="center"
                    align="center"
                  >
                    {bottomActions}
                  </Flex>
                  <Box
                    style={{
                      width: "90%",
                    }}
                  >
                    <Flex justify="center">
                      <Button
                        onClick={onPressBottomButton}
                        radius="full"
                        style={{
                          width: "100%",
                        }}
                      >
                        {buttonTitle}
                      </Button>
                    </Flex>
                  </Box>
                </Flex>
              </Container>
            </Container>
          </>
        )}
      </Container>
    </Container>
  );
};

export default ContainerFullScreen;
