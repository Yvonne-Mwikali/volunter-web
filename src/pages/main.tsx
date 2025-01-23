import { ServiceCarousel } from "@/components/service-carousel";
import { AboutUs } from "@/home/about-us";
import { ContactPage } from "@/home/contact-us-section";
import HeroSection from "@/home/hero-section";
import { HowWeWork } from "@/home/how-we work";
import { TeamGrid } from "@/home/team-grid-page";
import { TestimonialsPage } from "@/home/testimonial-section";

export function MainHomePages() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <ServiceCarousel />
      <HowWeWork />
      <TeamGrid />
      <TestimonialsPage />
      <ContactPage />
    </>
  );
}
