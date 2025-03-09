import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  padding: 40px;
  padding-top: 140px;
  height: fit-content;
  width: 100%;

  @media (max-width: 1060px) {
    flex-direction: column;
    padding-top: 200px;
  }
`;

export const ProductImageContainer = styled.div`
  height: fit-content;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const ProductImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

export const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Color = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 20px;
  height: 20px;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${({ color }) => color};
`;

export const Price = styled.span`
  font-weight: 600;
  font-size: 22px;
`;

export const Discount = styled.span`
  color: #fb414d;
  font-size: 18px;
`;

export const AboutSeller = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
`;

export const MoreProducts = styled.div`
  display: flex;
  gap: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const CartDesktop = styled.div`
  @media (max-width: 1060px) {
    display: none;
  }
`;

export const CartMobile = styled.div`
  display: none;

  @media (max-width: 1060px) {
    display: flex;
  }
`;

export const ImageAndCart = styled.div`
  width: 30%;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  @media (max-width: 1060px) {
    width: 100%;
  }
  @media (max-width: 630px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const MobileBox = styled.div`
  position: absolute;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  left: 25%;
  top: 25%;
`;
