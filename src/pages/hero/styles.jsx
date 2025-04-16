

import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  gap: 40px;
  overflow-x: hidden;
  overflow-y: hidden;
  height: 100vh;
  margin-top: 30px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 0;
  }
  @media (max-width: 480px) {
    margin-top: 64px;
  }

  img {
    width: 750px;
    height: auto;
    mask-image: linear-gradient(to left, transparent, black 30%);
    -webkit-mask-image: linear-gradient(to left, transparent, black 30%);

    @media (max-width: 1024px) {
      width: 100%;
    }

    @media (max-width: 768px) {
      width: 100%;
      mask-image: none;
      -webkit-mask-image: none;
    }
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 200px;
  width: 50%;

  h1 {
    font-size: 50px;
    line-height: 65px;
    font-family: "Poppins", sans-serif;

    @media (max-width: 1024px) {
      font-size: 40px;
      line-height: 50px;
    }

    @media (max-width: 768px) {
      font-size: 30px;
      line-height: 40px;
    }
  }

  span {
    color: #e8b7b0;
  }

  @media (max-width: 1024px) {
    width: 80%;
    margin-top: 100px;
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin-top: 50px;
    text-align: center;
  }
`;

export const ParagraphInfo = styled.p`
  width: 600px;
  font-size: 20px;
  color: #89877a;
  line-height: 30px;
  font-family: "Poppins", sans-serif;

  @media (max-width: 1024px) {
    width: 100%;
    font-size: 18px;
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
  }
`;

export const Contact = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 20px;
  background-color: #468844;
  color: #ffffff;
  padding: 15px 20px;
  border-radius: 5px;
  font-family: "Poppins", sans-serif;
  transition: 0.3s;

  &:hover {
    background-color: #5e8e5c;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 12px 18px;
  }
`;

export const ButtonKnowMore = styled.button`
  color: #ffffff;
  background-color: #b8b99e;
  border: none;
  padding: 15px 20px;
  border-radius: 5px;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 12px 18px;
  }
`;