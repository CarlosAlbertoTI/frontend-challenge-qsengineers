import React from "react";
import { Box, Container, Flex } from "@radix-ui/themes";
import CustomButton from "../CustomButton/CustomButton";
import { RootState } from "@src/store";
import { useSelector } from "react-redux";

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

const CustomButtonWithBlur: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  height = "95px",
  disabled = false,
  blurColor = "#eee",
  hasActions = false,
  Actions = [],
  hasBlur,
}) => {
  const { webSettings } = useSelector((state: RootState) => state.webSettings);
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
            mt="3"
            style={{
              width: "90%",
            }}
          >
            <Flex justify="center">
              <CustomButton
                label={label}
                onClick={onClick}
                disable={disabled}
                radius="full"
                width="100%"
                style={{
                  backgroundColor: webSettings.primaryColour,
                }}
              />
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Container>
  );
};

export default CustomButtonWithBlur;
