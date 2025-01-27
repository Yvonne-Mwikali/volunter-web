export enum NavItems {
  Home = "/",
  OurTem = "team",
  HowWeWork = "process",
  OurPrograms = "programs",
  ContactUs = "contact",
  AboutUs = "/about",
}
export const navigation: { name: string; to: NavItems }[] = [
  { name: "Home", to: NavItems.Home },
  { name: "About Us", to: NavItems.AboutUs },
  { name: "Our Team", to: NavItems.OurTem },
  { name: "How We Work", to: NavItems.HowWeWork },
  { name: "Our Programs", to: NavItems.OurPrograms },
  { name: "Contact Us", to: NavItems.ContactUs },
];
