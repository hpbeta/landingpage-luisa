import { Button, Container, Paragraph, Section, Title } from "./styles";

export function WhyTherapy() {
  return (
    <Section id="beneficios">
      <Container>
        <Title>Por que fazer terapia?</Title>
        <Paragraph>
          A psicoterapia é um espaço de cuidado emocional — um lugar seguro onde
          você pode se escutar com mais gentileza.
        </Paragraph>
        <Paragraph>
          Não se trata de aprender a controlar suas emoções.
        </Paragraph>
        <Paragraph>
          Mas sim de compreendê-las, lidar com elas com mais consciência e fazer
          escolhas alinhadas com quem você é e com o que importa para você.
        </Paragraph>
        <Paragraph>A ansiedade faz parte da vida.</Paragraph>
        <Paragraph>Mas ela não precisa tomar conta de tudo.</Paragraph>
        <Button
          href="https://wa.me/5521967374546?text=Ol%C3%A1%2C%20Luisa!%20Meu%20nome%20%C3%A9%20(coloque%20o%20seu%20nome%20aqui).%20Gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20psicoterapia!%20%E2%9C%A8"
          target="_blank"
          rel="noopener noreferrer"
        >
          Entre em contato
        </Button>
      </Container>
    </Section>
  );
}
