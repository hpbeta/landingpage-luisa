import { Button, Container, Paragraph, Section, Title } from "./styles";

export function WhyTherapy() {
    return (
      <Section>
        <Container>
          <Title>Por que fazer terapia?</Title>
          <Paragraph>
            A psicoterapia é um espaço de cuidado emocional — um lugar seguro onde você pode se escutar com mais gentileza.
          </Paragraph>
          <Paragraph>
            Não se trata de aprender a controlar suas emoções.
          </Paragraph>
          <Paragraph>
            Mas sim de aprender a compreendê-las, lidar com elas de forma mais consciente e fazer escolhas alinhadas com quem você é e com o que importa para você.
          </Paragraph>
          <Paragraph>
            A ansiedade faz parte da vida.
          </Paragraph>
          <Paragraph>
            Mas ela não precisa tomar conta de tudo.
          </Paragraph>
          <Button href="#contato">Entre em contato</Button>
        </Container>
      </Section>
    );
  }