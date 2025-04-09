import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { 
  ButtonKnowMore, 
  Contact, 
  ContainerButton, 
  ContainerInfo, 
  Main, 
  ParagraphInfo 
} from "./styles";
import fotoLuisa from "../../assets/foto-luisa.jpg";

export function Hero() {
  return (
    <Main>
    
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }} 
      >
        <img src={fotoLuisa} alt="Foto da Luisa" />
      </motion.div>

      <ContainerInfo
        as={motion.div}
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.5 }} 
      >
        <h1>
          Liberdade é viver sem ser refém da <span>Ansiedade</span>
        </h1>
        <ParagraphInfo>
        Você não precisa enfrentar tudo isso sozinho(a).

Existe um espaço seguro para te escutar, te acolher e te ajudar a construir uma relação mais saudável com as suas emoções.
        </ParagraphInfo>
        <ContainerButton>
          <Contact href="">
            <FaWhatsapp size={16} color="#25D366" />
            Agende sua sessão
          </Contact>
          <ButtonKnowMore>Saiba mais</ButtonKnowMore>
        </ContainerButton>
      </ContainerInfo>
    </Main>
  );
}