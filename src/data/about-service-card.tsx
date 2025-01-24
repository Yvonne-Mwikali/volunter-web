import { FeatureItem } from "@/types";
import { BookOpen, Users, Globe, Lightbulb } from "lucide-react";

export const programs: FeatureItem[] = [
  {
    icon: <BookOpen className="w-8 h-8 text-[#00ffcc]" />,
    title: "Educational Support",
    description: "Free tuition, mentorship, literacy programs.",
    step: 1,
  },
  {
    icon: <Users className="w-8 h-8 text-[#00ffcc]" />,
    title: "Youth Empowerment",
    description: "Leadership training, advocacy clubs, civic education.",
    step: 2,
  },
  {
    icon: <Globe className="w-8 h-8 text-[#00ffcc]" />,
    title: "Community Development",
    description: "Sustainable agriculture, health awareness, food security.",
    step: 3,
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-[#00ffcc]" />,
    title: "Civic Engagement",
    description: "Gender equality, inclusive participation.",
    step: 4,
  },
];
