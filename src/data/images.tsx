import electrician1 from "@/assets/electrician1.jpeg";
import electrician2 from "@/assets/electrician2.jpeg";
import electrician3 from "@/assets/electrician3.jpeg";

export const images: CarouselImage[] = [
  {
    src: electrician1,
    alt: "Electric professional 1",
  },
  {
    src: electrician3,
    alt: "Electric professional 2 ",
  },
  {
    src: electrician2,
    alt: "Electric professional 3",
  },
];
export interface CarouselImage {
  src: string;
  alt: string;
}
