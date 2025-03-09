import styled from "styled-components";

export const Header = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  gap: 20px;
  padding: 0px 40px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(-100%)"};
  transition: transform 0.3s ease-in-out;
  z-index: 2;
  @media (max-width: 1060px) {
    flex-direction: column;
    height: fit-content;
    padding: 20px;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const Icon = styled.div`
  cursor: pointer;
  opacity: 0.7;
  padding: 5px;
  border-radius: 20px;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const Logo = styled.div`
  @media (max-width: 670px) {
    display: none;
  }
`;

export const FilterIcon = styled.div`
  @media (min-width: 1060px) {
    display: none;
  }
`;

export const DesktopContainer = styled.div`
  @media (max-width: 1060px) {
    display: none;
  }
`;

export const MobileContainer = styled.div`
  @media (min-width: 1060px) {
    display: none;
  }
`;
