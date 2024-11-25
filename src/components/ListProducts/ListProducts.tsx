import { Avatar, Box, Flex, ScrollArea, Tabs, Text } from "@radix-ui/themes";
import React from "react";
import Collapse from "../Collapse/Collapse";
import ProductCard from "../ProductCard/ProductCard";

interface ListProductsProps {
  data: [];
  onPressMobile: () => void;
}

const ListProducts: React.FC<ListProductsProps> = ({
  data = [],
  onPressMobile,
}) => {
  return (
    <Tabs.Root defaultValue="account">
      <ScrollArea
        scrollbars="horizontal"
        style={{ height: 150, minWidth: 150 }}
      >
        <Tabs.List color="gray" size="2">
          <Tabs.Trigger
            style={{
              marginLeft: 10,
              marginRight: 10,
              width: "60px",
              height: "140px",
            }}
            value="account"
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
                src="https://preodemo.gumlet.io/usr/venue/7602/section/646fbe4c64a6f.png"
              />
              <Text mt="5" mb="3" style={{ color: "#121212" }}>
                Account
              </Text>
            </Flex>
          </Tabs.Trigger>
        </Tabs.List>
      </ScrollArea>

      <Box pt="10">
        <Collapse title="Burgers">
          <Tabs.Content value="account">
            <ProductCard
              title="Burgers"
              description="180g angus beef burger, plus ribs, quijo mussarela, picles, cebola"
              price="R$ 2.85"
              productAlreadyChooseAndAmount={1}
              imageUrl="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
              onPressMobile={onPressMobile}
            />
            <ProductCard
              title="Burgers"
              description="180g angus beef burger, plus ribs, quijo mussarela, picles, cebola"
              price="R$ 2.85"
              productAlreadyChooseAndAmount={0}
              imageUrl="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
              onPressMobile={onPressMobile}
            />
            <ProductCard
              title="Burgers"
              description="180g angus beef burger, plus ribs, quijo mussarela, picles, cebola"
              price="R$ 2.85"
              productAlreadyChooseAndAmount={0}
              imageUrl="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
              onPressMobile={onPressMobile}
            />
            <ProductCard
              title="Burgers"
              description="180g angus beef burger, plus ribs, quijo mussarela, picles, cebola"
              price="R$ 2.85"
              productAlreadyChooseAndAmount={0}
              imageUrl="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
              onPressMobile={onPressMobile}
            />
            <ProductCard
              title="Burgers"
              description="180g angus beef burger, plus ribs, quijo mussarela, picles, cebola"
              price="R$ 2.85"
              productAlreadyChooseAndAmount={0}
              imageUrl="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
              onPressMobile={onPressMobile}
            />
            <ProductCard
              title="Burgers"
              description="180g angus beef burger, plus ribs, quijo mussarela, picles, cebola"
              price="R$ 2.85"
              productAlreadyChooseAndAmount={0}
              imageUrl="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
              onPressMobile={onPressMobile}
            />
            <ProductCard
              title="Burgers"
              description="180g angus beef burger, plus ribs, quijo mussarela, picles, cebola"
              price="R$ 2.85"
              productAlreadyChooseAndAmount={0}
              imageUrl="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
              onPressMobile={onPressMobile}
            />
          </Tabs.Content>
        </Collapse>
      </Box>
    </Tabs.Root>
  );
};

export default ListProducts;
