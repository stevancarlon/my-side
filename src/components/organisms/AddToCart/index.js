import { formatPrice } from "@/src/helpers/formatPrice";
import { UnitInput } from "../../atoms/UnitInput";
import * as S from "./styles";
import { BootstrapPrimaryButton } from "../../atoms/BootstrapPrimaryButton";
import { BootstrapSecondaryButton } from "../../atoms/BootstrapSecondaryButton";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomButton = styled(Button)({
  backgroundColor: "#FF5733", // New color for the button
  "&:hover": {
    backgroundColor: "#FF4500", // Hover color for the button
  },
});

export const AddToCart = ({ product }) => {
  return (
    <S.Container>
      <h3>Unidades disponíveis: 3</h3>
      <UnitInput />
      <S.Price>
        <span>Preço</span>
        <span style={{ fontSize: 20, fontWeight: 600 }}>
          {formatPrice(product.price)}
        </span>
      </S.Price>
      <S.Price>
        <span>Frete</span>
        <span style={{ fontSize: 20, fontWeight: 600 }}>{formatPrice(15)}</span>
      </S.Price>
      {/* <CustomButton>Comprar agora</CustomButton> */}
      <BootstrapPrimaryButton text={"Adicionar ao carrinho"} />
      <BootstrapSecondaryButton text={"Comprar agora"} />
    </S.Container>
  );
};
