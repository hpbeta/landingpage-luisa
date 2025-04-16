import { useState } from "react";
import {
  AccordionContainer,
  AccordionItem,
  Question,
  Answer,
  Title,
} from "./styles";

const faqs = [
  {
    question: "🕒 Com que frequência ocorrem as sessões?",
    answer: "As sessões duram 50 minutos e, geralmente, acontecem uma vez por semana.",
  },
  {
    question: "💰 Qual é o valor das sessões?",
    answer: "Por orientação do Código de Ética do CFP, não posso divulgar valores publicamente. Me chama no WhatsApp para mais informações.",
  },
  {
    question: "💳 Quais formas de pagamento você aceita?",
    answer: "O pagamento é feito via PIX, de forma prática e segura.",
  },
  {
    question: "📋 Você atende por plano de saúde?",
    answer: "Não atendo por convênios, mas forneço recibos para reembolso. Verifique com seu plano de saúde se há cobertura para psicoterapia.",
  },
  {
    question: "📲 Como funcionam as sessões online?",
    answer: "São realizadas por chamada de vídeo, em plataformas seguras. Você só precisa de um ambiente reservado e internet estável.",
  },
  {
    question: "📌 Nunca fiz terapia. Isso pode atrapalhar?",
    answer: "De forma alguma. Eu te explico cada etapa e conduzo o processo no seu tempo.",
  },
  {
    question: "⏳ Em quanto tempo verei resultados?",
    answer: "Cada pessoa tem seu tempo. Algumas mudanças aparecem logo, outras são mais sutis e gradativas. O importante é a constância.",
  },
  {
    question: "⏱️ Quanto tempo dura o tratamento?",
    answer: "O tempo depende dos seus objetivos e da complexidade das questões. Isso será alinhado ao longo do processo.",
  },
  {
    question: "🗓️ Posso remarcar ou cancelar uma sessão?",
    answer: "Sim, com no mínimo 24h de antecedência.",
  },
];

export  function FaqAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <AccordionContainer id="faq">
      <Title>Perguntas Frequentes</Title>
      {faqs.map((item, index) => (
        <AccordionItem key={index} onClick={() => toggle(index)}>
          <Question>{item.question}</Question>
          {activeIndex === index && <Answer>{item.answer}</Answer>}
        </AccordionItem>
      ))}
    </AccordionContainer>
  );
}