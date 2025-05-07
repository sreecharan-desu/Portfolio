/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaYoutube } from 'react-icons/fa';
import axios from 'axios';
import { FiYoutube } from 'react-icons/fi';

interface YouTubeVideo {
  id: { videoId: string };
  snippet: {
    title: string;
    description: string;
    thumbnails: { medium: { url: string } };
    publishedAt: string;
    tags?: string[];
  };
  contentDetails: {
    duration: string;
  };
}

const CACHE_KEY = 'youtube_videos_cache';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

const YouTubeSection = () => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || 'YOUR_API_KEY';
  const CHANNEL_ID = 'UCUaEqn8aDVtHE9AaDekpQtQ';
  const MAX_RESULTS = 10;

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const cachedData = localStorage.getItem(CACHE_KEY);
       if (cachedData) {
          const { videos, timestamp } = JSON.parse(cachedData);
          const isCacheValid = Date.now() - timestamp < CACHE_DURATION;
          if (isCacheValid) {
            setVideos(videos);
            setLoading(false);
            return;
          }
        }

        // Step 1: Fetch video IDs
        const searchResponse = await axios.get(
          `https://www.googleapis.com/youtube/v3/search`,
          {
            params: {
              part: 'snippet',
              channelId: CHANNEL_ID,
              maxResults: MAX_RESULTS,
              order: 'date',
              type: 'video',
              key: API_KEY,
            },
          }
        );

        const videoIds = searchResponse.data.items.map((item: any) => item.id.videoId).join(',');

        // Step 2: Fetch video details to get durations and tags
        const videosResponse = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos`,
          {
            params: {
              part: 'snippet,contentDetails',
              id: videoIds,
              key: API_KEY,
            },
          }
        );

        const videos = videosResponse.data.items.filter((video: YouTubeVideo) => {
          const duration = video.contentDetails.duration;
          const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
          const hours = parseInt(match?.[1] || '0');
          const minutes = parseInt(match?.[2] || '0');
          const seconds = parseInt(match?.[3] || '0');
          const totalSeconds = hours * 3600 + minutes * 60 + seconds;

          // Exclude videos 60 seconds or shorter and videos with #shorts tag
          const isNotShort = totalSeconds > 15 && 
                            !(video.snippet.tags?.includes('shorts') || 
                              video.snippet.title.toLowerCase().includes('#shorts') ||
                              video.snippet.description.toLowerCase().includes('#shorts'));

          return isNotShort;
        });

        setVideos(videos);
        setLoading(false);
        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({ videos, timestamp: Date.now() })
        );
      } catch (err) {
        console.error(err);
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
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Explore My Recent Video Content
          </h2>
          <div className="text-center text-gray-400">Loading videos...</div>
        </div>
      </Element>
    );
  }

  if (error) {
    return (
      <Element name="youtube" className="min-h-screen py-16 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Explore My Recent Video Content
          </h2>
          <div className="text-center text-red-500">{error}</div>
        </div>
      </Element>
    );
  }

  return (
    <Element name="youtube" className="min-h-screen py-16 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl first-letter:text-5xl font-bold text-white mb-12 text-center">
          Explore My Recent Video Content
        </h2>

        <div className="flex justify-center items-center">
    <YouTubeVideoGrid videos={videos} />
</div>

        {/* Channel Link */}
        <div className="text-center mt-12">
          <a
            href="https://www.youtube.com/@mrsreecharan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full border border-white hover:bg-white hover:text-black transition-all duration-300"
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

const YouTubeVideoGrid = ({ videos }: { videos: YouTubeVideo[] }) => {
  return (
    <div className="flex flex-row justify-center">
      <div className="w-full max-w-7xl place-content-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            className="flex flex-col bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl backdrop-blur-sm shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full aspect-video overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 flex flex-col h-full">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2 line-clamp-2">
                {video.snippet.title}
              </h3>
              <p className="text-sm text-gray-300 mb-4 line-clamp-3">
                {video.snippet.description || 'No description available.'}
              </p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-xs text-gray-400">
                  {new Date(video.snippet.publishedAt).toLocaleDateString()}
                </span>
                <a
                  href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-black hover:bg-gray-900 text-white px-3 py-1.5 rounded-full text-sm"
                >
                  <FiYoutube className="text-base" />
                  Watch
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};