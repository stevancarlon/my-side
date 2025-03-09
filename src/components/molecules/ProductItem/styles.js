import styled from "styled-components";

export const Container = styled.div`
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  height: 360px;
  min-width: 250px;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
`;

export const ProductImageContainer = styled.div`
  width: 100%;
  height: 65%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

export const ProductInfo = styled.div`
  height: 35%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

export const Price = styled.span`
  font-weight: 600;
  font-size: 18px;
`;
