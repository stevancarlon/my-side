import { formatTextWithBullets } from "@/src/helpers/formatTextWithBullets";
import { Tag } from "../../atoms/Tag";
import { AddToCart } from "../../organisms/AddToCart";
import { SearchHeader } from "../../organisms/SearchHeader";
import * as S from "./styles";
import { Box, CircularProgress } from "@mui/material";
import { FaStar } from "react-icons/fa";
import { formatPrice } from "@/src/helpers/formatPrice";
import { BiSolidDiscount } from "react-icons/bi";
import { useFilters } from "@/src/zustand/useFilters";
import { Backdrop } from "../../atoms/Backdrop";
import { Filters } from "../../organisms/Filters";

export const ProductTemplate = ({ product }) => {
  const { mobileOpen, setMobileOpen } = useFilters();

  if (!product) {
    return (
      <S.Container>
        <SearchHeader isVisible={true} />
        <S.Content
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </S.Content>
      </S.Container>
    );
  }

  return (
    <S.Container>
      {mobileOpen && <Backdrop onClick={() => setMobileOpen(false)} />}
      {mobileOpen && (
        <S.MobileBox>
          <Box style={{ width: "70%" }}>
            <Filters />
          </Box>
        </S.MobileBox>
      )}
      <SearchHeader isVisible={true} />
      <S.Content>
        <S.ImageAndCart>
          <S.ProductImageContainer>
            <S.ProductImage src={product.image} />
          </S.ProductImageContainer>
          <S.CartMobile>
            <AddToCart product={product} />
          </S.CartMobile>
        </S.ImageAndCart>

        <S.ProductInfo>
          <p style={{ fontSize: 22 }}>{product.title}</p>
          <Box style={{ display: "flex", gap: 10 }}>
            <Tag
              text="4.5"
              icon={<FaStar color="white" />}
              style={{ backgroundColor: "#FB414D", color: "white" }}
            />
            <Tag text={product.category} />
            <Tag text={product.brand} />
          </Box>
          <p style={{ whiteSpace: "pre-line", opacity: 0.7, width: "80%" }}>
            {formatTextWithBullets(product.description)}
          </p>
          <Box
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
            }}
          >
            <span style={{ opacity: 0.7 }}>Cores: </span>
            <S.Color color="red"></S.Color>
            <S.Color color="black" />
          </Box>
          <Box style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {product.discount && (
              <>
                <BiSolidDiscount color="#fb414d" fontSize={28} />
                <S.Discount>-{product.discount}%</S.Discount>
              </>
            )}
            <S.Price>{formatPrice(product.price)}</S.Price>
          </Box>
          <S.AboutSeller>
            <p style={{ fontSize: 22 }}>Sobre o vendedor</p>
            <p style={{ opacity: 0.7 }}>
              Somos uma loja especializada em produtos de alta qualidade para
              áudio e tecnologia, trazendo sempre o melhor para os nossos
              clientes.
            </p>

            <p style={{ opacity: 0.7 }}>
              Trabalhamos com marcas renomadas e produtos originais, garantindo
              uma experiência única de compra.
            </p>

            <p style={{ opacity: 0.7 }}>
              Nosso compromisso é oferecer um atendimento excelente, entregas
              rápidas e um processo de compra seguro. Se tiver dúvidas ou
              precisar de suporte, nossa equipe estará pronta para ajudar!
            </p>

            <ul style={{ marginLeft: 30, opacity: 0.7 }}>
              <li>💬 Atendimento personalizado</li>
              <li>🚚 Envio rápido e seguro</li>
              <li>✅ Produtos 100% originais</li>
            </ul>

            <p style={{ opacity: 0.7 }}>Compre com confiança!</p>
          </S.AboutSeller>
        </S.ProductInfo>
        <S.CartDesktop>
          <AddToCart product={product} />
        </S.CartDesktop>
      </S.Content>
    </S.Container>
  );
};
