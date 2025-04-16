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
  
        <ContactButton  href="https://wa.me/5521967374546?text=Ol%C3%A1%2C%20Luisa!%20Meu%20nome%20%C3%A9%20(coloque%20o%20seu%20nome%20aqui).%20Gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20psicoterapia!%20%E2%9C%A8"
  target="_blank"
  rel="noopener noreferrer">
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