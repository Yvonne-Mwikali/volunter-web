import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "lucide-react";
import water from "@/assets/water.jpeg";
import { useState } from "react";

export function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    details: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    details: "",
  });

  const validateForm = () => {
    const newErrors: typeof errors = {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      details: "",
    };

    // First Name Validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }

    // Last Name Validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }

    // Phone Number Validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }

    // Email Validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    // Additional Details Validation
    if (!formData.details.trim()) {
      newErrors.details = "Please provide additional details.";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully!", formData);
      // Add backend submission logic here
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = event.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div id="contact" className="min-h-screen bg-gradient-to-b from-blue-50 to-white w-full">
      <div className="container mx-auto px-4 py-12">
        <div className="rounded-lg overflow-hidden bg-white shadow-xl">
          <div className="grid md:grid-cols-2">
            {/* Left Section with Image Overlay */}
            <div className="relative">
              <div className="absolute inset-0 bg-teal-500/90 z-10" />
              <img src={water} alt="Electrician Team" className="w-full h-full object-cover absolute inset-0" />
              <div className="relative z-20 p-8 flex flex-col items-center justify-center min-h-[400px] text-center text-white">
                <Calendar className="w-12 h-12 mb-6" />
                <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                <p className="text-white/90">Let us know how we can help you with our professional services.</p>
              </div>
            </div>

            {/* Right Section with Form */}
            <div className="p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
                    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
                    {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    type="email"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="details">Additional Details</Label>
                  <Textarea
                    id="details"
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Please describe your needs or issues..."
                    className="min-h-[100px]"
                  />
                  {errors.details && <p className="text-red-500 text-sm">{errors.details}</p>}
                </div>

                <Button type="submit" className="w-full bg-teal-500 hover:bg-teal-600">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
