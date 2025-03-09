import { useRouter } from "next/router";
import { useEffect } from "react";
import { SearchProductsTemplate } from "@/src/components/templates/SearchProducts";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/app/search-products");
  }, []);

  return null;
}
