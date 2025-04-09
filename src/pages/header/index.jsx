import { Contact, ContainerHeader, HeaderInfo, Navigation } from "./styles";
import { FaWhatsapp } from "react-icons/fa";

export function Header() {
  return (
    <ContainerHeader>
      <HeaderInfo>
        <a href="/">
          <h1>Luisa Fernandez</h1>
          <span className="text-sm block text-nude-700 font-normal">
            Psicóloga | CRP: 05/69797
          </span>
        </a>
      </HeaderInfo>

      <Navigation>
        <button>Sobre</button>
        <button>Abordagem</button>
        <button>Metodologia</button>
        <button>FAQ</button>
        <Contact href="">
          <FaWhatsapp size={16} color="#25D366" />
          Agende sua sessão
        </Contact>
      </Navigation>
    </ContainerHeader>
  );
}
