import { AboutUs } from "@/home/about-us";
import { ContactPage } from "@/home/contact-us-section";
import { HeroSection } from "@/home/hero-section";
import { HowWeWork } from "@/home/how-we work";
import { ProgramsInitiativeCarouselPage } from "@/home/programsInitiave-carosuel";
import { TeamGrid } from "@/home/team-grid-page";

export function MainHomePages() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <ProgramsInitiativeCarouselPage />
      {/* <ProgramsCarousel /> */}
      <HowWeWork />
      <TeamGrid />
      <ContactPage />
    </>
  );
}
