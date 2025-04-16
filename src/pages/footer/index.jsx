import { FooterContainer, TopSection, Left, Right, Bottom } from "./styles";
import { FiPhone } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <FooterContainer>
      <TopSection>
        <Left>
          <strong>Luisa Fernandez</strong> • Psicóloga CRP 05/69797
          <span>Atendimento online para todo o Brasil</span>
        </Left>

        <Right>
          <a href="https://wa.me/5521967374546?text=Ol%C3%A1%2C%20Luisa!%20Meu%20nome%20%C3%A9%20(coloque%20o%20seu%20nome%20aqui).%20Gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20psicoterapia!%20%E2%9C%A8"
  target="_blank"
  rel="noopener noreferrer">
            <FiPhone /> WhatsApp
          </a>
          <a href="https://instagram.com/luisafernandez.psi" target="_blank" rel="noreferrer">
            <FaInstagram /> Instagram
          </a>
        </Right>
      </TopSection>

      <Bottom>
        © 2025 Luisa Fernandez. Todos os direitos reservados.
      </Bottom>
    </FooterContainer>
  );
}