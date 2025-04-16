import { BsCheckCircle } from "react-icons/bs";
import {
  Container,
  Description,
  FooterLink,
  FooterText,
  Grid,
  Heading,
  Icon,
  SymptomCard,
} from "./styles";

const symptoms = [
  "Preocupações constantes e sensação de que sua mente não desliga nunca",
  "Exigência extrema consigo mesmo(a) e dificuldade de se permitir falhar",
  "Sensação de estar sempre no limite, mesmo quando tudo 'deveria' estar bem",
  "Medo de decepcionar os outros e dificuldade de dizer 'não'",
  "Dificuldade de iniciar tarefas e sentimento de culpa por procrastinar",
  "Reações impulsivas para aliviar a tensão (como roer unha ou cutucar a pele)",
  "Sono irregular, crises de choro, coração acelerado, pensamento confuso",
  "Tendência a evitar situações que geram desconforto",
  "Uso da comida para tentar aliviar emoções difíceis",
];

export function CardSymptoms() {
  return (
    <Container id="sintomas">
      <Heading>
        Se a ansiedade tem impactado sua vida, talvez você se reconheça em
        algumas dessas situações:
      </Heading>

      <Grid>
        {symptoms.map((text, index) => (
          <SymptomCard key={index}>
            <Icon>
              <BsCheckCircle />
            </Icon>
            <Description>{text}</Description>
          </SymptomCard>
        ))}
      </Grid>

      <FooterText>
        Se você se identificou, saiba: existe ajuda. É possível viver com mais
        clareza e presença.
      </FooterText>

      <FooterLink
        href="https://wa.me/5521967374546?text=Ol%C3%A1%2C%20Luisa!%20Meu%20nome%20%C3%A9%20(coloque%20o%20seu%20nome%20aqui).%20Gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20psicoterapia!%20%E2%9C%A8"
        target="_blank"
        rel="noopener noreferrer"
      >
        Agende sua consulta →
      </FooterLink>
    </Container>
  );
}
