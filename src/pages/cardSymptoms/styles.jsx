 import styled from "styled-components";


export const Container = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: #fff;
`;

export const Heading = styled.h2`
  font-size: 1.8rem;
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.4;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  justify-items: center;
  margin-bottom: 3rem;
`;

export const SymptomCard = styled.div`
  background: #f9f9f9;
  padding: 1.2rem 1rem;
  border-radius: 12px;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  width: 100%;
  max-width: 380px;
`;

export const Icon = styled.div`
  color: #000;
  font-size: 1.3rem;
  margin-top: 0.2rem;
`;

export const Description = styled.p`
  text-align: left;
  font-size: 0.95rem;
  color: #333;
`;

export const FooterText = styled.p`
  font-size: 1rem;
  color: #222;
  margin-bottom: 1.5rem;
`;

export const FooterLink = styled.a`
  font-weight: 600;
  font-size: 1rem;
  color: #1c7c54;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
