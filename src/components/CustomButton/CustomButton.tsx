import React from "react";
import { Box, Button } from "@radix-ui/themes";

import { RootState } from "@src/store";
import { useSelector } from "react-redux";

interface CustomButtonProps {
  height?: string;
  width?: string;
  style?: object;
  radius?: "small" | "none" | "medium" | "full" | "large";
  disable: boolean;
  onClick: () => void;
  label: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  label,
  disable,
  radius = "none",
  width = "100%",
  height = "50px",
  style = {},
}) => {
  const { webSettings } = useSelector((state: RootState) => state.webSettings);

  return (
    <Box height={height} width={width}>
      <Button
        onClick={onClick}
        disabled={disable}
        radius={radius}
        style={{
          width: "100%",
          backgroundColor: webSettings.primaryColour,
          ...style,
        }}
      >
        {label}
      </Button>
    </Box>
  );
};

export default CustomButton;
