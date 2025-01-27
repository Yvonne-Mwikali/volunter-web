import { programsCarousel } from "@/data";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

export function ProgramsInitiativeCarouselPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const startAutoScroll = useCallback(() => {
    if (autoScrollIntervalRef.current) return;
    autoScrollIntervalRef.current = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 3000);
  }, [emblaApi]);

  const stopAutoScroll = useCallback(() => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (isAutoScrolling) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }

    return () => stopAutoScroll();
  }, [isAutoScrolling, startAutoScroll, stopAutoScroll]);

  const handleMouseEnter = () => setIsAutoScrolling(false);
  const handleMouseLeave = () => setIsAutoScrolling(true);

  return (
    <div id="programs" className="min-h-screen relative bg-gradient-to-br bg-[#00ffcc]/30 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Heading and Subheading */}
        <div className="text-center mb-20 relative z-10">
          <div className="relative inline-block">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-bold text-blue-800/90 mb-6 relative z-10"
            >
              Our Programs
            </motion.h2>
            <div
              className="absolute inset-0 opacity-[0.15] z-0"
              style={{
                backgroundImage: `linear-gradient(#00ffcc/60 2px, transparent 2px),
                  linear-gradient(90deg, #00ffcc/60 2px, transparent 2px)`,
                backgroundSize: "40px 40px",
                backgroundPosition: "center center",
                top: "-50%",
                left: "-50%",
                right: "-50%",
                bottom: "-50%",
              }}
            />
          </div>
          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-black-100 max-w-2xl mx-auto relative z-10"
          >
            Discover what happy and satisfied users have to say about their experiences .
          </motion.p> */}
        </div>
        <div className="relative">
          <div
            className="overflow-hidden sm:mt-4"
            ref={emblaRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex space-x-4">
              {programsCarousel.map((service) => (
                <div key={service.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 px-2">
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg">
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        datatype={`data-${service.id}`}
                        src={service.image}
                        alt={service.title}
                        className="object-cover"
                      />
                      {/* Overlay line */}
                      <div className={`absolute bottom-0 left-0 w-full h-1 bg-[#00ffcc]  scale-x-100`} />
                    </div>

                    {/* Icon */}
                    <div key={service.id} className="absolute -translate-y-1/2 left-8">
                      <div
                        className={`w-16 h-16 rounded-full shadow-lg flex items-center justify-center  bg-[#00ffcc]`}
                      >
                        <div className={"text-white"}>{service.icon}</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 pt-12">
                      <h3 className="text-xl font-bold mb-3 text-nowrap">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="flex items-center text-[#00ffcc] font-medium">
                        READ MORE
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </div>{" "}
                </div>
              ))}
            </div>
          </div>
          <button
            className="absolute sm:hidden lg:block -left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            onClick={scrollPrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            className="absolute sm:hidden lg:block -right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            onClick={scrollNext}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
          <div className="flex justify-center mt-4">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-1 ${index === selectedIndex ? "bg-primary" : "bg-gray-300"}`}
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
