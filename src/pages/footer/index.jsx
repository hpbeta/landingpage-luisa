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
          <a href="https://wa.me/seulink" target="_blank" rel="noreferrer">
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