import healthImg from "@/assets/health.jpg";
import climateImg from "@/assets/climate.jpg";
import foodImg from "@/assets/food.jpeg";
import womenImg from "@/assets/women.jpg";
import educationImg from "@/assets/education.jpeg";
import farmingImg from "@/assets/farming.jpeg";

export const images: CarouselImage[] = [
  {
    src: healthImg,
    alt: "Electric professional 1",
  },
  {
    src: climateImg,
    alt: "Electric professional 2 ",
  },
  {
    src: foodImg,
    alt: "Electric professional 3",
  },
  {
    src: womenImg,
    alt: "Electric professional 3",
  },
  {
    src: educationImg,
    alt: "Electric professional 3",
  },
  {
    src: farmingImg,
    alt: "Electric professional 3",
  },
];
export interface CarouselImage {
  src: string;
  alt: string;
}
