import electrician1 from "@/assets/electrician.jpeg";
import electrician2 from "@/assets/electrician2.jpeg";
import { Service } from "@/types";
import { Lightbulb, HeaterIcon as Radiator, Wind } from "lucide-react";

export const servicesCarousel: Service[] = [
  {
    title: "Electrical panels",
    description: "This box could corrode over time loose connection, dust",
    image: electrician2,
    icon: <Lightbulb className="w-6 h-6" />,
  },
  {
    title: "Air condition",
    description: "This box could corrode over time loose connection, dust",
    image: electrician1,
    icon: <Wind className="w-6 h-6" />,
  },
  {
    title: "Heating service",
    description: "This box could corrode over time loose connection, dust",
    image: electrician2,
    icon: <Radiator className="w-6 h-6" />,
  },
];
