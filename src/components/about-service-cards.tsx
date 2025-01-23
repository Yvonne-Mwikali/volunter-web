import { services } from "@/data";

export function AboutServiceCards() {
  return (
    <div className="w-full  p-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative bg-white p-6 rounded-lg transition-all duration-300 shadow-xl hover:cursor-pointer"
          >
            {/* Icon Container */}
            <div className="relative w-16 h-16 mx-auto mb-6">
              <div className="absolute inset-0 rounded-full bg-black group-hover:bg-[#00ffcc] flex items-center justify-center text-white transform transition-all duration-300 group-hover:scale-110 icon-bounce">
                {service.icon}
              </div>
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-center mb-4">{service.title}</h3>
            <p className="text-gray-600 text-center mb-6">{service.description}</p>

            {/* Step Label */}
            <div className="absolute -bottom-4 left-0">
              <div className="bg-[#00ffcc] text-white px-6 py-2 clip-path-arrow">
                <span className="relative z-10">Step {service.step.toString().padStart(2, "0")}</span>
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
