
import { Button } from "@/components/ui/button";
import { ExternalLink, Headphones, Music, Podcast } from "lucide-react";

const PodcastSection = () => {
  const podcastPlatforms = [
    {
      name: "Apple Podcasts",
      url: "https://podcasts.apple.com/us/podcast/growth-hack-academy/id1832302801",
      icon: Music,
      color: "text-purple-600 border-purple-300 hover:bg-purple-50"
    },
    {
      name: "Spotify",
      url: "https://open.spotify.com/show/35L2gFP60OhVjRuOE3sSL1",
      icon: Headphones,
      color: "text-green-600 border-green-300 hover:bg-green-50"
    },
    {
      name: "جميع المنصات",
      url: "https://pnc.st/s/growth-hack-academy?align=right",
      icon: Podcast,
      color: "text-blue-600 border-blue-300 hover:bg-blue-50"
    }
  ];

  return (
    <section id="podcast" className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gradient font-tajawal">بودكاست جروث هاك أكاديمي</h2>
        <div className="flex items-center gap-2">
          <Podcast className="w-5 h-5 text-blue-600" />
          <span className="text-sm text-gray-600 font-tajawal">استمع الآن</span>
        </div>
      </div>

      <div className="bg-white border border-gray-100 rounded-lg p-6 mb-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <Podcast className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1" dir="rtl">
            <h3 className="text-lg font-bold font-tajawal text-right">بودكاست جروث هاك أكاديمي</h3>
            <p className="text-gray-600 text-sm font-tajawal text-right">
              محتوى صوتي متخصص في استراتيجيات النمو والتسويق الرقمي
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {podcastPlatforms.map((platform) => {
            const IconComponent = platform.icon;
            return (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <Button 
                  variant="outline" 
                  size="sm" 
                  className={`w-full ${platform.color} flex items-center gap-2 font-tajawal`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{platform.name}</span>
                  <ExternalLink className="w-3 h-3" />
                </Button>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
