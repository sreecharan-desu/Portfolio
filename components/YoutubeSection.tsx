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
  status: {
    embeddable: boolean;
  };
}

const YouTubeSection = () => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const CHANNEL_ID = 'UCUaEqn8aDVtHE9AaDekpQtQ';
  const MAX_RESULTS = 10;

  useEffect(() => {
    const fetchVideos = async () => {
      if (!API_KEY) {
        setError('YouTube API key is missing. Please contact the site administrator.');
        setLoading(false);
        return;
      }

      try {
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

        const videoIds = searchResponse.data.items
          ?.map((item: any) => item.id.videoId)
          .filter(Boolean)
          .join(',');

        if (!videoIds) {
          setError('No videos found for this channel.');
          setLoading(false);
          return;
        }

        // Step 2: Fetch video details to get durations, tags, and embeddable status
        const videosResponse = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos`,
          {
            params: {
              part: 'snippet,contentDetails,status',
              id: videoIds,
              key: API_KEY,
            },
          }
        );

        const filteredVideos = videosResponse.data.items.filter((video: YouTubeVideo) => {
          // Check if video is embeddable
          if (!video.status?.embeddable) {
            console.warn(`Video ${video.id} is not embeddable.`);
            return false;
          }

          // Check duration
          const duration = video.contentDetails?.duration || 'PT0S';
          const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
          const hours = parseInt(match?.[1] || '0');
          const minutes = parseInt(match?.[2] || '0');
          const seconds = parseInt(match?.[3] || '0');
          const totalSeconds = hours * 3600 + minutes * 60 + seconds;

          // Exclude videos 60 seconds or shorter and videos with #shorts tag
          const isNotShort =
            totalSeconds > 10 &&
            !(video.snippet.tags?.includes('shorts') ||
              video.snippet.title.toLowerCase().includes('#shorts') ||
              video.snippet.description.toLowerCase().includes('#shorts'));

          return isNotShort;
        });

        if (filteredVideos.length === 0) {
          setError('No embeddable videos meet the duration or content criteria.');
          setLoading(false);
          return;
        }

        setVideos(filteredVideos);
        setLoading(false);
      } catch (err: any) {
        console.error('Error fetching videos:', {
          message: err.message,
          status: err.response?.status,
          data: err.response?.data,
        });
        setError(
          err.response?.status === 403
            ? 'YouTube API quota exceeded. Please try again later.'
            : err.response?.status === 400
            ? 'Invalid YouTube API request. Please contact the site administrator.'
            : 'Failed to load videos. Please try again later.'
        );
        setLoading(false);
      }
    };

    fetchVideos();
  }, [API_KEY]);

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
            transition={{ duration: 0.5 }}
          >
            {/* Video Player */}
            <div className="relative h-48 overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&showinfo=0&enablejsapi=1`}
                title={video.snippet.title || 'YouTube Video'}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                onError={(e) => console.error(`Iframe error for video ${video.id}:`, e)}
              ></iframe>
            </div>

            {/* Video Info */}
            <div className="p-5 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-white tracking-tight line-clamp-2">
                  {video.snippet.title || 'Untitled Video'}
                </h3>
                <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-red-500/20 text-red-400">
                  YouTube
                </span>
              </div>

              <p className="text-sm text-gray-300 mb-4 line-clamp-3">
                {video.snippet.description || 'No description available.'}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-0.5 bg-white/10 text-gray-200 text-xs font-medium rounded-full">
                  Video
                </span>
                <span className="px-2 py-0.5 bg-white/10 text-gray-200 text-xs font-medium rounded-full">
                  {new Date(video.snippet.publishedAt).getFullYear() || 'Unknown'}
                </span>
              </div>

              {/* Video Links */}
              <div className="flex items-center gap-4 mt-auto">
                <a
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  aria-label={`Watch ${video.snippet.title || 'video'} on YouTube`}
                >
                  <FiYoutube className="text-lg" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};