import { forwardRef, useContext } from "react";
import { Box, Dialog } from "@radix-ui/themes";

import ProductContent from "./ProductContent/ProductContent";
import { ProductSelectedContext } from "@src/contexts/ProductSelected/ProductSelected";
import { Product } from "@src/contexts/Products/ProductsProvider";

interface ProductCardMainComponentProps {
  product: Product;
  onPressMobile: () => void;
}

const ProductCard = forwardRef<HTMLDivElement, ProductCardMainComponentProps>(
  ({ product, onPressMobile }, ref) => {
    const { setSelectedProduct } = useContext(ProductSelectedContext);

    const handleSaveSelectedProduct = () => setSelectedProduct(product);

    return (
      <Box>
        <Box
          display={{
            initial: "none",
            md: "inline",
          }}
          ref={ref}
        >
          <Dialog.Trigger onClick={handleSaveSelectedProduct}>
            <Box>
              <ProductContent product={product} />
            </Box>
          </Dialog.Trigger>
        </Box>
        <Box
          display={{
            initial: "inline",
            md: "none",
          }}
          onClick={() => {
            handleSaveSelectedProduct();
            onPressMobile();
          }}
        >
          <ProductContent product={product} />
        </Box>
      </Box>
    );
  }
);

ProductCard.displayName = "ProductCard";

export default ProductCard;
