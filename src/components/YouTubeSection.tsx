import { motion } from 'framer-motion'
import { Element } from 'react-scroll'
import { FaYoutube, FaPlay } from 'react-icons/fa'
import { useState } from 'react'

const YouTubeSection = () => {
  const channelId = '@mrsreecharan'
  const featuredVideoIds = [
    'dkO5wqdS4D4', // Your provided video
  ]
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null)

  return (
    <Element 
      name="youtube" 
      className="relative py-16 bg-gradient-to-b from-white to-orange-50 overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF0000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               animation: 'moveBackground 30s linear infinite',
             }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 relative inline-block">
            <span className="relative z-10">YouTube Content</span>
            <motion.div
              className="absolute -bottom-2 left-0 w-full h-3 bg-red-200 opacity-50 -rotate-1"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Check out my latest videos on coding tutorials and tech insights
          </p>
        </motion.div>

        {/* YouTube Channel Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-12"
        >
          <motion.a
            href={`https://youtube.com/${channelId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white 
                     px-8 py-4 rounded-full transition-all duration-300 
                     hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaYoutube className="text-2xl group-hover:animate-pulse" />
            <span className="font-semibold">Visit My Channel</span>
            <motion.span
              className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ x: -10 }}
              whileHover={{ x: 0 }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>

        {/* Featured Videos Grid */}
        <div className="space-y-8">
          {featuredVideoIds.map((videoId, index) => (
            <motion.div
              key={videoId}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="relative group"
              onMouseEnter={() => setHoveredVideo(videoId)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              {/* Video Container */}
              <div className="relative aspect-video rounded-2xl overflow-hidden 
                            shadow-lg transition-all duration-300 
                            group-hover:shadow-2xl group-hover:scale-[1.02]
                            before:absolute before:inset-0 before:bg-black/10 before:z-10">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                
                {/* Play Button Overlay */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ 
                    opacity: hoveredVideo === videoId ? 1 : 0,
                    scale: hoveredVideo === videoId ? 1 : 0.5
                  }}
                  className="absolute inset-0 flex items-center justify-center z-20"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600 rounded-full 
                                flex items-center justify-center 
                                shadow-[0_0_30px_rgba(239,68,68,0.5)]">
                    <FaPlay className="text-white text-2xl sm:text-3xl ml-1" />
                  </div>
                </motion.div>

                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Video Info Overlay */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6 text-white z-30
                           bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: hoveredVideo === videoId ? 1 : 0,
                  y: hoveredVideo === videoId ? 0 : 20
                }}
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Latest Video</h3>
                <p className="text-sm sm:text-base opacity-80">
                  Watch this video to learn more about my coding journey and tutorials
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl" />
      </div>
    </Element>
  )
}

export default YouTubeSection 