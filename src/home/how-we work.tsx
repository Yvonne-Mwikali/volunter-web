import eccbo1 from "@/assets/community.jpeg";
import eccbo2 from "@/assets/women.jpg";
import { steps } from "@/data/how-we-work";

export function HowWeWork() {
  return (
    <div id="process" className="container px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Content Section */}
        <div>
          <span className="text-[#00ffcc] font-medium mb-2 block">How We Work</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a1a] mb-8">
            Guided by the ECCBO Constitution, We Build a Better Future Together
          </h2>
          <p className="text-gray-600 mb-12">
            With a focus on community empowerment, transparency, and collaboration, ECCBO ensures every step is
            impactful.
          </p>

          {/* Timeline */}
          <div className="relative">
            {steps.map((step, index) => (
              <div key={index} className="flex mb-8 relative">
                {/* Vertical Line */}
                {index !== steps.length - 1 && <div className="absolute left-7 top-14 w-0.5 h-16 bg-[#00ffcc]" />}

                {/* Icon */}
                <div className="flex-shrink-0 w-14 h-14 bg-[#00ffcc] rounded-lg flex items-center justify-center text-white">
                  {step.icon}
                </div>

                {/* Content */}
                <div className="ml-6">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="relative h-[600px] order-first">
          {/* Background accent */}
          <div className="absolute right-0 top-0 w-4/5 md:h-4/5 bg-[#e6fffa] rounded-lg" />

          {/* Main image */}
          <div className="absolute right-0 h-3/4 top-0 w-5/6 md:w-4/5 md:h-4/5 rounded-lg overflow-hidden">
            <img src={eccbo1} alt="ECCBO community at work" className="h-full object-cover" />
          </div>

          {/* Secondary image */}
          <div className="absolute left-0 bottom-0 w-2/3 h-1/2 rounded-lg overflow-hidden shadow-xl ">
            <img src={eccbo2} alt="ECCBO initiative planning" className="object-cover h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
