import { create } from "zustand";

export const useFilters = create((set) => ({
  category: null,
  priceRange: [0, 3000],
  applyFilter: false,
  mobileOpen: false,
  productSearch: "",
  setCategory: (category) =>
    set(() => ({
      category,
    })),
  setPriceRange: (priceRange) =>
    set(() => ({
      priceRange,
    })),
  setApplyFilter: (applyFilter) =>
    set(() => ({
      applyFilter,
    })),
  setMobileOpen: (mobileOpen) =>
    set(() => ({
      mobileOpen,
    })),
  setProductSearch: (productSearch) =>
    set(() => ({
      productSearch,
    })),
}));
