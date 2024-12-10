import { motion } from 'framer-motion'

const LoadingScreen = () => {
  const circleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
      borderRadius: ["50%", "30%", "50%"],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const dotVariants = {
    animate: (i: number) => ({
      y: [0, -15, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        delay: i * 0.2,
        ease: "easeInOut"
      }
    })
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      <div className="relative">
        {/* Animated background circle */}
        <motion.div
          variants={circleVariants}
          animate="animate"
          className="absolute -inset-8 bg-gradient-to-r from-orange-200 to-orange-100 opacity-30 rounded-full"
        />

        {/* Main loading container */}
        <div className="relative flex flex-col items-center">
          {/* Animated dots */}
          <div className="flex gap-3 mb-8">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                custom={i}
                variants={dotVariants}
                animate="animate"
                className="w-4 h-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-400"
              />
            ))}
          </div>

          {/* Text with gradient */}
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <span className="text-lg font-medium bg-gradient-to-r from-orange-500 to-orange-400 
                           bg-clip-text text-transparent">
              Loading
            </span>
            <motion.div
              animate={{ width: ["0%", "100%", "0%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400"
            />
          </motion.div>
        </div>

        {/* Decorative elements */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute -z-10 inset-0 border-2 border-orange-200 rounded-full"
        />
      </div>
    </motion.div>
  )
}

export default LoadingScreen 