import styled from "styled-components";


export const ContainerHeader = styled.header`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 30px 70px;
    box-shadow: 0px 7px 7px 0px rgba(0,0,0,0.1);
    position: sticky;
  top: 0;
  z-index: 999;
  background-color: #FFFFFF;
  opacity: 0.9;
`

export const HeaderInfo = styled.header`
    cursor: pointer;
h1 {
            color: #E8B7B0;

        font-family: "Playfair Display", serif;
        font-size: 20px;
        height: 31px;
    }

    span {
        font-size: 13px;
        color: #a6867f;
    }
`

export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    gap: 20px;

    button {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #777872;
        font-family: "Poppins", sans-serif;
        border: none;
        background: none;
        cursor: pointer;
        font-size: 15px;
        
        &:hover {
            color: #5d8f5c;
        }
    }
`

export const Contact = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: #468844;
    color: #FFFFFF;
    padding: 15px 20px;
    border-radius: 5px;
    margin-left: 20px;
    font-family: "Poppins", sans-serif;
    transition: 0.3s;

    &:hover {
        
        background-color: #5e8e5c;
    }
`