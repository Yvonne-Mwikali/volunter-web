import { Button } from "@/components/ui/button";
// import { useRouter } from "next/navigation";
import { Lightbulb, Home, Wrench, Key } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface ErrorPageProps {
  error?: string;
  reset?: () => void;
}

export function ErrorPage({ error, reset }: ErrorPageProps) {
  const router = useNavigate();

  // Ensure we have a default error message
  const displayError = error || "The page you're looking for seems to have wandered off to another property.";

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 text-center">
        {/* Animated 404 with Lightbulb */}
        <div className="relative">
          <motion.div
            className="text-8xl md:text-9xl font-bold tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            4
            <motion.div
              className="inline-block"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <Lightbulb className="inline-block w-24 h-24 md:w-32 md:h-32 text-yellow-400 filter drop-shadow-lg" />
            </motion.div>
            4
          </motion.div>
        </div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-2">Oops! Something's Not Quite Right</h2>
          <p className="text-muted-foreground mb-6">{displayError}</p>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="flex justify-center space-x-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.1, rotate: 10 }} className="p-3 bg-primary/10 rounded-full">
            <Wrench className="w-6 h-6 text-primary" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1, rotate: -10 }} className="p-3 bg-primary/10 rounded-full">
            <Key className="w-6 h-6 text-primary" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1, rotate: 10 }} className="p-3 bg-primary/10 rounded-full">
            <Home className="w-6 h-6 text-primary" />
          </motion.div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button variant="default" onClick={() => router("/")} className="flex items-center gap-2">
            <Home className="w-4 h-4" />
            Return Home
          </Button>
          {reset && (
            <Button variant="outline" onClick={reset} className="flex items-center gap-2">
              <Wrench className="w-4 h-4" />
              Try Again
            </Button>
          )}
        </motion.div>
      </div>
    </div>
  );
}
