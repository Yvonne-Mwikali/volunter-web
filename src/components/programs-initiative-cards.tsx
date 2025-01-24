import { programs } from "@/data";

export function ProgramsAndInitiatives() {
  return (
    <div className="w-full px-16 py-16">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a1a] mb-4">Programs and Initiatives</h2>
        <p className="text-gray-600">
          Empowering the community through strategic initiatives focused on education, empowerment, and sustainable
          development.
        </p>
      </div>

      {/* Program Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {programs.map((program, index) => (
          <div
            key={index}
            className="group relative bg-white p-6 rounded-lg transition-all duration-300 shadow-xl hover:cursor-pointer"
          >
            {/* Icon Container */}
            <div className="relative w-16 h-16 mx-auto mb-6">
              <div className="absolute inset-0 rounded-full bg-black   flex items-center justify-center  transform transition-all duration-300 group-hover:scale-110 icon-bounce">
                {program.icon}
              </div>
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-center mb-4">{program.title}</h3>
            <p className="text-gray-600 text-center mb-6">{program.description}</p>

            {/* Step Label */}
            <div className="absolute -bottom-4 left-0">
              <div className="bg-[#00ffcc] text-white px-6 py-2 clip-path-arrow">
                <span className="relative z-10">Step {program.step.toString().padStart(2, "0")}</span>
              </div>
            </div>

            {/* Read More Text */}
            <p className="text-[#00ffcc] text-sm mt-8 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Read More
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
