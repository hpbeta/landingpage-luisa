import styled from "styled-components";

export const Section = styled.section`
  background: linear-gradient(180deg, #f4eae1 0%, #fceee3 100%);
  padding: 6rem 1.5rem;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 680px;
  text-align: left;
  color: #1c1c1c;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  font-family: "Georgia", serif;
  margin-bottom: 2rem;
  text-align: center;
`;

export const Paragraph = styled.p`
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 1.2rem;
`;

export const Button = styled.a`
  display: inline-block;
  margin-top: 2.5rem;
  padding: 0.8rem 2rem;
  background-color: #fceee3;
  border-radius: 24px;
  color: #333;
  font-weight: 500;
  font-size: 1rem;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f9ded0;
  }
`;
