import styled from "styled-components";

export const Container = styled.section`
  background-color:#f4eae1;
  text-align: center;
  padding: 60px 20px;
  font-family: 'Segoe UI', sans-serif;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #2c1e16;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  color: #4f4039;
  margin-bottom: 32px;
`;

export const ContactButton = styled.a`
background-color: #468844;
 color: #FFFFFF;
  padding: 12px 24px;
  border-radius: 999px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;
  border: none;

  &:hover {
    background-color: #5e8e5c;
  }
`;

export const ContactBox = styled.div`
  background-color: white;
  padding: 20px;
  margin: 40px auto 0;
  border-radius: 16px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  max-width: 500px;
  text-align: left;

  @media (max-width: 500px) {
    text-align: center;
  }
`;

export const ContactItem = styled.p`
  color: #4f4039;
  margin: 8px 0;
  font-size: 1rem;
`;