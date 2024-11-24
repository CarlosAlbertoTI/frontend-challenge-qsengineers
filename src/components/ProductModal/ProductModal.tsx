import React from "react";
import {
  Box,
  Dialog,
  Container,
  Flex,
  Text,
  Button,
  IconButton,
  VisuallyHidden,
} from "@radix-ui/themes";
import { IoIosCloseCircleOutline } from "react-icons/io";
import ProductModalContent from "./ProductModal/ProductModalContent";

const ProductModal: React.FC = () => {
  return (
    <Box
      maxWidth="100%"
      width={{ initial: "100vw", md: "70%" }}
      height="100%"
      maxHeight="100%"
    >
      <Dialog.Content
        height="100%"
        maxWidth="100%"
        width={{ initial: "100%", md: "70%" }}
        style={{
          paddingTop: 0,
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        <ProductModalContent
          productName={"teste"}
          productDescription={"test teste"}
        />

        <Box position="absolute" top="5" right="4">
          <Dialog.Close>
            <IoIosCloseCircleOutline
              size={40}
              colorProfile={"white"}
              color="white"
            />
          </Dialog.Close>
        </Box>
        <VisuallyHidden>
          <Dialog.Title>Edit profile</Dialog.Title>
        </VisuallyHidden>
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
                <Box>
                  <IconButton size="2" mr="3" radius="full" variant="soft">
                    -
                  </IconButton>
                  <Text ml={"2"} mr={"2"} mb="-4">
                    1
                  </Text>
                  <IconButton size="2" ml="3" radius="full" variant="soft">
                    +
                  </IconButton>
                </Box>
              </Flex>
              <Box
                style={{
                  width: "90%",
                }}
              >
                <Flex justify="center">
                  <Button
                    radius="full"
                    style={{
                      width: "100%",
                    }}
                  >
                    Add to Order - R$ 11.75
                  </Button>
                </Flex>
              </Box>
            </Flex>
          </Container>
        </Container>
      </Dialog.Content>
    </Box>
  );
};

export default ProductModal;
