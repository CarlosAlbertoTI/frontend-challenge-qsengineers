import { Container } from "@radix-ui/themes";
import React from "react";

const Search: React.FC = () => {
  return (
    <Container
      mt="5"
      width={{ initial: "93%" }}
      maxWidth={{ initial: "93%" }}
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
