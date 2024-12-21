import React, { useState } from "react";
import { Box, Flex, Heading } from "@radix-ui/themes";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

import { useSelector } from "react-redux";
import { RootState } from "@src/store";

interface CollapseProps {
  title: string;
  children: React.ReactNode;
  innerRef?: React.Ref<HTMLDivElement>;
}

const Collapse: React.FC<CollapseProps> = ({ title, children, innerRef }) => {
  const [isOpen, setIsOpen] = useState(true);

  const { webSettings } = useSelector((state: RootState) => state.webSettings);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box ref={innerRef} mt="2" minHeight={{ initial: "80px" }}>
      <Flex direction="row" justify="between">
        <Flex
          width="100%"
          direction="row"
          justify="between"
          style={{
            backgroundColor: "transparent",
          }}
          onClick={toggleCollapse}
          mb="3"
        >
          <Heading size="3">{title}</Heading>
          {isOpen ? (
            <FaAngleUp size={20} color={webSettings.primaryColour} />
          ) : (
            <FaAngleDown size={20} color={webSettings.primaryColour} />
          )}
        </Flex>
      </Flex>
      <Box width={"100%"} display={isOpen ? "block" : "none"}>
        {children}
      </Box>
    </Box>
  );
};

export default Collapse;
