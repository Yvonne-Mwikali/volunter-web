import potrait1 from "../assets/potrait1.jpg";
import potrait2 from "../assets/potrait2.jpg";
import potrait3 from "../assets/potrait3.jpg";
import potrait4 from "../assets/potrait4.jpg";
import potrait5 from "../assets/potrait5.jpg";
import potrait6 from "../assets/potrait6.jpg";

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  location: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Eric Johnson",
    role: "Lead Architect",
    location: "Alberta Infantino",
    image: potrait1,
  },
  {
    id: 2,
    name: "Sarah Miller",
    role: "Senior Engineer",
    location: "Alberta Infantino",
    image: potrait2,
  },
  {
    id: 3,
    name: "James Wilson",
    role: "Project Manager",
    location: "Alberta Infantino",
    image: potrait3,
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Safety Inspector",
    location: "Alberta Infantino",
    image: potrait4,
  },
  {
    id: 5,
    name: "Michael Chen",
    role: "Electrical Engineer",
    location: "Alberta Infantino",
    image: potrait5,
  },
  {
    id: 6,
    name: "Lisa Thompson",
    role: "Construction Lead",
    location: "Alberta Infantino",
    image: potrait6,
  },
];
