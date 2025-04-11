
import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Video, Play } from "lucide-react";
import { fetchYouTubeVideos, formatPublishedDate } from "@/utils/youtubeUtils";

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
      const fetchedVideos = await fetchYouTubeVideos();
      setVideos(fetchedVideos);
      setLoading(false);
    };

    getYouTubeVideos();
  }, []);

  return (
    <section id="videos" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Latest Videos</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Watch and learn from my latest growth hacking strategies and tutorials.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[1, 2].map((i) => (
              <Card key={i} className="bg-secondary/40 border-gray-700 h-80 animate-pulse">
                <div className="h-48 bg-gray-700/50 rounded-t-lg"></div>
                <CardContent className="p-6">
                  <div className="h-6 bg-gray-700/50 rounded mb-4 w-3/4"></div>
                  <div className="h-4 bg-gray-700/50 rounded w-1/2"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : videos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {videos.map((video) => (
              <Card key={video.id} className="bg-secondary/40 border-gray-700 overflow-hidden card-hover">
                <div className="relative">
                  {/* If we had actual thumbnails, we would display them here */}
                  <div className="h-48 bg-brand-red/20 flex items-center justify-center">
                    <Video className="w-16 h-16 text-brand-red opacity-50" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <a 
                      href={video.videoUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="w-16 h-16 rounded-full bg-brand-red flex items-center justify-center text-white hover:bg-opacity-90 transition-all"
                    >
                      <Play className="w-8 h-8 text-white ml-1" />
                    </a>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <span>{formatPublishedDate(video.publishedAt)}</span>
                  </div>
                  <h3 className="text-xl font-semibold line-clamp-2">{video.title}</h3>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <a href={video.videoUrl} target="_blank" rel="noreferrer" className="w-full">
                    <Button variant="outline" className="w-full border-gray-600 hover:bg-gray-800 flex items-center gap-2">
                      <span>Watch Video</span>
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center p-10 bg-secondary/20 rounded-lg max-w-3xl mx-auto">
            <p className="text-gray-300">
              Failed to load videos. Please visit the YouTube channel directly.
            </p>
            <a 
              href="https://www.youtube.com/@GrowthHackAcademy" 
              target="_blank" 
              rel="noreferrer"
              className="text-brand-red hover:underline mt-4 inline-block"
            >
              Visit YouTube Channel
            </a>
          </div>
        )}
        
        <div className="text-center mt-12">
          <a 
            href="https://www.youtube.com/@GrowthHackAcademy?sub_confirmation=1" 
            target="_blank" 
            rel="noreferrer"
            className="inline-block"
          >
            <Button className="bg-brand-red hover:bg-brand-red/90 flex items-center gap-2">
              <span>Subscribe to Channel</span>
              <ExternalLink className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
