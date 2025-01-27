import community2 from "@/assets/aboutus-women.jpg";
import community1 from "@/assets/education.jpeg";
import { bulletPoints, features } from "@/data";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

export function AboutSection() {
  return (
    <div className="container px-16 py-16">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Image Section */}
        <div className="relative h-[400px] lg:h-[500px] w-full lg:w-1/2">
          {/* Background accent */}
          {/* <div className="absolute right-0 top-0 w-4/5 md:h-4/5 bg-[#e6fffa] rounded-lg" /> */}

          {/* Main image */}
          <div className="absolute -right-8 h-3/4 top-0  md:w-4/5 md:h-4/5 rounded-lg overflow-hidden">
            <img src={community2} alt="ECCBO community at work" className="h-full object-cover" />
          </div>

          {/* Secondary image w-5/6 */}
          <div className="absolute -left-8 bottom-0  h-1/2 rounded-lg overflow-hidden shadow-xl ">
            <img src={community1} alt="ECCBO initiative planning" className="object-cover h-full" />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2">
          <span className="text-[#00ffcc] font-medium mb-2 block">About Us</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a1a] mb-6">
            Empowering Communities and Building Sustainable Futures
          </h2>
          <p className="text-gray-600 mb-8">
            The Empire Educare Centre Community Based Organization (EECCBO) is committed to uplifting communities
            through education, mentorship, and sustainable development initiatives. We strive to provide resources and
            opportunities that empower individuals and families to overcome challenges and achieve their full potential.
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
          <Link to="/about">
            <button className="bg-[#00ffcc] text-white px-8 py-3 rounded-lg hover:bg-[#00e6b8] transition-colors">
              Learn More About Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
