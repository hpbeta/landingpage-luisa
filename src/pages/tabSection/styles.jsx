import styled from "styled-components";

export const Container = styled.div`

  padding: 20px 0;
`

export const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 24px;
`;

export const TabButton = styled.button.withConfig({
    shouldForwardProp: (prop) => prop !== "active",
  })`
   background-color: ${({ active }) => (active ? "#ffece0" : "#f2f2e9")};
    border: none;
    padding: 10px 20px;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s ease;
  
    &:hover {
      background-color: #ffece0;
    }
  `;
export const ContentBox = styled.div`
 background: white;
  padding: 48px 40px;
  border-radius: 12px;
  max-width: 680px;
  min-height: 350px;
  margin: 0 auto;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
`;

export const Title = styled.h2`
  margin-bottom: 12px;
`;

export const Text = styled.p`
  line-height: 1.6;
`;