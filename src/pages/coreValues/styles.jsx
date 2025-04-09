import styled from "styled-components";


export const Section = styled.section`
  display: flex;
  justify-content: center;
  gap: 4rem;
  padding: 4rem 2rem;
  background-color: #fff;
  flex-wrap: wrap;
`;

export const ValueCard = styled.div`
  text-align: center;
  max-width: 200px;

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