import styled from "styled-components";

export const Container = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: #f1ebe5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h2`
  font-size: 1.8rem;
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.4;
  color: #1c1c1c;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  justify-content: center;
  margin-bottom: 3rem;
  width: 100%;
  max-width: 1000px;
`;

export const SymptomCard = styled.div`
  background: #ffffff;
  padding: 1.5rem 1.2rem;
  border-radius: 16px;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const Icon = styled.div`
  color: #1c7c54;
  font-size: 1.5rem;
  margin-top: 0.2rem;
`;

export const Description = styled.p`
  text-align: left;
  font-size: 1rem;
  color: #333;
  line-height: 1.5;
`;

export const FooterText = styled.p`
  font-size: 1rem;
  color: #222;
  margin-bottom: 1.5rem;
`;

export const FooterLink = styled.a`
  display: inline-block;
  font-weight: 600;
  font-size: 1rem;
  color: #fff;
  background-color: #1c7c54;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #155d40;
  }
`;
