import { axiosInternal } from "@/src/lib/axiosInternal";

export async function getServerSideProps() {
  try {
    const response = await axiosInternal.get("/searchProducts");
    const products = response.data;

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
  console.log("products", products);

  return (
    <div>
      <h1>Search Products</h1>
    </div>
  );
}
