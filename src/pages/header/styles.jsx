
import styled from "styled-components";

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

  @media(max-width: 414px) {
    width: 100%;
  }
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
    transition: all 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
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
    text-align: center;
    width: 100%;
    border-bottom: 1px solid #eaeaea;

    &:last-child {
      border-bottom: none;
    }
  }
`;