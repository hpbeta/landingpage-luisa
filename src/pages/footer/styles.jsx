import styled from "styled-components";

export const FooterContainer = styled.footer`
background-color: #7A8B6F;
  padding: 2rem;
  color: #2e2e2e;
  font-size: 0.9rem;
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const Left = styled.div`
  strong {
    font-weight: 600;
  }

  span {
    display: block;
    font-size: 0.8rem;
    color: #2e2e2e;
    margin-top: 0.3rem;
  }
`;

export const Right = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    color: inherit;
    text-decoration: none;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Bottom = styled.div`
  text-align: center;
  font-size: 0.75rem;
  color: #2e2e2e;
`;