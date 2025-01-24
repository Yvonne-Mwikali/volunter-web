import { Programs } from "@/types";
import { BookOpen, Users, Globe, Lightbulb, Heart } from "lucide-react";
import healthImg from "@/assets/health.jpg";
import climateImg from "@/assets/climate.jpg";
import foodImg from "@/assets/food.jpeg";
import womenImg from "@/assets/women.jpg";
import educationImg from "@/assets/education.jpeg";
import farmingImg from "@/assets/farming.jpeg";

export const programsCarousel: Programs[] = [
  {
    title: "Good Health and Well-Being",
    description: "Promoting access to healthcare and health awareness programs.",
    image: healthImg,
    icon: <Heart className="w-6 h-6" />,
  },
  {
    title: "Climate Change",
    description: "Advocating for sustainable practices to combat climate change.",
    image: climateImg,
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: "Poverty and Food Security",
    description: "Implementing programs to alleviate poverty and ensure food security.",
    image: foodImg,
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    title: "Women Empowerment",
    description: "Providing resources and platforms to empower women in communities.",
    image: womenImg,
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Education and Literacy Programs",
    description: "Facilitating education through literacy and mentorship programs.",
    image: educationImg,
    icon: <Lightbulb className="w-6 h-6" />,
  },
  {
    title: "Agricultural and Farming Techniques",
    description: "Introducing modern farming techniques for sustainability.",
    image: farmingImg,
    icon: <BookOpen className="w-6 h-6" />,
  },
];
