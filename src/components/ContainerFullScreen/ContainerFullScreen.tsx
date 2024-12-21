import React from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import { Box, Container, Flex, Heading } from "@radix-ui/themes";


import CustomButtonWithBlur from "../CustomButtonWithBlur/CustomButton";

interface ContainerFullScreenProps {
  title: string;
  titleType: "image" | "text";
  titleBackgroundColor?: string;
  backgroundColor?: string;
  onCloseContainer: () => void;
  children: React.ReactNode;
  buttonTitle?: string;
  hasActions?: boolean;
  buttonHeight?: string;
  bottomActions?: JSX.Element[];
  hasBottomButton?: boolean;
  onPressBottomButton?: () => void;
}

const ContainerFullScreen: React.FC<ContainerFullScreenProps> = ({
  title,
  titleType = "text",
  onCloseContainer,
  titleBackgroundColor = "lightgrey",
  backgroundColor = "white",
  children,
  buttonTitle = "",
  buttonHeight = "55px",
  hasActions = false,
  bottomActions = [],
  hasBottomButton = true,
  onPressBottomButton = () => {},
}) => {
  return (
    <Container
      style={{
        position: "absolute",
        width: "100vw",
        height: "100vh",
        top: 0,
        zIndex: 10,
        backgroundColor: backgroundColor,
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
              <IoCloseCircleSharp
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
                backgroundColor: titleBackgroundColor,
                boxShadow:"0px 2px 14px rgba(0, 0, 0, 0.9)",
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
              <Heading size="7">{title}</Heading>
              <Box pr="4">
                <IoCloseCircleSharp size="30" onClick={onCloseContainer} />
              </Box>
            </Flex>
          </>
        )}
        {children}
        {hasBottomButton && (
          <>
            <CustomButtonWithBlur
              height={buttonHeight}
              label={buttonTitle}
              hasActions={hasActions}
              Actions={bottomActions}
              onClick={onPressBottomButton}
            />
          </>
        )}
      </Container>
    </Container>
  );
};

export default ContainerFullScreen;
