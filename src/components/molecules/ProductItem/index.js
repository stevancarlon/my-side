import { formatPrice } from "@/src/helpers/formatPrice";
import * as S from "./styles";
import { Tag } from "../../atoms/Tag";
import { useRouter } from "next/router";
import { useCurrentProduct } from "@/src/zustand/useCurrentProduct";

export const ProductItem = ({ product }) => {
  const router = useRouter();
  const { setCurrentProduct } = useCurrentProduct();

  const sliceString = (string) => {
    if (string.length > 50) {
      return string.substring(0, 47) + "...";
    }
    return string;
  };

  const goToProduct = () => {
    setCurrentProduct(product);

    router.push({
      pathname: "/app/product/[id]",
      query: { id: product.id },
    });
  };

  return (
    <S.Container onClick={goToProduct}>
      <S.ProductImageContainer>
        <S.ProductImage src={product.image} />
      </S.ProductImageContainer>
      <S.ProductInfo>
        <S.Price>{formatPrice(product.price)}</S.Price>
        <p>{sliceString(product.title)}</p>
        <Tag text={product.category} />
      </S.ProductInfo>
    </S.Container>
  );
};
