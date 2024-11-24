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
interface ProductCardMainComponentProps extends ProductCardProps {
  onPressMobile: () => void;
}

const ProductCard = forwardRef<HTMLDivElement, ProductCardMainComponentProps>(
  (
    {
      title,
      description,
      price,
      imageUrl,
      productAlreadyChooseAndAmount,
      onPressMobile,
    },
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
        <Box onClick={onPressMobile}>
          <ProductContent
            title={title}
            description={description}
            price={price}
            imageUrl={imageUrl}
            productAlreadyChooseAndAmount={productAlreadyChooseAndAmount}
          />
        </Box>
      </Box>
    );
  }
);

ProductCard.displayName = "ProductCard";

export default ProductCard;
