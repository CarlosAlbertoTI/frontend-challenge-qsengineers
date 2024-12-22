import { Box, Container, Flex, Skeleton } from "@radix-ui/themes";
import MockListOfProducts from "@src/components/ListProducts/MockListOfProducts";
import React from "react";

const MockMenu: React.FC = () => {
  return (
    <Box
      style={{
        margin: "0",
        padding: "0",
        backgroundColor: "white",
      }}
    >
      <Skeleton loading>
        <Container height="20vh" />
      </Skeleton>
      <Skeleton loading>
        <Box mt="2" m="auto" width="90vw" height="10vh" />
      </Skeleton>
      <Flex
        direction="row"
        wrap="wrap"
        width="70vw"
        mt="3"
        m="auto"
        gap="3"
        justify="center"
      >
        <Box flexGrow="1" width="300px" height="90vh">
          <MockListOfProducts />
        </Box>
        <Skeleton loading>
          <Box width="300px" height="10vh"></Box>
        </Skeleton>
      </Flex>
    </Box>
  );
};

export default MockMenu;
