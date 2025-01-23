"use client";

import { Share2 } from "lucide-react";
import { motion } from "framer-motion";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  location: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Eric Johnson",
    role: "Lead Architect",
    location: "Alberta Infantino",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-u38AXvWYzid9UnefzVYJqbQNRyLbRM.png",
  },
  {
    id: 2,
    name: "Sarah Miller",
    role: "Senior Engineer",
    location: "Alberta Infantino",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-u38AXvWYzid9UnefzVYJqbQNRyLbRM.png",
  },
  {
    id: 3,
    name: "James Wilson",
    role: "Project Manager",
    location: "Alberta Infantino",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-u38AXvWYzid9UnefzVYJqbQNRyLbRM.png",
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Safety Inspector",
    location: "Alberta Infantino",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-u38AXvWYzid9UnefzVYJqbQNRyLbRM.png",
  },
  {
    id: 5,
    name: "Michael Chen",
    role: "Electrical Engineer",
    location: "Alberta Infantino",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-u38AXvWYzid9UnefzVYJqbQNRyLbRM.png",
  },
  {
    id: 6,
    name: "Lisa Thompson",
    role: "Construction Lead",
    location: "Alberta Infantino",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-u38AXvWYzid9UnefzVYJqbQNRyLbRM.png",
  },
];

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <motion.div className="relative group" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
      <div className="relative w-full aspect-square rounded-full overflow-hidden mb-4 ">
        <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-full object-cover" />
        <button className="absolute top-2 right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors">
          <Share2 className="w-4 h-4" />
        </button>
      </div>
      <div className="text-center space-y-1">
        <h3 className="font-semibold text-lg group-hover:text-red-500 transition-colors">{member.role}</h3>
        <p className="text-gray-500 text-sm">{member.location}</p>
      </div>
    </motion.div>
  );
}

export function TeamGrid() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}
