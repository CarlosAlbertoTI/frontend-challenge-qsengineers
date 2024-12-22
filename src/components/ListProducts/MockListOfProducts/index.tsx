import {
  Box,
  Container,
  Flex,
  Separator,
  Skeleton,
  Text,
} from "@radix-ui/themes";
import React from "react";

const MockListOfProducts: React.FC = () => {
  return (
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
                <Text wrap="wrap">Lorem ipsum dolor sit amet Lorem ipsum </Text>
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
                <Text wrap="wrap">Lorem ipsum dolor sit amet Lorem ipsum </Text>
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
                <Text wrap="wrap">Lorem ipsum dolor sit amet Lorem ipsum </Text>
              </Skeleton>
            </Flex>
            <Skeleton width="78px" height="78px" />
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default MockListOfProducts;
