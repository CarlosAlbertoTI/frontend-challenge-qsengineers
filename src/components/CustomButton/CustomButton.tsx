import React from "react";
import { Box, Button, ButtonProps } from "@radix-ui/themes";
import { useSelector } from "react-redux";

import { RootState } from "@src/store";

interface CustomButtonProps extends ButtonProps {
  height?: string;
  width?: string;
  label: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  height = "50px",
  width = "100%",
  style = {},
  ...props
}) => {
  const { webSettings } = useSelector((state: RootState) => state.webSettings);

  return (
    <Box height={height} width={width}>
      <Button
        style={{
          cursor: "pointer",
          width: "100%",
          backgroundColor: webSettings.primaryColour,
          ...style,
        }}
        {...props}
      >
        {label}
      </Button>
    </Box>
  );
};

export default CustomButton;
