import * as S from "./styles";
import { ProductItem } from "@/src/components/molecules/ProductItem";
import { Filters } from "../../organisms/Filters";
import { SearchHeader } from "../../organisms/SearchHeader";
import { useEffect, useRef, useState } from "react";
import { Box, debounce } from "@mui/material";
import { useProducts } from "@/src/context/products";
import { Backdrop } from "../../atoms/Backdrop";
import { useFilters } from "@/src/zustand/useFilters";

export const SearchProductsTemplate = ({ data }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { products: contextProducts } = useProducts();
  const { mobileOpen, setMobileOpen, productSearch } = useFilters();

  const contentRef = useRef(null);

  const filteredProducts = productSearch
    ? contextProducts.filter((product) =>
        product.title.toLowerCase().includes(productSearch.toLowerCase())
      )
    : data;

  const handleScroll = debounce(() => {
    if (contentRef.current) {
      const currentScrollY = contentRef.current.scrollTop;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    }
  }, 100);

  useEffect(() => {
    const contentElement = contentRef.current;

    if (contentElement) {
      contentElement.addEventListener("scroll", handleScroll);
    }
  }, [lastScrollY]);

  useEffect(() => {
    console.log("productSearch", productSearch);
  }, [productSearch]);

  return (
    <S.Container>
      {mobileOpen && <Backdrop onClick={() => setMobileOpen(false)} />}
      {mobileOpen && (
        <S.MobileBox onClick={() => setMobileOpen(false)}>
          <Box style={{ width: "70%" }}>
            <Filters />
          </Box>
        </S.MobileBox>
      )}
      <SearchHeader isVisible={isVisible} />
      <S.Content ref={contentRef}>
        <S.FiltersContainer>
          <Filters />
        </S.FiltersContainer>
        <S.ResultsContainer>
          {filteredProducts?.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </S.ResultsContainer>
      </S.Content>
    </S.Container>
  );
};
