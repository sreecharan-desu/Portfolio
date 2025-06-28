'use client';

import { useState, useEffect, useMemo } from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaYoutube, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import axios from 'axios';
import { CHANNEL_ID } from '@/lib/socials';

interface YouTubeVideo {
  id: { videoId: string } | string;
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

const cache: Record<string, YouTubeVideo[]> = {};

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check(); // initial
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [breakpoint]);

  return isMobile;
}

const YouTubeSection = () => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [modalVideo, setModalVideo] = useState<YouTubeVideo | null>(null);

  const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const MAX_RESULTS = 20;

  const isMobile = useIsMobile(); // 👈 detect mobile
  videos.reverse(); // Mutates the original array
  const visibleVideos = isMobile ? videos.slice(0, 2) : videos;

  useEffect(() => {
    const fetchVideos = async () => {
      if (!API_KEY) {
        setError('YouTube API key is missing.');
        setLoading(false);
        return;
      }

      // Use in-memory cache to prevent redundant API calls
      if (cache[CHANNEL_ID]) {
        setVideos(cache[CHANNEL_ID]);
        setLoading(false);
        return;
      }

      try {
        const searchResponse = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
          params: {
            part: 'snippet',
            channelId: CHANNEL_ID,
            maxResults: MAX_RESULTS,
            order: 'date',
            type: 'video',
            key: API_KEY,
          },
        });

        const videoIds = searchResponse.data.items
          ?.map((item: any) => item.id.videoId)
          .filter(Boolean)
          .join(',');

        if (!videoIds) {
          setError('No videos found for this channel.');
          setLoading(false);
          return;
        }

        const videosResponse = await axios.get(`https://www.googleapis.com/youtube/v3/videos`, {
          params: {
            part: 'snippet,contentDetails,status',
            id: videoIds,
            key: API_KEY,
          },
        });

        const filteredVideos = videosResponse.data.items.filter((video: YouTubeVideo) => {
          if (!video.status?.embeddable) return false;

          const duration = video.contentDetails?.duration || 'PT0S';
          const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
          const totalSeconds =
            (parseInt(match?.[1] || '0') || 0) * 3600 +
            (parseInt(match?.[2] || '0') || 0) * 60 +
            (parseInt(match?.[3] || '0') || 0);

          const isNotShort =
            totalSeconds > 60 &&
            ![
              video.snippet.tags?.includes('shorts'),
              video.snippet.title.toLowerCase().includes('#shorts'),
              video.snippet.description.toLowerCase().includes('#shorts'),
            ].some(Boolean);

          return isNotShort;
        });

        cache[CHANNEL_ID] = filteredVideos;
        setVideos(filteredVideos.reverse());
        setLoading(false);
      } catch (err: any) {
        console.error(err);
        setError('Failed to fetch videos.');
        setLoading(false);
      }
    };

    fetchVideos();
  }, [API_KEY]);

  return (
    <Element name="youtube" className="py-16 bg-black">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="text-center mb-12">
          <motion.h2
            className="text-5xl first-letter:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            YouTube
          </motion.h2>
          <p className="text-white/50 text-base max-w-xl mx-auto">
            A curation of my latest long-form video content
          </p>
        </div>

        {loading && <p className="text-white/50 text-center">Loading videos...</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleVideos.map((video, index) => (
              <article
                key={index}
                className="flex flex-col bg-black border border-white/20 rounded-lg overflow-hidden"
                style={{ width: '361px', height: '472px' }}
              >
                <div
                  className="relative h-[192px] overflow-hidden cursor-pointer"
                  onClick={() => setModalVideo(video)}
                >
                  <Image
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.title}
                    fill
                    className="object-cover object-center"
                    sizes="361px"
                    quality={85}
                    loading="lazy"
                  />
                </div>

                <div className="p-6 flex flex-col space-y-4 h-[280px] relative">
                  <header className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold text-white truncate">
                      {video.snippet.title}
                    </h3>
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-red-500/20 text-red-400">
                      YouTube
                    </span>
                  </header>
                  <p className="text-sm text-white/70 line-clamp-3">
                    {video.snippet.description || 'No description available.'}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-2.5 py-1 bg-white/10 text-white/70 text-xs font-medium rounded-md border border-white/20">
                      Video
                    </span>
                    <span className="px-2.5 py-1 bg-white/10 text-white/70 text-xs font-medium rounded-md border border-white/20">
                      {new Date(video.snippet.publishedAt).getFullYear() || 'Unknown'}
                    </span>
                  </div>
                  <footer className="flex items-center justify-between pt-2 border-t border-white/20 absolute bottom-6 left-6 right-6">
                    <a
                      href={`https://www.youtube.com/watch?v=${typeof video.id === 'string' ? video.id : video.id.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/70 hover:text-white/80"
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      <span className="text-sm font-medium">Watch</span>
                    </a>
                    <button
                      onClick={() => setModalVideo(video)}
                      className="text-xs text-white/70 hover:text-white/80"
                    >
                      Preview
                    </button>
                  </footer>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="text-center mt-12 pt-6 border-t border-white/20">
          <a
            href="https://www.youtube.com/@mrsreecharan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white/80"
          >
            <FaYoutube className="text-lg" />
            Visit My Channel
          </a>
        </div>

        {modalVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setModalVideo(null)}
          >
            <div
              className="relative w-full max-w-5xl aspect-video rounded-lg overflow-hidden border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-white bg-black/80 rounded-full p-2 hover:bg-black/90"
                onClick={() => setModalVideo(null)}
              >
                <FaTimes className="text-lg" />
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${
                  typeof modalVideo.id === 'string' ? modalVideo.id : modalVideo.id.videoId
                }?autoplay=1&rel=0&modestbranding=1`}
                title={modalVideo.snippet.title}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </Element>
  );
};

export default YouTubeSection;
