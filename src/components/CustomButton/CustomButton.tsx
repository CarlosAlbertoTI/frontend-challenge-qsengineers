import React from "react";
import {
  Box,
  Container,
  Flex,
  Button,
} from "@radix-ui/themes";

interface CustomButtonProps {
  label: string;
  onClick: () => void;
  height?: string;
  blurColor?: string;
  hasActions?: boolean;
  Actions?: JSX.Element[];
  disabled?: boolean;
  hasBlur?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  height = "95px",
  disabled,
  blurColor = "#eee",
  hasActions = false,
  Actions = [],
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
              backgroundColor: blurColor,
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
          height: height,
          bottom: "10px",
          left: 0,
          zIndex: 2,
        }}
      >
        <Flex direction="column" justify="center" align="center">
          {hasActions && (
            <>
              {Actions.map((Action, index) => (
                <React.Fragment key={index}>{Action}</React.Fragment>
              ))}
            </>
          )}
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
