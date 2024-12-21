import { forwardRef } from "react";
import { useDispatch } from "react-redux";
import { Box, Dialog } from "@radix-ui/themes";

import { AppDispatch } from "@src/store";
import { Product } from "@src/contexts/Products/ProductsProvider";
import ProductContent from "./ProductContent/ProductContent";
import { setSelectedProduct } from "@src/store/selectedItem";

interface ProductCardMainComponentProps {
  product: Product;
  numberOrProductOnBasket: number | undefined;
  onPressMobile: () => void;
}

const ProductCard = forwardRef<HTMLDivElement, ProductCardMainComponentProps>(
  ({ product, numberOrProductOnBasket = undefined, onPressMobile }, ref) => {
    const dispatch = useDispatch<AppDispatch>();

    const handleSaveSelectedProduct = () =>
      dispatch(setSelectedProduct(product));

    return (
      <Box
      key={`${product.id}-box`}
        // display={{
        //   initial: "none",
        //   md: "inline",
        // }}
        ref={ref}
      >
        <Dialog.Trigger onClick={handleSaveSelectedProduct}>
            <Box>
              <ProductContent
                count={numberOrProductOnBasket}
                product={product}
              />
            </Box>
          </Dialog.Trigger>
      </Box>
    );
  }
);

ProductCard.displayName = "ProductCard";

export default ProductCard;
