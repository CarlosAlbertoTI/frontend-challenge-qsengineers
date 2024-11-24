import React from "react";
import {
  Box,
  Container,
  Flex,
  IconButton,
  Text,
  Button,
} from "@radix-ui/themes";

interface CustomButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  hasBlur?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  disabled,
  hasBlur,
}) => {
  return (
    <Container
      style={{
        position: "absolute",
        width: "100%",
        height: "100px",
        bottom: 0,
        left: 0,
      }}
    >
      {hasBlur && (
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
      )}
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
          <Flex mt="2" mb="2" direction="row" justify="center" align="center">
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
              onClick={onClick}
                disabled={disabled}
                radius="full"
                style={{
                  width: "100%",
                }}
              >
                {label}
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Container>
  );
};

export default CustomButton;
