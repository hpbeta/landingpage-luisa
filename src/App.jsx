import { GlobalStyles } from "./globalStyles/globalStyles"
import { AboutMe } from "./pages/aboutMe"
import { ApproachSection } from "./pages/approachSection"
import { CardSymptoms } from "./pages/cardSymptoms"
import { CoreValues } from "./pages/coreValues"
import {  FaqAccordion } from "./pages/faqAcordeon"
import { Footer } from "./pages/footer"
import { Header } from "./pages/header"
import HeaderSection from "./pages/headerSection"
import { Hero } from "./pages/hero"
import InstagramSection from "./pages/instagramSection"
import TabsSection from "./pages/tabSection"
import { TherapySteps } from "./pages/therapySteps"
import { WhyTherapy } from "./pages/whytherapy"


function App() {

  return (
   <>
   <GlobalStyles />
    <Header />
    <Hero />
    <CoreValues />
    <CardSymptoms />
    <WhyTherapy />
    <AboutMe />
    <ApproachSection />
    <TherapySteps />
    <TabsSection />
    <FaqAccordion />
    <HeaderSection />
    <InstagramSection />
    <Footer />
   
   </>
  )
}

export default App
