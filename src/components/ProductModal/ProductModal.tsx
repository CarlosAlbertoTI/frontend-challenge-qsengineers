import React from "react";
import {
  Box,
  Dialog,
  VisuallyHidden,
} from "@radix-ui/themes";
import { IoIosCloseCircleOutline } from "react-icons/io";

import CustomButtom from "../CustomButton/CustomButton";
import ProductModalContent from "./ProductModal/ProductModalContent";

const ProductModal: React.FC = () => {
  return (
    <Box
      maxWidth="100%"
      width={{ initial: "100vw", md: "70%" }}
      height="100%"
      maxHeight="100%"
    >
      <Dialog.Content
        height="100%"
        maxWidth="100%"
        width={{ initial: "100%", md: "70%" }}
        style={{
          paddingTop: 0,
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        <ProductModalContent
          productName={"teste"}
          productDescription={"test teste"}
        />

        <Box position="absolute" top="5" right="4">
          <Dialog.Close>
            <IoIosCloseCircleOutline
              size={40}
              colorProfile={"white"}
              color="white"
            />
          </Dialog.Close>
        </Box>
        <VisuallyHidden>
          <Dialog.Title>Edit profile</Dialog.Title>
        </VisuallyHidden>
        <CustomButtom label={"Teste"} height="55px" hasBlur onClick={() => {}} />
      </Dialog.Content>
    </Box>
  );
};

export default ProductModal;
