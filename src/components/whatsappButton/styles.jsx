import styled from "styled-components";




export const FloatingButton = styled.a`
  position: fixed;
  bottom: 20px; /* Distância do fundo */
  right: 20px;  /* Distância da direita */
  background-color: #25d366; /* Cor do WhatsApp */
  color: white;
  border-radius: 50%;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  transition: transform 0.2s; /* Animação ao passar o mouse */

  &:hover {
    transform: scale(1.1); /* Aumenta o botão ao passar o mouse */
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;