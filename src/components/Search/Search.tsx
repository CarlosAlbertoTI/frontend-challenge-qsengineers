import { Box, Container } from "@radix-ui/themes";
import { IoIosSearch } from "react-icons/io";
import React, { useRef } from "react";

const Search: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleIconClick = () => {
    inputRef.current?.focus();
  };

  return (
    <Container mt="1" width={{ initial: "93%" }} maxWidth={{ initial: "93%" }}>
      <Box
        width="100%"
        style={{
          margin: "0 auto",
          position: "relative",
          backgroundColor: "#FFFFFF",
          border: "1px solid #8A94A4",
          borderRadius: "5px",
        }}
      >
        <IoIosSearch
          size={22}
          style={{
            
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            color: "#8A94A4",
            cursor: "pointer",
          }}
          onClick={handleIconClick}
        />
        <input
          ref={inputRef}
          style={{
            paddingLeft: "45px",
            margin: "0",
            border: "none",
          }}
          color="#2C2C2C"
          type="text"
          className="border border-gray-300 rounded-md p-2 w-full"
          placeholder="Search menu items..."
        />
      </Box>
    </Container>
  );
};

export default Search;
