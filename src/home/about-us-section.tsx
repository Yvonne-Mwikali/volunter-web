import electrician1 from "@/assets/electrician.jpeg";
import electrician2 from "@/assets/electrician2.jpeg";
import { bulletPoints, features } from "@/data";
import { Check } from "lucide-react";

export function AboutSection() {
  return (
    <div className="container px-16 py-16">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Image Section */}
        <div className="relative w-full lg:w-1/2">
          {/* Main image with blue shadow */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <div className="absolute -right-8 -bottom-8 w-full h-full bg-[#e6fffa] rounded-2xl" />
            <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden">
              <img src={electrician2} alt="Electrician at work" className="object-cover" />
            </div>
          </div>

          {/* Smaller image with white border */}
          <div className="absolute bottom-12 -left-4 w-72 h-48">
            <div className="absolute inset-0 bg-white rounded-2xl shadow-lg" />
            <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden">
              <img src={electrician1} alt="Electrical inspection" className="object-cover object-fill" />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2">
          <span className="text-[#00ffcc] font-medium mb-2 block">About Our Services</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a1a] mb-6">
            Providing Expert Electrical Solutions for Your Home and Business
          </h2>
          <p className="text-gray-600 mb-8">
            We are dedicated to delivering high-quality electrical services tailored to your specific needs. From
            installations to maintenance, we ensure safety, reliability, and efficiency in every project.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                <div>
                  <h3 className="font-semibold text-[#1a1a1a] mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bullet Points */}
          <div className="space-y-3 mb-8">
            {bulletPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#00ffcc] flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-600">{point}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="bg-[#00ffcc] text-white px-8 py-3 rounded-lg hover:bg-[#00e6b8] transition-colors">
            Learn More About Us
          </button>
        </div>
      </div>
    </div>
  );
}
