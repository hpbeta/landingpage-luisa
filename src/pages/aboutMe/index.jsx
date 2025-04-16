


import { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import fotoLuisa from "../../assets/foto-luisa-2.jpg";
import { ContainerInfo, ContainerInstagram, Img, Main } from "./styles";

export function AboutMe() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile(); // verificar no carregamento
    window.addEventListener("resize", checkMobile); // escutar mudanças
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const MotionWrapper = isMobile ? "div" : motion.div;

  return (
    <Main id="sobre-mim">
      <MotionWrapper
        {...(!isMobile && {
          initial: { x: -100, opacity: 0 },
          whileInView: { x: 0, opacity: 1 },
          transition: { duration: 1.5, ease: "easeOut" },
          viewport: { once: false, amount: 0.2 },
        })}
      >
        <ContainerInfo>
          <h1>Quem é Luisa Fernandes?</h1>
          <h2>"Antes de ser psicóloga, eu também precisei me escutar."</h2>
          <p>Durante o meu mestrado em Portugal, vivi uma fase de muitas mudanças — e também de muitos medos.</p>
          <p>Estar longe da família, dos amigos e de tudo que era familiar me trouxe a sensação de estar constantemente em alerta.</p>
          <p>Era como se eu precisasse dar conta de tudo, mesmo quando por dentro eu só queria parar e respirar.</p>
          <p>Foi nesse período que entendi, na prática, como a ansiedade pode se manifestar em momentos de transição.</p>
          <p>E foi também nesse tempo que descobri o quanto a escuta profissional, aliada ao acolhimento e ao conhecimento, pode transformar nossas relações com nós mesmos.</p>
          <p>Hoje, como psicóloga formada pela UFRJ, mestra pela Universidade de Coimbra e pós-graduanda em Psicopatologia e Psicologia Baseada em Evidências, ofereço esse mesmo espaço de acolhimento para quem está buscando se reencontrar.</p>
          <p>Meu compromisso é com uma escuta técnica, ética e humana — e com processos que façam sentido para você.</p>

          <ContainerInstagram href="https://www.instagram.com/luisafernandez.psi/" target="_blank">
            <FaInstagram size={24} color="#E4405F" />
            @luisafernandez.psi
          </ContainerInstagram>
        </ContainerInfo>
      </MotionWrapper>

      <MotionWrapper
        {...(!isMobile && {
          initial: { x: 100, opacity: 0 },
          whileInView: { x: 0, opacity: 1 },
          transition: { duration: 1.5, ease: "easeOut" },
          viewport: { once: false, amount: 0.2 },
        })}
      >
        <Img src={fotoLuisa} alt="Foto de Luisa Fernandez" />
      </MotionWrapper>
    </Main>
  );
}