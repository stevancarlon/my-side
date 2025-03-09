import * as S from "./styles";

export const BootstrapPrimaryButton = ({ text, onClick }) => {
  return (
    <S.BootstrapButton variant="contained" onClick={onClick}>
      {text}
    </S.BootstrapButton>
  );
};
