import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, Clock } from "lucide-react";
import { NavHashLink } from "react-router-hash-link";

export function Footer() {
  return (
    <footer className="bg-[#020617] text-white py-12 px-4">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <NavHashLink to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">ElectricaLife</span>
          </NavHashLink>
          <p className="text-gray-400 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua exercitation ullamco
          </p>
          <div className="flex space-x-4">
            <NavHashLink to="#" className="bg-teal-500 p-2 rounded-full hover:bg-teal-600 transition-colors">
              <Facebook className="h-4 w-4" />
            </NavHashLink>
            <NavHashLink to="#" className="bg-teal-500 p-2 rounded-full hover:bg-teal-600 transition-colors">
              <Twitter className="h-4 w-4" />
            </NavHashLink>
            <NavHashLink to="#" className="bg-teal-500 p-2 rounded-full hover:bg-teal-600 transition-colors">
              <Instagram className="h-4 w-4" />
            </NavHashLink>
            <NavHashLink to="#" className="bg-teal-500 p-2 rounded-full hover:bg-teal-600 transition-colors">
              <Linkedin className="h-4 w-4" />
            </NavHashLink>
          </div>
        </div>

        {/* Contact Details */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Contact Details</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-teal-500 mt-1" />
              <p className="text-gray-400 text-sm">Jl. Raya Kuta No.70, Kuta</p>
            </div>
            <div className="flex items-start space-x-3">
              <Mail className="h-5 w-5 text-teal-500 mt-1" />
              <p className="text-gray-400 text-sm">support@domain.com</p>
            </div>
            <div className="flex items-start space-x-3">
              <Clock className="h-5 w-5 text-teal-500 mt-1" />
              <p className="text-gray-400 text-sm">8 AM - 5 PM, Monday - Saturday</p>
            </div>
            <div className="flex items-start space-x-3">
              <Phone className="h-5 w-5 text-teal-500 mt-1" />
              <p className="text-gray-400 text-sm">(+021) 2336 278</p>
            </div>
          </div>
        </div>

        {/* Other Pages */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Other Pages</h3>
          <ul className="space-y-2">
            <li>
              <NavHashLink to="/" className="text-gray-400 hover:text-white transition-colors">
                Home
              </NavHashLink>
            </li>
            <li>
              <NavHashLink to="/about" className="text-gray-400 hover:text-white transition-colors">
                About Us
              </NavHashLink>
            </li>
            <li>
              <NavHashLink to="/services" className="text-gray-400 hover:text-white transition-colors">
                Services
              </NavHashLink>
            </li>
            <li>
              <NavHashLink to="/doctors" className="text-gray-400 hover:text-white transition-colors">
                Our Doctor
              </NavHashLink>
            </li>
            <li>
              <NavHashLink to="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </NavHashLink>
            </li>
          </ul>
        </div>

        {/* Make Appointment */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Make Appointment</h3>
          <div className="bg-[#0f172a] p-6 rounded-lg space-y-4">
            <div className="flex items-center space-x-3">
              <Phone className="h-8 w-8 text-teal-500" />
              <div>
                <p className="text-sm">Call Us</p>
                <p className="font-semibold">(+021) 2336 278</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mt-12 pt-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">Electric Service Web Template by Yvonne</p>
          <p className="text-gray-400 text-sm">{`Copyright © ${new Date().getFullYear()} All rights reserved.`}</p>
        </div>
      </div>
    </footer>
  );
}
