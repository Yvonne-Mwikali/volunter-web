import climateImg from "@/assets/climate.jpg";
import educationImg from "@/assets/education.jpeg";
import farmingImg from "@/assets/farming.jpeg";
import foodImg from "@/assets/food.jpeg";
import healthImg from "@/assets/health.jpg";
import womenImg from "@/assets/women.jpg";
import { Programs } from "@/types";
import { BookOpen, Globe, Heart, Lightbulb, Palmtree, Users } from "lucide-react";

export const programsCarousel: Programs[] = [
  {
    id: Math.random().toString(36),
    title: "Good Health and Well-Being",
    description: "Promoting access to healthcare and health awareness programs.",
    image: healthImg,
    icon: <Heart className="w-6 h-6" />,
  },
  {
    id: Math.random().toString(36),
    title: "Climate Change",
    description: "Advocating for sustainable practices to combat climate change.",
    image: climateImg,
    icon: <Globe className="w-6 h-6" />,
  },
  {
    id: Math.random().toString(36),
    title: "Poverty and Food Security",
    description: "Implementing programs to alleviate poverty and ensure food security.",
    image: foodImg,
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    id: Math.random().toString(36),
    title: "Women Empowerment",
    description: "Providing resources and platforms to empower women in communities.",
    image: womenImg,
    icon: <Users className="w-6 h-6" />,
  },
  {
    id: Math.random().toString(36),
    title: "Education and Literacy Programs",
    description: "Facilitating education through literacy and mentorship programs.",
    image: educationImg,
    icon: <Lightbulb className="w-6 h-6" />,
  },
  {
    id: Math.random().toString(36),
    title: "Agricultural and Farming Techniques",
    description: "Introducing modern farming techniques for sustainability.",
    image: farmingImg,
    icon: <Palmtree className="w-6 h-6" />,
  },
];
