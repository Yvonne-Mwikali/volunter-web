export interface ServiceCard {
  icon: JSX.Element;
  title: string;
  description: string;
  step: number;
}
export interface TestimonialCardProps {
  imageSrc: string;
  name: string;
  role: string;
  testimonial: string;
  rating: number;
}
export interface Service {
  title: string;
  description: string;
  image: string;
  icon: JSX.Element;
}
export interface FeatureItem {
  icon: JSX.Element;
  title: string;
  description: string;
  step: number;
}
export interface Programs {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: JSX.Element;
}
