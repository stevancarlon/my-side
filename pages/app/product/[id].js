import { ProductTemplate } from "@/src/components/templates/Product";
import { useCurrentProduct } from "@/src/zustand/useCurrentProduct";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { axiosInternal } from "@/src/lib/axiosInternal";

export default function Product() {
  const { currentProduct, setCurrentProduct } = useCurrentProduct();
  const [product, setProduct] = useState(currentProduct);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axiosInternal.get(`/api/getProduct`, {
          params: { id },
        });
        setProduct(response.data);
        setCurrentProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (!currentProduct && id) {
      fetchProduct();
    }
  }, [currentProduct, id, setCurrentProduct]);

  return <ProductTemplate product={product} />;
}
