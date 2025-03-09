import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px;
  width: 100%;
  max-width: 400px;
  background-color: #f9f9f9;
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 8px;
  font-size: 16px;
  color: #333;
  background-color: transparent;
  width: 70%;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  color: #666;

  &:hover {
    color: #333;
  }
`;
