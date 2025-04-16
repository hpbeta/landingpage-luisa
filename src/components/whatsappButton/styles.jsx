import styled from "styled-components";

export const FloatingButton = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25d366;
  color: white;
  border-radius: 50%;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;
