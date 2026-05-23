"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  scrollProgress: MotionValue<number>;
}

export default function Overlay({ scrollProgress }: OverlayProps) {
  // Section 1 (0% - 20% scroll)
  const opacity1 = useTransform(scrollProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(scrollProgress, [0, 0.25], [0, -100]);

  // Section 2 (30% - 50% scroll)
  const opacity2 = useTransform(scrollProgress, [0.25, 0.35, 0.5, 0.6], [0, 1, 1, 0]);
  const y2 = useTransform(scrollProgress, [0.25, 0.6], [100, -100]);

  // Section 3 (60% - 80% scroll)
  const opacity3 = useTransform(scrollProgress, [0.6, 0.7, 0.85, 0.95], [0, 1, 1, 0]);
  const y3 = useTransform(scrollProgress, [0.6, 0.95], [100, -100]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none flex flex-col items-center justify-center text-white">
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute flex flex-col items-center justify-center text-center w-full px-4"
      >
        <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
          Geethika Reddy Konda
        </h1>
        <p className="text-xl md:text-3xl font-light text-gray-300 tracking-wide">
          CS & AI Student at IE University
        </p>
      </motion.div>

      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute left-6 md:left-24 max-w-lg"
      >
        <h2 className="text-4xl md:text-6xl font-medium mb-4 leading-tight tracking-tight">
          I build AI-driven<br/>
          <span className="text-gray-400 italic">solutions.</span>
        </h2>
      </motion.div>

      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute right-6 md:right-24 max-w-lg text-right"
      >
        <h2 className="text-4xl md:text-6xl font-medium mb-4 leading-tight tracking-tight">
          Bridging algorithms<br/>
          <span className="text-gray-400 italic">and engineering.</span>
        </h2>
      </motion.div>
    </div>
  );
}
