import styled from "styled-components";

export const ButtonContainer = styled.button`
  background-color: #fafafa;
  border: 1px solid #fafafa;
  border-radius: 20px;

  height: 62px;
  width: 30%;
  flex-shrink: 0;
  margin: 20px;

  &: hover {
    background-color: #fafafa40;
    color: #fafafa;
    cursor: pointer;
  }
`;
