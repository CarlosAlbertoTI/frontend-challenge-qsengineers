import React, { useState } from "react";
import { Box, Flex, Heading } from "@radix-ui/themes";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

interface CollapseProps {
  title: string;
  children: React.ReactNode;
}

const Collapse: React.FC<CollapseProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box>
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
            <FaAngleUp size={20} color="#4F372F" />
          ) : (
            <FaAngleDown size={20} color="#4F372F" />
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
