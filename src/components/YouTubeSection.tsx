import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaYoutube, FaPlay } from 'react-icons/fa'

interface YouTubeStats {
  subscriberCount: string;
  videoCount: string;
  viewCount: string;
}

interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  views: string;
  publishedAt: string;
}

const YouTubeSection = () => {
  const [stats, setStats] = useState<YouTubeStats | null>(null);
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [shouldDisplay, setShouldDisplay] = useState(true);
  const [loading, setLoading] = useState(true);
  
  const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  const CHANNEL_HANDLE = '@mrsreecharan';

  useEffect(() => {
    const fetchYouTubeData = async () => {
      try {
        setLoading(true);
        
        // First, get channel ID from handle
        const handleResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${CHANNEL_HANDLE}&type=channel&key=${YOUTUBE_API_KEY}`
        );
        
        if (!handleResponse.ok) {
          throw new Error('Failed to fetch channel ID');
        }
        
        const handleData = await handleResponse.json();
        const channelId = handleData.items[0]?.id?.channelId;
        
        if (!channelId) {
          throw new Error('Channel not found');
        }

        // Now fetch channel statistics with the correct channel ID
        const statsResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${YOUTUBE_API_KEY}`
        );
        
        if (!statsResponse.ok) {
          throw new Error('Failed to fetch channel statistics');
        }

        const statsData = await statsResponse.json();
        
        // Fetch latest videos
        const videosResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&order=date&maxResults=3&type=video&key=${YOUTUBE_API_KEY}`
        );

        if (!videosResponse.ok) {
          throw new Error('Failed to fetch videos');
        }

        const videosData = await videosResponse.json();

        setStats(statsData.items[0]?.statistics || null);
        setVideos(videosData.items?.map((item: any) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high.url,
          publishedAt: new Date(item.snippet.publishedAt).toLocaleDateString()
        })) || []);

      } catch (error) {
        console.error('Error fetching YouTube data:', error);
        setShouldDisplay(false);
      } finally {
        setLoading(false);
      }
    };

    fetchYouTubeData();
  }, []);

  if (!shouldDisplay) {
    return null;
  }

  if (loading) {
    return null;
  }

  if (!stats || videos.length === 0) {
    return null;
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">My YouTube Channel</h2>
          <p className="text-gray-600">Sharing my tech journey and coding adventures</p>
        </motion.div>

        {/* Stats */}
        {stats && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-3xl mx-auto mb-16">
            {[
              { label: 'Subscribers', value: stats.subscriberCount },
              { label: 'Videos', value: stats.videoCount },
              { label: 'Total Views', value: stats.viewCount }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 
                              bg-clip-text text-transparent mb-2">
                  {parseInt(stat.value).toLocaleString()}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Latest Videos */}
        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.a
              key={video.id}
              href={`https://youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 
                              transition-opacity duration-300 flex items-center justify-center">
                  <FaPlay className="text-white text-4xl" />
                </div>
              </div>
              <h3 className="mt-4 font-semibold group-hover:text-orange-500 transition-colors duration-300">
                {video.title}
              </h3>
              <p className="text-sm text-gray-500">{video.publishedAt}</p>
            </motion.a>
          ))}
        </div>

        {/* Channel Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.youtube.com/@mrsreecharan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 
                     text-white px-6 py-3 rounded-full hover:from-orange-600 hover:to-orange-700 
                     transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <FaYoutube className="text-xl" />
            Visit My Channel
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default YouTubeSection; 