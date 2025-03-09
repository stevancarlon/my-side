import { create } from "zustand";

export const useCurrentProduct = create((set) => ({
  currentProduct: null,
  setCurrentProduct: (product) => set({ currentProduct: product }),
}));
