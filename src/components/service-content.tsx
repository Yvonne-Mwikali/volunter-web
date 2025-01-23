import { Service } from "@/pages/service-page";
import { motion } from "framer-motion";

export function ServiceContent({ service }: { service: Service }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <h2 className="text-4xl font-bold">
        {service.title}.
        <br />
        <span className="text-gray-900">Biddut have 25 years experience</span>
      </h2>
      <p className="text-gray-600 leading-relaxed max-w-3xl">{service.content}</p>
      {service.image && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-8"
        >
          <img src={service.image || "/placeholder.svg"} alt={service.title} className="rounded-lg w-full max-w-3xl" />
        </motion.div>
      )}
    </motion.div>
  );
}
