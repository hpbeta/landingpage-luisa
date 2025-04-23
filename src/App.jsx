import { WhatsAppButton } from "./components/whatsappButton";
import { GlobalStyles } from "./globalStyles/globalStyles";
import { AboutMe } from "./pages/aboutMe";
import { ApproachSection } from "./pages/approachSection";
import { CardSymptoms } from "./pages/cardSymptoms";
import { FaqAccordion } from "./pages/faqAcordeon";
import { Footer } from "./pages/footer";
import { Header } from "./pages/header";
import HeaderSection from "./pages/headerSection";
import { Hero } from "./pages/hero";
import InstagramSection from "./pages/instagramSection";
import TabsSection from "./pages/tabSection";
import { WhyTherapy } from "./pages/whytherapy";

function App() {
  return (
    <>
      <GlobalStyles />
      <WhatsAppButton />
      <Header />
      <Hero />
      <CardSymptoms />
      <WhyTherapy />
      <AboutMe />
      <ApproachSection />
      <TabsSection />
      <FaqAccordion />
      <HeaderSection />
      <InstagramSection />
      <Footer />
    </>
  );
}

export default App;
