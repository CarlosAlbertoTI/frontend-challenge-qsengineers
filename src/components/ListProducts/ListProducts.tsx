import { Avatar, Box, Flex, TabNav, Text, ScrollArea } from "@radix-ui/themes";
import React, { useContext } from "react";

import {
  ProductsContext,
  Product,
  Section,
} from "@contexts/Products/ProductsProvider";

import Collapse from "../Collapse/Collapse";
import ProductCard from "../ProductCard/ProductCard";

interface ListProductsProps {
  onPressMobile: () => void;
}

const ListProducts: React.FC<ListProductsProps> = ({ onPressMobile }) => {
  const { products } = useContext(ProductsContext);

  const { sections } = products;
  return (
    <>
      <TabNav.Root>
        <Box width={{ initial: "90%" }}>
          <ScrollArea scrollbars="horizontal" style={{ height: 150 }}>
            <Flex gap={`${sections.length - 1}`} p="2">
              {sections.map((section: Section) => (
                <Box key={section.id}>
                  <TabNav.Link
                    href={`#${section.name}`}
                    style={{
                      marginLeft: 20,
                      marginRight: 20,
                      width: "60px",
                      height: "140px",
                    }}
                  >
                    <Flex
                      direction="column"
                      justify="between"
                      align="center"
                      style={{
                        height: "140px",
                      }}
                    >
                      <Avatar
                        style={{
                          width: "85px",
                          height: "85px",
                        }}
                        radius="full"
                        fallback="A"
                        src={section?.images?.[0]?.image ?? ""}
                      />

                      <Text mt="5" mb="3" style={{ color: "#121212" }}>
                        {section.name}
                      </Text>
                    </Flex>
                  </TabNav.Link>
                </Box>
              ))}
            </Flex>
          </ScrollArea>
        </Box>
      </TabNav.Root>
      <Box pt="10">
        {sections.map((section: Section) => (
          <Box id={section.name} key={section.id}>
            <Collapse key={section.id} title={section.name}>
              {section.items.map((item: Product) => (
                <Box key={item.id}>
                  <ProductCard product={item} onPressMobile={onPressMobile} />
                </Box>
              ))}
            </Collapse>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default ListProducts;
