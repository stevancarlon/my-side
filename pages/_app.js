import { ProductsProvider } from "@/src/context/products";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ProductsProvider>
      <Component {...pageProps} />
    </ProductsProvider>
  );
}
