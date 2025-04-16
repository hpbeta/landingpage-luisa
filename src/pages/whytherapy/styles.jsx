import styled from "styled-components";

export const Section = styled.section`
  background-color: #ede2d9;
  padding: 5rem 2rem;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 1080px;
  width: 100%;
  text-align: center;
  color: #3d3d3d;
  background-color: #ffffffcc;
  padding: 3rem 3rem;
  border-radius: 20px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
`;

export const Title = styled.h2`
  font-size: 2.3rem;
  font-weight: 700;
  font-family: "Georgia", serif;
  margin-bottom: 2rem;
  color: #b8b99e;
`;

export const Paragraph = styled.p`
  font-size: 1.15rem;
  line-height: 1.9;
  margin-bottom: 1.2rem;
  color: #4a4a4a;
`;

export const Button = styled.a`
  display: inline-block;
  margin-top: 2.5rem;
  padding: 1rem 2.5rem;
  background-color: #468844;
  border-radius: 30px;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5e8e5c;
  }
`;
