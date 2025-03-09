import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Minus = styled.span`
  background-color: #efeff0;
  font-size: 22px;
  padding: 10px 20px;
  cursor: pointer;
`;

export const Plus = styled.span`
  background-color: #fb414d;
  color: white;
  padding: 10px 20px;
  font-size: 22px;
  cursor: pointer;
`;

export const Quantity = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
