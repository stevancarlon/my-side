import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 10px;
  padding-top: 110px;
  height: 100%;
  width: 100%;
  overflow-y: scroll;

  @media (max-width: 1060px) {
    padding-top: 200px;
  }
`;

export const ResultsContainer = styled.div`
  background-color: white;
  width: 80%;
  height: fit-content;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  padding-bottom: 10px;

  @media (max-width: 1050px) {
    width: 100%;
    justify-content: center;
  }
`;

export const FiltersContainer = styled.div`
  width: 20%;
  @media (max-width: 1050px) {
    display: none;
  }
`;

export const MobileBox = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
