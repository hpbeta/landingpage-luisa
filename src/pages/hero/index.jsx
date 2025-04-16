import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  ButtonKnowMore,
  Contact,
  ContainerButton,
  ContainerInfo,
  Main,
  ParagraphInfo,
} from "./styles";
import fotoLuisa from "../../assets/foto-luisa.jpg";

export function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const MotionWrapper = isMobile ? "div" : motion.div;

  return (
    <Main>
      <MotionWrapper
        {...(!isMobile && {
          initial: { x: -100, opacity: 0 },
          whileInView: { x: 0, opacity: 1 },
          transition: { duration: 2, ease: "easeOut" },
          viewport: { once: false, amount: 0.5 },
        })}
        style={{ width: "100%" }}
      >
        <img src={fotoLuisa} alt="Foto da Luisa" />
      </MotionWrapper>

      <ContainerInfo
        as={MotionWrapper}
        {...(!isMobile && {
          initial: { x: 100, opacity: 0 },
          whileInView: { x: 0, opacity: 1 },
          transition: { duration: 1 },
          viewport: { once: false, amount: 0.5 },
        })}
      >
        <h1>
          Liberdade é viver sem ser refém da <span>Ansiedade</span>
        </h1>
        <ParagraphInfo>
          Você não precisa enfrentar tudo isso sozinho(a). Existe um espaço
          seguro para te escutar, te acolher e te ajudar a construir uma relação
          mais saudável com as suas emoções.
        </ParagraphInfo>
        <ContainerButton>
          <Contact
            href="https://wa.me/5521967374546?text=Ol%C3%A1%2C%20Luisa!%20Meu%20nome%20%C3%A9%20(coloque%20o%20seu%20nome%20aqui).%20Gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20psicoterapia!%20%E2%9C%A8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={16} color="#25D366" />
            Agende sua sessão
          </Contact>
          <ButtonKnowMore>Saiba mais</ButtonKnowMore>
        </ContainerButton>
      </ContainerInfo>
    </Main>
  );
}
