import { FeatureItem } from "@/types";
import { BookOpen, Users, Globe, Lightbulb } from "lucide-react";

export const features: FeatureItem[] = [
  {
    icon: <BookOpen className="w-8 h-8 text-[#00ffcc]" />,
    title: "Educational Support",
    description: "Providing resources and mentorship to enhance learning and self-reliance.",
    step: 1,
  },
  {
    icon: <Users className="w-8 h-8 text-[#00ffcc]" />,
    title: "Youth Empowerment",
    description: "Engaging youth through skill development and leadership opportunities.",
    step: 2,
  },
  {
    icon: <Globe className="w-8 h-8 text-[#00ffcc]" />,
    title: "Community Development",
    description: "Building sustainable solutions for a self-reliant and cohesive society.",
    step: 3,
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-[#00ffcc]" />,
    title: "Civic Engagement",
    description: "Promoting awareness and active participation in addressing community challenges.",
    step: 4,
  },
];

export const bulletPoints = [
  "Empowering individuals through education and mentorship.",
  "Encouraging youth to develop skills for socio-economic advancement.",
  "Driving sustainable initiatives to uplift the entire community.",
];
