import { motion } from "framer-motion";

export default function ParallelParkingSimulator() {
  return (
    <div>
      <h2>Parallel Parking Simulator</h2>
      <div className="parking-scene" aria-label="Parallel parking animation">
        <svg viewBox="0 0 640 320" role="img" aria-labelledby="parking-title">
          <title id="parking-title">A blue car backing into a parallel parking space</title>
          <line x1="0" y1="94" x2="640" y2="94" stroke="#f8fafc" strokeWidth="6" />
          <line x1="0" y1="220" x2="640" y2="220" stroke="#f8fafc" strokeWidth="6" />

          <rect x="100" y="100" width="120" height="60" rx="8" className="parked-car" />
          <rect x="350" y="100" width="120" height="60" rx="8" className="parked-car" />

          <motion.rect
            initial={{
              x: 486,
              y: 184,
              rotate: 0,
            }}
            animate={{
              x: 238,
              y: 118,
              rotate: -8,
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatDelay: 1.2,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            width="120"
            height="60"
            rx="8"
            className="parking-car"
          />
        </svg>
      </div>
    </div>
  );
}
