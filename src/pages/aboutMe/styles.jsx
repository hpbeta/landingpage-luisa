import styled from "styled-components";

export const Main = styled.main`
display: flex;
align-items: center;
gap: 90px;
padding: 0 0 50px 30px;

`

export const ContainerInfo = styled.div`

    
 
 h1 {
    margin-bottom: 20px;
    font-family: "Poppins", sans-serif;
    color: #8e8d8a;

 }

 p {
    margin-bottom: 20px;
    width: 600px;
    font-family: "Poppins", sans-serif;
    color: #53544e;
 }
`
export const ContainerInstagram = styled.a`
  
    display: flex;
    align-items: center;
    gap: 5px;
    background-color: #ebd6cc;
    color: #53544e;
    padding: 15px 10px;
    border-radius: 5px;
    width: 200px;
    transition: 0.3s;

    &:hover {
        opacity: 0.9;
    }
 
`
export const Img = styled.img`
background-size: cover;
background-position: center;
background-repeat: no-repeat;
width: 700px;
height: 650px;
border-radius: 10px;
mask-image: linear-gradient(to right, transparent, black 30%);
-webkit-mask-image: linear-gradient(to right, transparent, black 30%);
  
`

