 import { Nav, Logo, Hamburger, Menu, NavItem } from "./styles";
// import { FaWhatsapp } from "react-icons/fa";

// export function Header() {
//   return (
//     <ContainerHeader>
//       <HeaderInfo>
//         <a href="/">
//           <h1>Luisa Fernandez</h1>
//           <span className="text-sm block text-nude-700 font-normal">
//             Psicóloga | CRP: 05/69797
//           </span>
//         </a>
//       </HeaderInfo>

//       <Navigation>
//         <button>Sobre</button>
//         <button>Abordagem</button>
//         <button>Metodologia</button>
//         <button>FAQ</button>
//         <Contact href="">
//           <FaWhatsapp size={16} color="#25D366" />
//           Agende sua sessão
//         </Contact>
//       </Navigation>
//     </ContainerHeader>
//   );
// }

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Nav>
      <Logo href="/">Luisa Fernandez</Logo>

      <Hamburger onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>

      <Menu isOpen={menuOpen}>
        <NavItem href="#sobre-mim" onClick={closeMenu}>Sobre mim</NavItem>
        <NavItem href="#abordagem" onClick={closeMenu}>Abordagem</NavItem>
        <NavItem href="#sintomas" onClick={closeMenu}>Sintomas</NavItem>
        <NavItem href="#beneficios" onClick={closeMenu}>Benefícios</NavItem>
        <NavItem href="#faq" onClick={closeMenu}>Dúvidas</NavItem>
        <NavItem href="#contato" onClick={closeMenu}>Contato</NavItem>
      </Menu>
    </Nav>
  );
}