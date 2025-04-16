import { FaWhatsapp } from "react-icons/fa";
import { FloatingButton } from "./styles";

export function WhatsAppButton  ()  {
    return (
      <FloatingButton
        href="https://wa.me/5521967374546?text=Ol%C3%A1%2C%20Luisa!%20Meu%20nome%20%C3%A9%20(coloque%20o%20seu%20nome%20aqui).%20Gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20psicoterapia!%20%E2%9C%A8"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </FloatingButton>
    );
  };