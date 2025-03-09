import React, { createContext, useContext, useState, useEffect } from "react";
import { axiosInternal } from "@/src/lib/axiosInternal";
import axios from "axios";

const ProductsContext = createContext();

export const useProducts = () => {
  return useContext(ProductsContext);
};

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.in/api/products?limit=500"
        );
        setProducts(response.data.products);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(err.message || "An unexpected error occurred");
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, error }}>
      {children}
    </ProductsContext.Provider>
  );
};
