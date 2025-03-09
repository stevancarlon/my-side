import * as S from "./styles";

export const BootstrapSecondaryButton = ({ text, onClick }) => {
  return <S.BootstrapButton onClick={onClick}>{text}</S.BootstrapButton>;
};
