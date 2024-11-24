import { forwardRef } from "react";
import { Box, Dialog } from "@radix-ui/themes";
import ProductContent from "./ProductContent/ProductContent";

export interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  productAlreadyChooseAndAmount: number;
}

const ProductCard = forwardRef<HTMLDivElement, ProductCardProps>(
  (
    { title, description, price, imageUrl, productAlreadyChooseAndAmount },
    ref
  ) => {
    return (
      <Box>
        <Box
          display={{
            initial: "none",
            md: "inline",
          }}
          ref={ref}
        >
          <Dialog.Trigger>
            <Box>
              <ProductContent
                title={title}
                description={description}
                price={price}
                imageUrl={imageUrl}
                productAlreadyChooseAndAmount={productAlreadyChooseAndAmount}
              />
            </Box>
          </Dialog.Trigger>
        </Box>
        <ProductContent
          title={title}
          description={description}
          price={price}
          imageUrl={imageUrl}
          productAlreadyChooseAndAmount={productAlreadyChooseAndAmount}
        />
      </Box>
    );
  }
);

ProductCard.displayName = "ProductCard";

export default ProductCard;
