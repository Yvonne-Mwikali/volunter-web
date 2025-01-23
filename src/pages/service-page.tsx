import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/data/service-detail-page";
import { ServiceContent } from "@/components/service-content";

export interface Service {
  id: string;
  title: string;
  content: string;
  image?: string;
}

function ServiceButton({
  service,
  isSelected,
  onClick,
}: {
  service: Service;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      className={`w-full flex items-center justify-between p-4 text-left border rounded-lg transition-colors ${
        isSelected ? "border-red-500 text-red-500" : "hover:bg-gray-100"
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span>{service.title}</span>
      <ArrowRight className="h-4 w-4" />
    </motion.button>
  );
}

export function ElectricalServicesDetailPage() {
  const [selectedService, setSelectedService] = useState<Service>(services[1]);
  const [isOpen, setIsOpen] = useState(false);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setIsOpen(false);
  };

  return (
    <div className="container mx-auto p-4 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-[300px,1fr] gap-8">
        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Electric services</h1>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Services</h2>
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="space-y-2">
                {services.map((service) => (
                  <ServiceButton
                    key={service.id}
                    service={service}
                    isSelected={selectedService.id === service.id}
                    onClick={() => handleServiceClick(service)}
                  />
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Sidebar */}
        <div className="hidden lg:block space-y-2">
          <h1 className="text-2xl font-bold mb-6">Electric services</h1>
          {services.map((service) => (
            <ServiceButton
              key={service.id}
              service={service}
              isSelected={selectedService.id === service.id}
              onClick={() => setSelectedService(service)}
            />
          ))}
        </div>

        {/* Content Area */}
        <ScrollArea className="h-[calc(100vh-8rem)]">
          <AnimatePresence mode="wait">
            <ServiceContent key={selectedService.id} service={selectedService} />
          </AnimatePresence>
        </ScrollArea>
      </div>
    </div>
  );
}
