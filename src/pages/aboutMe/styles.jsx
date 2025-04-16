import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    gap: 10px;
    flex-direction: column-reverse;
  }
`;

export const ContainerInfo = styled.div`
  background-color: #ffffffcc;
  padding: 2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  width: 780px;
  height: 860px;

  h1 {
    margin-bottom: 1rem;
    font-family: "Poppins", sans-serif;
    color: #b8b99e;
    font-size: 2.2rem;
  }

  h2 {
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
    font-style: italic;
    color: #a09f9d;
  }

  p {
    margin-bottom: 1rem;
    font-family: "Poppins", sans-serif;
    color: #4e4e4e;
    font-size: 1.05rem;
    line-height: 1.8;
  }

  @media (max-width: 1024px) {
    width: 90%;
    height: auto;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1.5rem;
  }
`;

export const ContainerInstagram = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #fce6d6;
  color: #3d3d3d;
  padding: 0.8rem 1.2rem;
  border-radius: 30px;
  font-weight: 500;
  text-decoration: none;
  margin-top: 1.5rem;
  transition: background-color 0.3s ease;
  width: 250px;

  &:hover {
    background-color: #e4d3c5;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    width: auto;
    padding: 0.8rem 1rem;
  }
`;

export const Img = styled.img`
  width: 773px;
  height: 860px;
  object-fit: cover;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.08);

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-top: 20px;
  }
`;
