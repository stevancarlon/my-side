import { useFilters } from "@/src/zustand/useFilters";
import * as S from "./styles";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useRouter } from "next/router";

export const SearchInput = ({ placeholder = "Search..." }) => {
  const { productSearch, setProductSearch } = useFilters();
  const router = useRouter();

  const handleInputChange = (event) => {
    console.log("event", event.target.value);
    setProductSearch(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && router.pathname !== "/app/search-products") {
      router.push("/app/search-products");
    }
  };

  return (
    <S.Container>
      <S.Input
        type="text"
        value={productSearch}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
      />
      <S.IconButton>
        <IoSearchSharp fontSize={22} />
      </S.IconButton>
    </S.Container>
  );
};
