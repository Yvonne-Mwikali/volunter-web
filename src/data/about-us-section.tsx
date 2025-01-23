import { FeatureItem } from "@/types";
import { Activity, Clock, Heart, Shield } from "lucide-react";

export const features: FeatureItem[] = [
  {
    icon: <Shield className="w-8 h-8 text-[#00ffcc]" />,
    title: "Safety-First Approach",
    description: "We prioritize safety in all our electrical installations and services.",
  },
  {
    icon: <Activity className="w-8 h-8 text-[#00ffcc]" />,
    title: "Reliable and Efficient",
    description: "Delivering dependable solutions for all your electrical needs.",
  },
  {
    icon: <Clock className="w-8 h-8 text-[#00ffcc]" />,
    title: "Timely Services",
    description: "Fast response and timely delivery for every project.",
  },
  {
    icon: <Heart className="w-8 h-8 text-[#00ffcc]" />,
    title: "Customer-Centered Care",
    description: "Your satisfaction is at the heart of everything we do.",
  },
];

export const bulletPoints = [
  "24/7 Emergency Electrical Assistance",
  "Committed to providing top-notch electrical solutions",
  "Understanding your needs to deliver the best services",
];
