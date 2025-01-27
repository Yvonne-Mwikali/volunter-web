import { TeamMember, teamMembers } from "@/data/team-members";
import { motion } from "framer-motion";
import { Share2 } from "lucide-react";

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <motion.div id="team" className="relative group" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
      <div className="relative w-full aspect-square rounded-full overflow-hidden mb-4 shadow-lg">
        <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-full object-cover" />
        <button className="absolute top-4 right-10 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors">
          <Share2 className="w-4 h-4" />
        </button>
      </div>
      <div className="text-center space-y-1">
        <h3 className="font-semibold text-lg group-hover:text-red-500 transition-colors">{member.role}</h3>
        <p className="text-gray-500 text-sm">{member.location}</p>

        <p className="text-gray-500 text-sm">{member.location}</p>
      </div>
    </motion.div>
  );
}

export function TeamGrid() {
  return (
    <div className="bg-[#00ffcc]/30  px-4 py-12">
      <h1 className="text-center text-3xl font-bold mb-14">Our Team</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}
