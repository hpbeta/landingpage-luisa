import { FiHeart, FiTarget, FiStar } from "react-icons/fi";
import { GiBrain } from "react-icons/gi";
import { Section, Title, ValueCard } from "./styles";

export function CoreValues() {
  const values = [
    {
      icon: <FiHeart />,
      title: "Acolhimento",
      description: "Um espaço seguro para você ser quem é",
      color: "#FCE6D6",
    },
    {
      icon: <GiBrain />,
      title: "Autoconhecimento",
      description: "Compreenda seus padrões e emoções",
      color: "#E4D3C5",
    },
    {
      icon: <FiTarget />,
      title: "Objetivos",
      description: "Desenvolva estratégias práticas",
      color: "#DCDDC8",
    },
    {
      icon: <FiStar />,
      title: "Transformação",
      description: "Construa uma vida mais leve",
      color: "#B8B99E",
    },
  ];

  return (
    <>
      <Title>O que guia cada sessão</Title>
    <Section>
      
      {values.map((item, index) => (
        <ValueCard key={index} $bg={item.color}>
          {item.icon}
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </ValueCard>
      ))}
    </Section>
    </>
  );
}
