import { Checkbox } from "../../atoms/Checkbox";
import * as S from "./styles";
import Slider from "@mui/material/Slider";
import { Box } from "@mui/material";
import { Tag } from "../../atoms/Tag";
import { BootstrapPrimaryButton } from "../../atoms/BootstrapPrimaryButton";
import { BootstrapSecondaryButton } from "../../atoms/BootstrapSecondaryButton";
import { useFilters } from "@/src/zustand/useFilters";
import { useRouter } from "next/router";

const CATEGORIES = [
  { id: 1, category: "Mobile", value: "mobile" },
  { id: 2, category: "Gaming", value: "gaming" },
  { id: 3, category: "Audio", value: "audio" },
];

export const Filters = () => {
  const {
    category,
    setCategory,
    priceRange,
    setPriceRange,
    setApplyFilter,
    setMobileOpen,
  } = useFilters();
  const router = useRouter();

  const handleRangeChange = (_event, newValue) => {
    setPriceRange(newValue);
  };

  const handleCategories = (string) => {
    if (category === string) {
      setCategory(null);
    } else {
      setCategory(string);
    }
  };

  const clearFilters = () => {
    setCategory(null);
    setPriceRange([0, 3000]);
    setApplyFilter((prev) => !prev);
  };

  const handleApply = () => {
    setApplyFilter((prev) => !prev);
    setMobileOpen(false);
    if (router.pathname !== "/app/search-products") {
      router.push("/app/search-products");
    }
  };

  return (
    <S.Container>
      <h3>Filtros</h3>
      <S.Categories>
        <p style={{ fontWeight: 550 }}>Categorias</p>
        {CATEGORIES.map((item) => {
          return (
            <Checkbox
              key={item.id}
              text={item.category}
              value={category === item.value}
              onSelect={() => handleCategories(item.value)}
            />
          );
        })}
      </S.Categories>
      <S.Categories>
        <p style={{ fontWeight: 550 }}>Preço</p>
        <Slider
          value={priceRange}
          onChange={handleRangeChange}
          valueLabelDisplay="auto"
          min={0}
          max={3000}
          step={10}
          sx={{
            "& .MuiSlider-track": {
              color: "rgba(251, 65, 77, 0.5)", // Selected track color
            },
            "& .MuiSlider-rail": {
              color: "#e0e0e0", // Unselected track color
            },
            "& .MuiSlider-thumb": {
              color: "#ff5722", // Thumb color
            },
          }}
        />
        <Box display={{ display: "flex", justifyContent: "space-between" }}>
          <Tag text={`$${priceRange[0]}`} />
          <Tag text={`$${priceRange[1]}`} />
        </Box>
        <Box
          display={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: 20,
          }}
        >
          <BootstrapSecondaryButton text="Limpar" onClick={clearFilters} />
          <BootstrapPrimaryButton text="Aplicar" onClick={handleApply} />
        </Box>
      </S.Categories>
    </S.Container>
  );
};
