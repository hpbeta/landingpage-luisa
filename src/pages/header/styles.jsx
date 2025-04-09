


// export const ContainerHeader = styled.header`
//     display: flex;
//     align-items: center;
//     width: 100%;
//     justify-content: space-between;
//     padding: 30px 70px;
//     box-shadow: 0px 7px 7px 0px rgba(0,0,0,0.1);
//     position: sticky;
//   top: 0;
//   z-index: 999;
//   background-color: #FFFFFF;
//   opacity: 0.9;
// `

import styled from "styled-components";

// export const HeaderInfo = styled.header`
//     cursor: pointer;
// h1 {
//             color: #E8B7B0;

//         font-family: "Playfair Display", serif;
//         font-size: 20px;
//         height: 31px;
//     }

//     span {
//         font-size: 13px;
//         color: #a6867f;
//     }
// `

// export const Navigation = styled.nav`
//     display: flex;
//     align-items: center;
//     gap: 20px;

//     button {
//         display: flex;
//         align-items: center;
//         text-decoration: none;
//         color: #777872;
//         font-family: "Poppins", sans-serif;
//         border: none;
//         background: none;
//         cursor: pointer;
//         font-size: 15px;
        
//         &:hover {
//             color: #5d8f5c;
//         }
//     }
// `

// export const Contact = styled.a`
//     display: flex;
//     align-items: center;
//     gap: 10px;
//     background-color: #468844;
//     color: #FFFFFF;
//     padding: 15px 20px;
//     border-radius: 5px;
//     margin-left: 20px;
//     font-family: "Poppins", sans-serif;
//     transition: 0.3s;

//     &:hover {
        
//         background-color: #5e8e5c;
//     }
// `

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff5f7;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  z-index: 9999;
`;

export const Logo = styled.a`
  font-size: 1.4rem;
  font-weight: bold;
  font-family: "Georgia", serif;
  color: #b8b99e;
  text-decoration: none;
`;

export const Hamburger = styled.div`
  display: none;
  font-size: 1.4rem;
  color: #4e4e4e;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Menu = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #fff5f7;
    width: 100%;
    flex-direction: column;
    padding: 1rem 0;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    border-top: 1px solid #eaeaea;
  }
`;

export const NavItem = styled.a`
  font-size: 1rem;
  color: #4e4e4e;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #b8b99e;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 2rem;
  }
`;