import { Container, Section, StepCard, StepContent, StepNumber, StepText, StepTitle, Title } from "./styles";

export function TherapySteps() {
    return (
      <Section>
        <Container>
          <Title>Como funciona o processo terapêutico</Title>
  
          <StepCard>
            <StepNumber>1</StepNumber>
            <StepContent>
              <StepTitle>Primeira conversa</StepTitle>
              <StepText>
                Você agenda um primeiro contato para me contar o que está vivendo e tirar dúvidas sobre o processo terapêutico.
              </StepText>
            </StepContent>
          </StepCard>
  
          <StepCard>
            <StepNumber>2</StepNumber>
            <StepContent>
              <StepTitle>Definição de objetivos</StepTitle>
              <StepText>
                Nas primeiras sessões, identificamos juntos seus objetivos de curto, médio e longo prazo.
              </StepText>
            </StepContent>
          </StepCard>
  
          <StepCard>
            <StepNumber>3</StepNumber>
            <StepContent>
              <StepTitle>Desenvolvimento do processo</StepTitle>
              <StepText>
                O acompanhamento acontece semanalmente, com base nos seus objetivos e no que está presente no momento.
                O ritmo é seu.
              </StepText>
            </StepContent>
          </StepCard>
  
          <StepCard>
            <StepNumber>4</StepNumber>
            <StepContent>
              <StepTitle>Encaminhamento para alta</StepTitle>
              <StepText>
                Quando os objetivos forem sendo alcançados, caminhamos, juntos, para o encerramento do processo de forma
                gradual, cuidadosa e consciente.
              </StepText>
            </StepContent>
          </StepCard>
        </Container>
      </Section>
    );
  }