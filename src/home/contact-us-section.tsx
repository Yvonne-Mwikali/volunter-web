import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "lucide-react";
import water from "@/assets/water.jpeg";

export function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white w-full">
      <div className="container mx-auto px-4 py-12">
        <div className="rounded-lg overflow-hidden bg-white shadow-xl">
          <div className="grid md:grid-cols-2">
            {/* Left Section with Image Overlay */}
            <div className="relative">
              <div className="absolute inset-0 bg-teal-500/90 z-10" />
              <img src={water} alt="Electrician Team" className="w-full h-full object-cover absolute inset-0" />
              <div className="relative z-20 p-8 flex flex-col items-center justify-center min-h-[400px] text-center text-white">
                <Calendar className="w-12 h-12 mb-6" />
                <h2 className="text-3xl font-bold mb-4">Schedule Your Electrical Service Today</h2>
                <p className="text-white/90">
                  Professional electrical solutions for your home or business. Fast, reliable, and safety-focused
                  service.
                </p>
              </div>
            </div>

            {/* Right Section with Form */}
            <div className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" placeholder="Full Name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Email Address" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Phone Number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input id="date" type="date" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="service">Select Service</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose Service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="electrical-repair">Electrical Repair</SelectItem>
                        <SelectItem value="installation">New Installation</SelectItem>
                        <SelectItem value="inspection">Electrical Inspection</SelectItem>
                        <SelectItem value="emergency">Emergency Service</SelectItem>
                        <SelectItem value="maintenance">Maintenance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="technician">Preferred Technician</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Any Available" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any Available</SelectItem>
                        <SelectItem value="senior">Senior Technician</SelectItem>
                        <SelectItem value="specialist">Specialist</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="details">Additional Details</Label>
                  <Textarea
                    id="details"
                    placeholder="Please describe your electrical needs or any specific issues..."
                    className="min-h-[100px]"
                  />
                </div>

                <Button type="submit" className="w-full bg-teal-500 hover:bg-teal-600">
                  Schedule Service
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
