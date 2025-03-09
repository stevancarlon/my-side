import { MySideLogo } from "@/src/assets/logo/MySideLogo";
import * as S from "./styles";
import { SearchInput } from "../../atoms/SearchInput";
import { RiShoppingCartLine } from "react-icons/ri";
import { VscSettings } from "react-icons/vsc";
import { useFilters } from "@/src/zustand/useFilters";

export const SearchHeader = ({ isVisible }) => {
  const { setMobileOpen } = useFilters();

  return (
    <S.Header isVisible={isVisible}>
      <MySideLogo scale={1} />
      <S.DesktopContainer>
        <SearchInput placeholder="Buscar produto..." />
      </S.DesktopContainer>
      <S.IconsContainer>
        <S.MobileContainer>
          <SearchInput placeholder="Buscar produto..." />
        </S.MobileContainer>
        <S.FilterIcon onClick={() => setMobileOpen(true)}>
          <VscSettings fontSize={24} />
        </S.FilterIcon>
        <S.Icon>
          <RiShoppingCartLine fontSize={24} />
        </S.Icon>
      </S.IconsContainer>
    </S.Header>
  );
};
