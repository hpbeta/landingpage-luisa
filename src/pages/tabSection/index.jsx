import { useState } from "react";
import { ContentBox, TabButton, TabContainer, Title, Text } from "./styles";

export default function TabsSection() {
    const [activeTab, setActiveTab] = useState("longe");
  
    return (
      <div>
        <TabContainer>
          <TabButton
            active={activeTab === "longe"}
            onClick={() => setActiveTab("longe")}
          >
            Para quem está longe de casa
          </TabButton>
          <TabButton
            active={activeTab === "carreira"}
            onClick={() => setActiveTab("carreira")}
          >
            Mudança de carreira
          </TabButton>
        </TabContainer>
  
        {activeTab === "longe" && (
          <ContentBox>
            <Title>Psicoterapia para quem está em processo de adaptação ou mudança</Title>
            <Text>
              Nos últimos anos, atendi muitas pessoas que estavam passando pela transição de morar em outro país — ou em outra cidade. É comum nesse momento vivenciar o luto daquilo que ficou para trás, a solidão e uma sensação de desencaixe. A psicoterapia pode ser uma ferramenta importante para ajudar você a se acolher e se adaptar nesse novo momento, sem precisar apagar tudo o que veio antes.
            </Text>
          </ContentBox>
        )}
  
        {activeTab === "carreira" && (
          <ContentBox>
            <Title>Mudança de carreira e recomeços</Title>
            <Text>
              Mudar de carreira, começar do zero ou seguir um novo caminho profissional pode ser empolgante — mas também assustador. Através da escuta terapêutica, podemos investigar seus desejos, elaborar os medos envolvidos e desenvolver estratégias para atravessar esse recomeço de forma mais consciente e segura.
            </Text>
          </ContentBox>
        )}
      </div>
    );
  }