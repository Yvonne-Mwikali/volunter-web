import { servicesCarousel } from "@/data";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export function ServiceCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
      slidesToScroll: 1,
      //   containScroll: "trimSnaps",
    },
    [Autoplay()]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);

    // Cleanup
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollTo = (index: number) => emblaApi && emblaApi.scrollTo(index);

  return (
    <div className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {servicesCarousel.map((service, index) => (
              <div
                key={index}
                className={`flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] p-8 transition-all duration-500 ${
                  selectedIndex === index ? "scale-110 z-10" : "scale-100 opacity-70"
                }`}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img src={service.image} alt={service.title} className="object-cover" />
                    {/* Overlay line */}
                    <div
                      className={`absolute bottom-0 left-0 w-full h-1 bg-[#00ffcc] transform transition-transform duration-500 ${
                        selectedIndex === index ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </div>

                  {/* Icon */}
                  <div className="absolute -translate-y-1/2 left-8">
                    <div
                      className={`w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-all duration-500 ${
                        selectedIndex === index ? "bg-[#00ffcc]" : "bg-white"
                      }`}
                    >
                      <div
                        className={`transition-colors duration-500 ${
                          selectedIndex === index ? "text-white" : "text-gray-800"
                        }`}
                      >
                        {service.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 pt-12">
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex items-center text-[#00ffcc] font-medium">
                      READ MORE
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-4">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-2 transition-colors duration-300 ${
                index === selectedIndex ? "bg-[#00ffcc]" : "bg-gray-300"
              }`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
