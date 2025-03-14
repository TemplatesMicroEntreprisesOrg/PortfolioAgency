import AdvantagesCards from "../components/AdvantagesCards/AdvantagesCards";
import Hero from "../components/Hero/Hero";
import TeamPresentation from "../components/TeamPresentation/TeamPresentation";
import Testimonials from "../components/Testimonials/Testimonials";
import Expertises from "../components/Expertises/Expertises";
import ProjectsClient from "../components/Projects/ProjectsClient";

import ProjectsSteps from "../components/ProjectsSteps/ProjectsSteps";
// import ContactForm from "../components/ContactForm/ContactForm";
// import { FormProvider } from "../context/ConfirmationPopupContext";
// import ConfirmationPopup from "../components/ConfirmationPopup/ConfirmationPopup";
// import Faq from "../components/Faq/Faq";
import BackgroundCircles from "../components/BackgroundCircles/BackgroundCircles";
import LanguageSelector from "@/components/LanguageSelector/LanguageSelector";
import translations from "../../public/translation";
import { cookies } from "next/headers";
import ProjectStack from "@/components/ProjectStack/ProjectStack";
import MainValuesCardsServer from "@/components/MainValuesCards/MainValuesCardsServer";

export default async function Home() {
  const selectedLanguage =
    ((await cookies()).get("selectedLanguage")
      ?.value as keyof typeof translations) || "fr";

  return (
    <div style={{ position: "relative" }}>
      {/* <FormProvider> */}
      {/* <ConfirmationPopup /> */}
      <LanguageSelector />
      <section className="section sectionHero">
        <Hero />
        <BackgroundCircles
          numCircles={2}
          colors={["rgba(252, 109, 54, 0.6)", "rgb(50, 43, 225, 0.6)"]}
          minSize={1000}
          maxSize={1000}
          blurAmount={110}
          initialPositions={[
            { top: -75, left: 0 },
            { top: -60, left: 60 },
          ]}
          moveDistances={[
            { x: 280, y: 0 },
            { x: 290, y: 0 },
          ]}
          sides={["left", "right"]}
          scrollSpeedFactor={100}
        />
      </section>
      <section className="section sectionAdvantages">
        <AdvantagesCards />
        <BackgroundCircles
          numCircles={1}
          colors={["rgb(50, 43, 225, 0.6)"]}
          minSize={500}
          maxSize={500}
          blurAmount={110}
          initialPositions={[{ top: -0, left: -10 }]}
          moveDistances={[{ x: 0, y: 400 }]}
          sides={["bottom"]}
          scrollSpeedFactor={200}
        />
      </section>
      <section className="section sectionMainValues">
        <MainValuesCardsServer />
      </section>
      <section className="section sectionProjectsSteps">
        <BackgroundCircles
          numCircles={1}
          colors={["rgba(252, 109, 54, 0.6)"]}
          minSize={400}
          maxSize={400}
          blurAmount={170}
          initialPositions={[{ top: 0, left: 90 }]}
          moveDistances={[{ x: 0, y: 400 }]}
          sides={["bottom"]}
          scrollSpeedFactor={100}
        />
        <h2>{translations[selectedLanguage].projectsSteps.title}</h2>
        <ProjectsSteps />
      </section>
      <section className="section sectionExpertise">
        <h2>{translations[selectedLanguage].expertise.title}</h2>
        <p>{translations[selectedLanguage].expertise.description}</p>
        <Expertises />
      </section>
      <section className="section sectionFlex sectionProjects">
        <BackgroundCircles
          numCircles={2}
          colors={["rgba(252, 109, 54, 0.6)", "rgb(50, 43, 225, 0.6)"]}
          minSize={1000}
          maxSize={1000}
          blurAmount={160}
          initialPositions={[
            { top: 100, left: 0 },
            { top: 0, left: 0 },
          ]}
          moveDistances={[
            { x: 0, y: 400 },
            { x: 300, y: 0 },
          ]}
          sides={["bottom", "right"]}
          scrollSpeedFactor={100}
        />
        <h2>{translations[selectedLanguage].projects.title}</h2>
        <ProjectsClient />
      </section>
      <section className="section sectionFlex sectionTestimonials">
        <BackgroundCircles
          numCircles={1}
          colors={["rgb(50, 43, 225, 0.6)"]}
          minSize={800}
          maxSize={800}
          blurAmount={160}
          initialPositions={[{ top: 0, left: 80 }]}
          moveDistances={[{ x: 400, y: 0 }]}
          sides={["left"]}
          scrollSpeedFactor={100}
        />
        <h2>{translations[selectedLanguage].testimonials.title}</h2>
        <Testimonials />
      </section>
      <section className="section sectionFlex sectionTeamPresentation">
        <BackgroundCircles
          numCircles={2}
          colors={["rgba(252, 109, 54, 0.6)", "rgb(50, 43, 225, 0.6)"]}
          minSize={300}
          maxSize={600}
          blurAmount={170}
          initialPositions={[
            { top: 0, left: 80 },
            { top: 0, left: 0 },
          ]}
          moveDistances={[
            { x: 0, y: 200 },
            { x: 0, y: 400 },
          ]}
          sides={["top", "bottom"]}
          scrollSpeedFactor={100}
        />
        <h2>{translations[selectedLanguage].team.title}</h2>
        <TeamPresentation />
      </section>
      <section className="section sectionFlex sectionTeamStack">
        <BackgroundCircles
          numCircles={1}
          colors={["rgba(252, 109, 54, 0.6)"]}
          minSize={400}
          maxSize={400}
          blurAmount={170}
          initialPositions={[{ top: 0, left: 80 }]}
          moveDistances={[{ x: 600, y: 0 }]}
          sides={["left"]}
          scrollSpeedFactor={100}
        />
        <ProjectStack />
      </section>
      {/* <section className="section sectionFaq">
        <BackgroundCircles
          numCircles={1}
          colors={["rgba(252, 109, 54, 0.6)"]}
          minSize={400}
          maxSize={400}
          blurAmount={170}
          initialPositions={[{ top: 0, left: 0 }]}
          moveDistances={[{ x: 0, y: 400 }]}
          sides={["bottom"]}
          scrollSpeedFactor={100}
        />
        <Faq />
      </section> */}
      <section className="section sectionFlex sectionContact">
        <BackgroundCircles
          numCircles={2}
          colors={["rgb(50, 43, 225, 0.6)", "rgba(252, 109, 54, 0.6)"]}
          minSize={700}
          maxSize={700}
          blurAmount={110}
          initialPositions={[
            { top: 0, left: 0 },
            { top: 0, left: 60 },
          ]}
          moveDistances={[
            { x: 500, y: 0 },
            { x: 500, y: 0 },
          ]}
          sides={["left", "right"]}
          scrollSpeedFactor={100}
        />
        <h2>{translations[selectedLanguage].contact.title}</h2>
        {/* <ContactForm /> */}
      </section>
      {/* </FormProvider> */}
    </div>
  );
}
