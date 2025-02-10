'use client';

import { motion } from "framer-motion";

export const BackgroundBeamsWithCollision = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="relative w-full overflow-hidden bg-[#123256]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 z-0"
      >
        {/* Gradient background with brand colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#123256] via-[#123256]/80 to-[#de4146] opacity-90" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />

        {/* Animated beams */}
        <div className="absolute inset-0">
          {/* Beam 1 - Left to Right */}
          <motion.div
            animate={{
              x: ["0%", "100%"],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 5,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop"
            }}
            className="absolute top-1/4 h-px w-32 bg-gradient-to-r from-transparent via-[#de4146] to-transparent"
          />

          {/* Beam 2 - Right to Left */}
          <motion.div
            animate={{
              x: ["100%", "0%"],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 7,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
              delay: 2
            }}
            className="absolute top-2/4 h-px w-32 bg-gradient-to-r from-transparent via-[#de4146] to-transparent"
          />

          {/* Beam 3 - Top to Bottom */}
          <motion.div
            animate={{
              y: ["0%", "100%"],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 6,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
              delay: 1
            }}
            className="absolute left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-[#de4146] to-transparent"
          />

          {/* Beam 4 - Bottom to Top */}
          <motion.div
            animate={{
              y: ["100%", "0%"],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 8,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
              delay: 3
            }}
            className="absolute left-3/4 w-px h-32 bg-gradient-to-b from-transparent via-[#de4146] to-transparent"
          />

          {/* Diagonal Beam 1 */}
          <motion.div
            animate={{
              x: ["0%", "100%"],
              y: ["0%", "100%"],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop"
            }}
            className="absolute w-32 h-32 bg-gradient-to-br from-transparent via-[#de4146]/40 to-transparent rotate-45"
          />

          {/* Diagonal Beam 2 */}
          <motion.div
            animate={{
              x: ["100%", "0%"],
              y: ["0%", "100%"],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
              delay: 5
            }}
            className="absolute w-32 h-32 bg-gradient-to-bl from-transparent via-[#de4146]/40 to-transparent -rotate-45"
          />
        </div>

        {/* Subtle radial glow effects */}
        <div className="absolute top-0 left-0 right-0 h-[500px] 
          bg-gradient-to-b from-[#de4146]/20 via-transparent to-transparent" />
      </motion.div>
      
      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
        {children}
      </div>
    </div>
  );
}; 