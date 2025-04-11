
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { fetchYouTubeVideos, formatPublishedDate } from "@/utils/youtubeUtils";
import { ExternalLink, Youtube, Play, Calendar } from "lucide-react";

interface YouTubeVideo {
  id: string;
  title: string;
  thumbnailUrl: string;
  publishedAt: string;
  videoUrl: string;
}

const YouTubeSection = () => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getYouTubeVideos = async () => {
      setLoading(true);
      const fetchedVideos = await fetchYouTubeVideos("@GrowthHackAcademy");
      setVideos(fetchedVideos);
      setLoading(false);
    };

    getYouTubeVideos();
  }, []);

  return (
    <section id="videos" className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gradient">Latest Videos</h2>
        <a 
          href="https://www.youtube.com/@GrowthHackAcademy?sub_confirmation=1" 
          target="_blank" 
          rel="noreferrer"
          className="inline-block"
        >
          <Button variant="outline" size="sm" className="border-red-300 text-red-600 hover:bg-red-50 flex items-center gap-1">
            <Youtube className="w-4 h-4" />
            <span>Subscribe</span>
          </Button>
        </a>
      </div>

      {loading ? (
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white border border-gray-100 p-3 rounded-lg flex items-center animate-pulse">
              <div className="w-16 h-12 bg-gray-200 rounded mr-3"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/3"></div>
              </div>
            </div>
          ))}
        </div>
      ) : videos.length > 0 ? (
        <div className="space-y-3">
          {videos.map((video) => (
            <a 
              key={video.id} 
              href={video.videoUrl} 
              target="_blank" 
              rel="noreferrer"
              className="bg-white border border-gray-100 p-3 rounded-lg flex items-center hover:shadow-md transition-shadow block"
            >
              <div className="relative w-20 h-12 mr-3 rounded overflow-hidden bg-gray-100 flex-shrink-0">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-4 h-4 text-red-600" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium line-clamp-1">{video.title}</h3>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <Calendar className="w-3 h-3 mr-1" />
                  <span>{formatPublishedDate(video.publishedAt)}</span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 ml-2 flex-shrink-0" />
            </a>
          ))}
        </div>
      ) : (
        <div className="text-center p-6 bg-red-50 rounded-lg">
          <p className="text-gray-600">
            Failed to load videos. Please visit the YouTube channel directly.
          </p>
          <a 
            href="https://www.youtube.com/@GrowthHackAcademy" 
            target="_blank" 
            rel="noreferrer"
            className="text-red-600 hover:text-red-700 mt-4 inline-block font-medium"
          >
            Visit YouTube Channel
          </a>
        </div>
      )}
    </section>
  );
};

export default YouTubeSection;
