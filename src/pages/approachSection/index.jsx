
// import { Card, CardText, CardTitle, Container, Grid, Section, Title } from "./styles";

// export function ApproachSection() {
//     return (
//       <Section>
//         <Container>
//           <Title>
//             Minha forma de trabalhar une ciência, estratégia e acolhimento.
//           </Title>
  
//           <Grid>
//             <Card>
//               <CardTitle>Abordagem prática e baseada em evidências</CardTitle>
//               <CardText>
//                 Guio meus atendimentos com base na Terapia
//                 Cognitivo-Comportamental (TCC), uma abordagem validada
//                 cientificamente e considerada uma das mais eficazes para o
//                 tratamento da ansiedade.
//                 <br />
//                 <br />
//                 É uma terapia estruturada, orientada por metas claras e com foco
//                 em desenvolver habilidades para que, com o tempo, você se torne o
//                 seu próprio(a) terapeuta.
//               </CardText>
//             </Card>
  
//             <Card>
//               <CardTitle>Processo estruturado, mas humano</CardTitle>
//               <CardText>
//                 As sessões são planejadas de acordo com seus objetivos e seu
//                 momento de vida. A escuta é ativa, acolhedora e respeita o que
//                 está presente em cada encontro.
//               </CardText>
//             </Card>
  
//             <Card>
//               <CardTitle>Acolhimento e leveza</CardTitle>
//               <CardText>
//                 Trabalho com uma linguagem clara, empática e sem julgamentos.
//                 Aqui, você encontra um espaço para ser você, do seu jeito.
//               </CardText>
//             </Card>
  
//             <Card>
//               <CardTitle>Experiência real com adaptação emocional</CardTitle>
//               <CardText>
//                 Durante meu mestrado em Portugal, vivi na pele os desafios da
//                 adaptação em outro país. Por isso, compreendo com profundidade as
//                 dores e instabilidades desse momento. Ofereço uma escuta sensível
//                 e estratégias específicas para quem está longe de casa.
//               </CardText>
//             </Card>
//           </Grid>
//         </Container>
//       </Section>
//     );
//   }



import { Card, CardText, CardTitle, Container, Grid, Section, Title } from "./styles";

export function ApproachSection() {
  return (
    <Section id="abordagem">
      <Container>
        <Title>
          Minha forma de trabalhar une ciência, estratégia e acolhimento.
        </Title>

        <Grid>
          <Card>
            <CardTitle>Abordagem prática e baseada em evidências</CardTitle>
            <CardText>
              Guio meus atendimentos com base na Terapia Cognitivo-Comportamental (TCC), uma abordagem validada
              cientificamente e considerada uma das mais eficazes para o tratamento da ansiedade.
              <br />
              <br />
              É uma terapia estruturada, orientada por metas claras e com foco em desenvolver habilidades para que,
              com o tempo, você se torne o seu próprio(a) terapeuta.
            </CardText>
          </Card>

          <Card>
            <CardTitle>Processo estruturado, mas humano</CardTitle>
            <CardText>
              As sessões são planejadas de acordo com seus objetivos e seu momento de vida. A escuta é ativa,
              acolhedora e respeita o que está presente em cada encontro.
            </CardText>
          </Card>

          <Card>
            <CardTitle>Acolhimento e leveza</CardTitle>
            <CardText>
              Trabalho com uma linguagem clara, empática e sem julgamentos. Aqui, você encontra um espaço para
              ser você, do seu jeito.
            </CardText>
          </Card>

          <Card>
            <CardTitle>Experiência real com adaptação emocional</CardTitle>
            <CardText>
              Durante meu mestrado em Portugal, vivi na pele os desafios da adaptação em outro país. Por isso,
              compreendo com profundidade as dores e instabilidades desse momento. Ofereço uma escuta sensível e
              estratégias específicas para quem está longe de casa.
            </CardText>
          </Card>
        </Grid>
      </Container>
    </Section>
  );
}