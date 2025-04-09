import { FiHeart, FiTarget, FiStar } from "react-icons/fi";
import { GiBrain } from "react-icons/gi";
import { Section, ValueCard } from "./styles";


export function CoreValues() {
    
        const values = [
          {
            icon: <FiHeart />,
            title: "Acolhimento",
            description: "Um espaço seguro para você ser quem é",
          },
          {
            icon: <GiBrain />,
            title: "Autoconhecimento",
            description: "Compreenda seus padrões e emoções",
          },
          {
            icon: <FiTarget />,
            title: "Objetivos",
            description: "Desenvolva estratégias práticas",
          },
          {
            icon: <FiStar />,
            title: "Transformação",
            description: "Construa uma vida mais leve",
          },
        ];
      
        return (
          <Section>
            {values.map((item, index) => (
              <ValueCard key={index}>
                {item.icon}
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </ValueCard>
            ))}
          </Section>
        );
      };
