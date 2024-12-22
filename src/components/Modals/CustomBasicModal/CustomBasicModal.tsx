import React from "react";
import { Box, Container, Flex } from "@radix-ui/themes";
import { useSelector } from "react-redux";

import { RootState } from "@src/store";

interface BasicPropsOfModal {
  children: React.ReactNode;
}

interface CustomBasicModalProps extends BasicPropsOfModal {
  width?: string;
  height?: string;
  isOpenModal: boolean;
  setCloseModal: () => void;
}

const BackgroundModal = ({ onCloseModal }: { onCloseModal: () => void }) => {
  return (
    <Container
      onClick={onCloseModal}
      flexGrow="1"
      style={{
        position: "fixed",
        zIndex: 100,
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        opacity: "0.7",
        backgroundColor: "black",
      }}
    />
  );
};

const CustomBasicModal: React.FC<CustomBasicModalProps> = ({
  width,
  height,
  children,
  isOpenModal = true,
  setCloseModal,
  ...modalProps
}) => {
  const webSetting = useSelector((state: RootState) => state.webSettings);

  return (
    <>
      {isOpenModal && (
        <>
          <BackgroundModal onCloseModal={setCloseModal} />
          <Flex
            direction="column"
            minWidth={{ initial: "100%", md: "200px" }}
            minHeight={{ initial: "100%", md: "200px" }}
            width={width}
            height={height}
            {...modalProps}
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 101,
              position: "fixed",
              backgroundColor: webSetting.webSettings.backgroundColour,
            }}
          >
            {children}
          </Flex>
        </>
      )}
    </>
  );
};

const ModalHeader = ({ children }: BasicPropsOfModal) => {
  return <Box style={{ zIndex: 104 }}>{children}</Box>;
};

const ModalContent = ({ children }: BasicPropsOfModal) => {
  return <Box flexGrow="1" style={{ zIndex: 103 }}>{children}</Box>;
};

const ModalFooter = ({ children }: BasicPropsOfModal) => {
  return <Box style={{ zIndex: 103 }}>{children}</Box>;
};

const Modal = {
  ModalRoot: CustomBasicModal,
  Header: ModalHeader,
  Content: ModalContent,
  Footer: ModalFooter,
};

export default Modal;
