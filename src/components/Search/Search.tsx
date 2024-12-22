import { Box, Container } from "@radix-ui/themes";
import { IoIosSearch, IoIosClose } from "react-icons/io";
import React, { useRef } from "react";
import { useTheme } from "styled-components";

interface SearchProps {
  searchValue: string;
  onSearchValue: (searchValue: string) => void;
}

const Search: React.FC<SearchProps> = ({ searchValue = "", onSearchValue }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { colors } = useTheme();

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
          backgroundColor: colors.darkerGray,
          border: `1px solid ${colors.mediumGray}}`,
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
            color: colors.mediumGray,
            cursor: "pointer",
          }}
          onClick={handleIconClick}
        />
        <input
          value={searchValue}
          onChange={(e) =>
            onSearchValue(e.target.value == undefined ? "" : e.target.value)
          }
          ref={inputRef}
          style={{
            paddingLeft: "45px",
            margin: "0",
            outline: "none",
          }}
          color={colors.darkerGray}
          type="text"
          className="border border-gray-300 rounded-md p-2 w-full focus-visible:border-blue-500"
          placeholder="Search menu items..."
        />
        {searchValue.length > 0 && (
          <IoIosClose
            size={30}
            style={{
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
              color: colors.mediumGray,
              cursor: "pointer",
            }}
            onClick={() => onSearchValue("")}
          />
        )}
      </Box>
    </Container>
  );
};

export default Search;
