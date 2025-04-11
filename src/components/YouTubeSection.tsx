
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { formatPublishedDate } from "@/utils/youtubeUtils";
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
    // Hard-coded videos as specified by the user
    const hardcodedVideos = [
      {
        id: "mDQ0bvSpq98",
        title: "🧩 Rubik's Cube Growth Plan: Free 7-Step Plan Template | خطة النمو السريع من 7 خطوات كمكعب روبيك 🚀",
        thumbnailUrl: "https://img.youtube.com/vi/mDQ0bvSpq98/mqdefault.jpg",
        publishedAt: "2025-04-01T12:00:00Z",
        videoUrl: "https://www.youtube.com/watch?v=mDQ0bvSpq98"
      },
      {
        id: "xjL0XrbRAnQ",
        title: "Google Like a Pro – All Advanced Search Operators - احترف البحث في جوجل بدون ادوات مدفوعة",
        thumbnailUrl: "https://img.youtube.com/vi/xjL0XrbRAnQ/mqdefault.jpg",
        publishedAt: "2025-03-25T12:00:00Z",
        videoUrl: "https://www.youtube.com/watch?v=xjL0XrbRAnQ"
      },
      {
        id: "7HY-hK8DEJw",
        title: "تعرف انه سبوتيفاي يعرف عنك اكتر من اللي انت تعرفه عن نفسك؟ - Data Driven Ad Campaigns",
        thumbnailUrl: "https://img.youtube.com/vi/7HY-hK8DEJw/mqdefault.jpg",
        publishedAt: "2025-03-18T12:00:00Z",
        videoUrl: "https://www.youtube.com/watch?v=7HY-hK8DEJw"
      },
      {
        id: "ptuJzbEdxGY",
        title: "١١ استراتيجي هتساعدك على نجاح متجرك الالكتروني - eCommerce Marketing Strategies",
        thumbnailUrl: "https://img.youtube.com/vi/ptuJzbEdxGY/mqdefault.jpg",
        publishedAt: "2025-03-10T12:00:00Z",
        videoUrl: "https://www.youtube.com/watch?v=ptuJzbEdxGY"
      },
      {
        id: "m6QEeT9MGxM",
        title: "دليلك لو عايز تبدآ تشتغل ال Media Buying",
        thumbnailUrl: "https://img.youtube.com/vi/m6QEeT9MGxM/mqdefault.jpg",
        publishedAt: "2025-03-05T12:00:00Z",
        videoUrl: "https://www.youtube.com/watch?v=m6QEeT9MGxM"
      },
      {
        id: "oMoIFqphp9I",
        title: "eCommerce eco-System | ايه اللي محتاج تفهمه قبل ما تبدآ في الايكومرس",
        thumbnailUrl: "https://img.youtube.com/vi/oMoIFqphp9I/mqdefault.jpg",
        publishedAt: "2025-02-28T12:00:00Z",
        videoUrl: "https://www.youtube.com/watch?v=oMoIFqphp9I"
      }
    ];
    
    setVideos(hardcodedVideos);
    setLoading(false);
  }, []);

  return (
    <section id="videos" className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gradient font-tajawal">فيديوهات جروث هاك أكاديمي</h2>
        <a 
          href="https://www.youtube.com/@GrowthHackAcademy?sub_confirmation=1" 
          target="_blank" 
          rel="noreferrer"
          className="inline-block"
        >
          <Button variant="outline" size="sm" className="border-red-300 text-red-600 hover:bg-red-50 flex items-center gap-1">
            <Youtube className="w-4 h-4" />
            <span className="font-tajawal">اشترك</span>
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
                <img 
                  src={video.thumbnailUrl} 
                  alt={video.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/10 transition-colors">
                  <Play className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 
                  className="text-sm font-medium line-clamp-1 font-tajawal text-right" 
                  dir="rtl"
                >
                  {video.title}
                </h3>
                <div 
                  className="flex items-center text-xs text-gray-500 mt-1 justify-end" 
                  dir="rtl"
                >
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
          <p className="text-gray-600 font-tajawal">
            فشل في تحميل الفيديوهات. يرجى زيارة قناة اليوتيوب مباشرة.
          </p>
          <a 
            href="https://www.youtube.com/@GrowthHackAcademy" 
            target="_blank" 
            rel="noreferrer"
            className="text-red-600 hover:text-red-700 mt-4 inline-block font-medium font-tajawal"
          >
            زيارة قناة اليوتيوب
          </a>
        </div>
      )}
    </section>
  );
};

export default YouTubeSection;

