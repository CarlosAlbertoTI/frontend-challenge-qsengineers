import { useEffect } from "react";
import { Box } from "@radix-ui/themes";

import Collapse from "@components/Collapse/Collapse";
import ProductCard from "@components/ProductCard/ProductCard";

import useInViewPort from "@hooks/useInViewPort";

import { Product, Section } from "@store/menu/types";

export function ListOfSectionProducts({
  productRefs,
  sectionIndex,
  section,
  onPressMobile,
  onHandleSectionView,
}: {
  productRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  section: Section;
  sectionIndex: number;
  onPressMobile: () => void;
  onHandleSectionView: (index: number) => void;
}) {
  const inViewport = useInViewPort(
    { current: productRefs.current[sectionIndex] },
    {
      threshold: 0.9,
    }
  );


  useEffect(() => {
    if (inViewport) {
      onHandleSectionView(sectionIndex);
    }
  }, [inViewport, sectionIndex, onHandleSectionView]);

  return (
    <Box
      id={section.name}
      key={`${sectionIndex}`}
      position="relative"
      overflow="hidden"
      ref={(el) => {
        productRefs.current[sectionIndex] = el;
      }}
    >
      <>
        <Collapse title={section.name}>
          {section.items.map((item: Product) => (
            <Box key={item.id} onClick={() => onPressMobile()}>
              <ProductCard product={item} onPressMobile={() => {}} />
            </Box>
          ))}
        </Collapse>
      </>
    </Box>
  );
}
