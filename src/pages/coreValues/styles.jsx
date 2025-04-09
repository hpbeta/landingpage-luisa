

import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  gap: 3rem;
  padding: 4rem 2rem;
  flex-wrap: wrap;
`;

export const ValueCard = styled.div`
  text-align: center;
  width: 300px;
  height: 250px;
  background-color: ${({ $bg }) => $bg || "#fff"};
  padding: 2rem 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }

  svg {
    width: 32px;
    height: 32px;
    margin-bottom: 1rem;
    stroke-width: 2;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.95rem;
    color: #333;
  }
`;