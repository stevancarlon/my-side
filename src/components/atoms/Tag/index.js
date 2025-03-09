import * as S from "./styles";

export const Tag = ({ text, icon, ...rest }) => {
  return (
    <S.Tag {...rest}>
      {icon} {text}
    </S.Tag>
  );
};
