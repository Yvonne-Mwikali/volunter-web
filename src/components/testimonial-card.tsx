import { TestimonialCardProps } from "@/types";
import { Quote, Star } from "lucide-react";

export function TestimonialCard(data: TestimonialCardProps) {
  const { imageSrc, name, role, testimonial, rating = 5 } = data;

  return (
    <div className="relative ml-4 bg-blue-100/10 rounded-lg p-4 shadow-lg flex items-center h-[200px]">
      {/* Profile Image */}
      <div className="absolute -left-6 top-1/2 transform -translate-y-1/2">
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img src={imageSrc} alt={name} width={96} height={96} className="object-cover" />
          <div className="absolute top-0 right-0 w-10 h-10 bg-[#00ffcc] rounded-full flex items-center justify-center transform translate-x-1/2 -translate-y-1/2">
            <Quote className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="ml-20 flex-1">
        <p className="text-gray-600 mb-3">{testimonial}</p>

        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-bold text-lg text-nowrap mr-2">{name}</h3>
            <p className="text-gray-500 text-sm">{role}</p>
          </div>

          {/* Star Rating */}
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className={`w-4 h-4 ${index < rating ? "text-[#00ffcc] fill-[#00ffcc]" : "text-gray-300"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
