import { ServiceCard } from "../types";
import { Lightbulb, Wrench, Clock, Calendar } from "lucide-react";

export const services: ServiceCard[] = [
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Electrical Advice and Checkups",
    description: "This box could corrode over time loose connection, dust",
    step: 1,
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Trusted Electrical Services",
    description: "This box could corrode over time loose connection, dust",
    step: 2,
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Emergency Help Available 24/7",
    description: "This box could corrode over time loose connection, dust",
    step: 3,
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Make an Appointment",
    description: "This box could corrode over time loose connection, dust",
    step: 4,
  },
];
