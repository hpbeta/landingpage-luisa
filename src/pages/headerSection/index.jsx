import {
    Container,
    Title,
    Subtitle,
    ContactButton,
    ContactBox,
    ContactItem,
  } from "./styles";
  
  export default function HeaderSection() {
    return (
      <Container id="contato">
        <Title>
          A sua saúde mental precisa ser uma prioridade.
        </Title>
        <Subtitle>
          Se você sente que está na hora de cuidar de você, estou aqui para te ouvir.
        </Subtitle>
  
        <ContactButton>
          Entre em contato
        </ContactButton>
  
        <ContactBox>
          <ContactItem>
            📞 Atendimento via WhatsApp: +55 21 96737-4546
          </ContactItem>
          <ContactItem>
            🧠 Psicóloga Luisa Martins Loureiro Fernandez – CRP 05/69797
          </ContactItem>
        </ContactBox>
      </Container>
    );
  }