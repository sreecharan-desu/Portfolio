import { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaYoutube } from 'react-icons/fa';
import axios from 'axios';

interface YouTubeVideo {
  id: { videoId: string };
  snippet: {
    title: string;
    description: string;
    thumbnails: { medium: { url: string } };
    publishedAt: string;
  };
}

const YouTubeSection = () => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Replace with your YouTube API key and channel ID
  const API_KEY = 'AIzaSyB3xprbk-xRiunisREbtzIZnWF_H6ljjXc';
  const CHANNEL_ID = 'UCUaEqn8aDVtHE9AaDekpQtQ'; // e.g., UCxxxxxxxxxxxxxxxxxxxxxx
  const MAX_RESULTS = 3; // Number of videos to fetch

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search`,
          {
            params: {
              part: 'snippet',
              channelId: CHANNEL_ID,
              maxResults: MAX_RESULTS,
              order: 'date', // Fetch recent videos
              type: 'video',
              key: API_KEY,
            },
          }
        );
        setVideos(response.data.items);
        setLoading(false);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError('Failed to load videos. Please try again later.');
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return (
      <Element name="youtube" className="min-h-screen py-16 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Explore My Recent Video Content</h2>
          <div className="text-center text-gray-300">Loading videos...</div>
        </div>
      </Element>
    );
  }

  if (error) {
    return (
      <Element name="youtube" className="min-h-screen py-16 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Explore My Recent Video Content</h2>
        <div className="text-center text-red-500">{error}</div>
        </div>
      </Element>
    );
  }

  return (
    <Element name="youtube" className="min-h-screen py-16 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">Explore My Recent Video Content</h2>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <motion.div
              key={video.id.videoId}
              className="bg-gray-900 rounded-xl border border-gray-800 shadow-lg hover:shadow-2xl hover:border-gray-600 transition-all duration-300 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video">
                <motion.img
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                  className="w-full h-full object-cover transition-transform duration-300"
                  whileHover={{ scale: 1.05 }}
                />
                <a
                  href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  aria-label={`Watch ${video.snippet.title} on YouTube`}
                >
                  <FaYoutube className="text-white text-4xl" />
                </a>
              </div>

              {/* Video Info */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 line-clamp-2">
                  {video.snippet.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {video.snippet.description || 'No description available.'}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-xs">
                    {new Date(video.snippet.publishedAt).toLocaleDateString()}
                  </span>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gray-800 text-gray-200 px-4 py-2 rounded-full hover:bg-gray-700 hover:text-white transition-all duration-300 text-sm"
                  >
                    <FaYoutube className="text-lg" />
                    Watch
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Channel Link */}
        <div className="text-center mt-12">
          <a
            href="https://www.youtube.com/@mrsreecharan" // Replace with your channel URL
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <FaYoutube className="text-xl" />
            Visit My YouTube Channel
          </a>
        </div>
      </div>
    </Element>
  );
};

export default YouTubeSection;