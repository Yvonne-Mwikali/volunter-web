import { Calendar, Cable, Activity, CreditCard } from "lucide-react";
import electrician1 from "@/assets/electrician1.jpeg";
import electrician3 from "@/assets/electrician3.jpeg";

interface Step {
  icon: JSX.Element;
  title: string;
  description: string;
}

export function HowWeWork() {
  const steps: Step[] = [
    {
      icon: <Calendar className="w-6 h-6" />, // Step 1
      title: "Schedule a Service",
      description: "Easily book an appointment at your convenience for any electrical service you need.",
    },
    {
      icon: <Cable className="w-6 h-6" />, // Step 2
      title: "Inspection & Assessment",
      description: "Our skilled electricians will assess your requirements and identify the best solution.",
    },
    {
      icon: <Activity className="w-6 h-6" />, // Step 3
      title: "Execute the Work",
      description: "We ensure high-quality and safe execution of all electrical installations and repairs.",
    },
    {
      icon: <CreditCard className="w-6 h-6" />, // Step 4
      title: "Finalize & Payment",
      description: "Once satisfied, complete the process with secure and transparent payment options.",
    },
  ];

  return (
    <div className="container px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Content Section */}
        <div>
          <span className="text-[#00ffcc] font-medium mb-2 block">How We Work</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a1a] mb-8">
            Streamlined Electrical Services for Your Home and Business
          </h2>
          <p className="text-gray-600 mb-12">
            From scheduling to final delivery, we make the entire process simple and efficient, ensuring your
            satisfaction at every step.
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
        <div className="relative h-[600px]">
          {/* Background accent */}
          <div className="absolute right-0 top-0 w-4/5 h-4/5 bg-[#e6fffa] rounded-lg" />

          {/* Main image */}
          <div className="absolute right-0 top-0 w-4/5 h-4/5 rounded-lg overflow-hidden">
            <img src={electrician1} alt="Electrician at work" className="object-cover" />
          </div>

          {/* Secondary image */}
          <div className="absolute left-0 bottom-0 w-2/3 h-1/2 rounded-lg overflow-hidden shadow-xl">
            <img src={electrician3} alt="Team discussion for electrical planning" className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
