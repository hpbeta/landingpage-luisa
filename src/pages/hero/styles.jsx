import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  gap: 40px;
  overflow-x: hidden;

  img {
    width: 700px;
    height: 650px;
    mask-image: linear-gradient(to left, transparent, black 30%);
-webkit-mask-image: linear-gradient(to left, transparent, black 30%);
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 70px;
  width: 50%;

  h1 {
    font-size: 50px;
    line-height: 65px;
    font-family: "Poppins", sans-serif;
  
  }

  span {
    color: #E8B7B0;
  }
`;
export const ParagraphInfo = styled.p`
  width: 600px;
  font-size: 20px;
  color: #89877a;
  line-height: 30px;
  font-family: "Poppins", sans-serif;
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  margin-top: 10px;
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
`;

export const ButtonKnowMore = styled.button`
  color: #FFFFFF;
  background-color:#B8B99E;
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
`;
