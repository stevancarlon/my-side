import { SearchProductsTemplate } from "@/src/components/templates/SearchProducts";
import { filterByPriceRange } from "@/src/helpers/filterByPriceRange";
import { axiosInternal } from "@/src/lib/axiosInternal";
import { useFilters } from "@/src/zustand/useFilters";
import { useEffect, useState } from "react";

export async function getServerSideProps() {
  try {
    const response = await axiosInternal.get("/searchProducts");
    const products = response.data.products;

    return {
      props: {
        products,
        error: null,
      },
    };
  } catch (error) {
    console.error("Error fetching products:", error);

    return {
      props: {
        products: [],
        error: error.message || "An unexpected error occurred",
      },
    };
  }
}

export default function SearchProducts({ products }) {
  const { category, priceRange, applyFilter } = useFilters();
  const [filteredProducts, setFilteredProducts] = useState(products);

  // set category to local storage
  useEffect(() => {
    const fetchFilteredProducts = async () => {
      try {
        const response = await axiosInternal.get("/api/searchProducts", {
          params: { category },
        });

        const filteredByPrice = filterByPriceRange(
          response.data.products,
          priceRange
        );
        setFilteredProducts(filteredByPrice);
      } catch (error) {
        console.error("Error fetching filtered products:", error);
      }
    };

    if (category) {
      fetchFilteredProducts();
    } else {
      const filteredByPrice = filterByPriceRange(products, priceRange);
      setFilteredProducts(filteredByPrice);
    }
  }, [applyFilter]);

  return <SearchProductsTemplate data={filteredProducts} />;
}
