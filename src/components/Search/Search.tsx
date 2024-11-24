import { Container } from "@radix-ui/themes";
import React from "react";

const Search: React.FC = () => {
  return (
    <Container
      mt="5"
      mb="2"
      width={{ initial: "90%", md: "100%", lg: "100%", xl: "100%" }}
    >
      <input
        type="text"
        className="border border-gray-300 rounded-md p-2 w-full"
        placeholder="Search menu items..."
      />
    </Container>
  );
};

export default Search;
