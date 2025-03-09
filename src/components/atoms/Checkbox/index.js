import * as S from "./styles";

export const Checkbox = ({ text, value, onSelect }) => {
  return (
    <S.Container onClick={onSelect}>
      <S.StyledCheckbox checked={value} />
      <label style={{ cursor: "pointer" }}>{text}</label>
    </S.Container>
  );
};
