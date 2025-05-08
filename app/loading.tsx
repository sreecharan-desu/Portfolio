'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      {/* Infinity Spinner */}
      <div className="relative w-24 h-16">
        {/* SVG for Infinity Symbol */}
        <svg
          className="w-full h-full"
          viewBox="0 0 100 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M30,50 C10,50 10,10 30,10 C50,10 50,50 30,50 C10,50 10,90 30,90 C50,90 50,50 70,50 C90,50 90,10 70,10 C50,10 50,50 70,50"
            stroke="#FFFFFF"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0.3 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{
              pathLength: {
                duration: 3,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
              },
              opacity: {
                duration: 3,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
              },
            }}
          />
          {/* Glowing Dot Following the Path */}
          <motion.circle
            cx="0"
            cy="0"
            r="4"
            fill="#FFFFFF"
            initial={{ offsetDistance: '0%' }}
            animate={{ offsetDistance: '100%' }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
            style={{
              filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))',
              offsetPath: `path('M30,50 C10,50 10,10 30,10 C50,10 50,50 30,50 C10,50 10,90 30,90 C50,90 50,50 70,50 C90,50 90,10 70,10 C50,10 50,50 70,50')`,
            }}
          />
        </svg>
      </div>
      {/* Accessible Loading Text */}
      <span className="sr-only">Loading...</span>
    </div>
  );
}