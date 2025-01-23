import { images } from "@/data/images";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full min-h-screen bg-white">
      {/* Background shape */}
      <div className="absolute top-0 left-0 w-full md:w-[50%] h-full bg-[#0a0f37] clip-path-polygon" />

      {/* Main container */}
      <div className="container relative">
        <div className="flex flex-col-reverse md:flex-row min-h-screen">
          {/* Content Section */}
          <div className="w-full md:w-1/2 flex items-center z-10 px-4 py-8 md:py-0">
            <div className="bg-white/95 backdrop-blur rounded-lg p-8 shadow-lg md:translate-x-16">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a0f37] leading-tight mb-6">
                Empowering Communities Through
                <br />
                <span className="relative inline-block text-white">
                  <span className="relative z-10">Education</span>
                  <span className="absolute bottom-0 left-0 w-full h-full bg-[#0a0f37] skew-x-20 transform -translate-x-1 translate-y-1" />
                </span>{" "}
                and Development
              </h1>
              <p className="text-gray-600 mb-8">
                At EECCBO, we are committed to fostering growth, empowerment, and sustainable development by providing
                access to education, skill development, and community support initiatives.
              </p>
              <button className="bg-[#0a0f37] text-white px-8 py-3 rounded-full hover:bg-[#161d4e] transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative w-full md:w-1/2 h-[400px] md:h-auto">
            <div className="absolute inset-0">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    currentImageIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="object-cover w-full h-full rounded-lg"
                    loading={index === 0 ? "eager" : "lazy"}
                    style={{
                      objectFit: "contain",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
