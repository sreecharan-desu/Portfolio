'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <motion.div
        className="w-16 h-16 border-4 border-t-white border-b-white border-l-transparent border-r-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
      >
        <motion.div
          className="w-full h-full rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        />
      </motion.div>
      <style jsx>{`
        .fixed {
          backdrop-filter: blur(2px);
        }
      `}</style>
    </div>
  );
}
