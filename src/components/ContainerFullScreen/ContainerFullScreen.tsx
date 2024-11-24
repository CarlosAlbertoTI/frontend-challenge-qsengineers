import React from "react";

import { Container } from "@radix-ui/themes";

const ContainerFullScreen: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Container
      style={{
        position: "absolute",
        width: "100vw",
        height: "100vh",
        top: 0,
        zIndex: 10,
        backgroundColor: "white",
      }}
    >
      <Container
        style={{
          width: "100vw",
        }}
      >
        {children}
      </Container>
    </Container>
  );
};

export default ContainerFullScreen;

