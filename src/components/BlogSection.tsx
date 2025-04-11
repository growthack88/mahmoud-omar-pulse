
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Clock, Send } from "lucide-react";
import { fetchBlogPosts } from "@/utils/rssUtils";

interface Post {
  id: string;
  title: string;
  link: string;
  publishDate: string;
  description: string;
  imageUrl?: string;
  source?: string;
}

const BlogSection = () => {
  const [ghaFeedPosts, setGhaFeedPosts] = useState<Post[]>([]);
  const [whatzduckPosts, setWhatzduckPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlogPosts = async () => {
      setLoading(true);
      try {
        // Fetch from Growth Hack Academy feed - updated URL
        const ghaFeedUrl = "https://rss.beehiiv.com/feeds/0cNNA2Ypdi.xml";
        const ghaFeedPostsData = await fetchBlogPosts(ghaFeedUrl);
        
        // Fetch from Whatzduck feed
        const whatzduckFeedUrl = "https://rss.beehiiv.com/feeds/PgJumZUfwU.xml";
        const whatzduckFeedPostsData = await fetchBlogPosts(whatzduckFeedUrl);
        
        // Add source to each post
        const ghaPostsWithSource = ghaFeedPostsData.map(post => ({
          ...post,
          source: "Growth Hack Academy"
        }));
        
        const whatzduckPostsWithSource = whatzduckFeedPostsData.map(post => ({
          ...post,
          source: "Whatzduck"
        }));

        setGhaFeedPosts(ghaPostsWithSource.slice(0, 3));
        setWhatzduckPosts(whatzduckPostsWithSource.slice(0, 3));
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
      setLoading(false);
    };

    getBlogPosts();
  }, []);

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }).format(date);
    } catch (error) {
      return dateString;
    }
  };

  const renderPosts = (posts: Post[], source: string) => {
    if (posts.length === 0) {
      return (
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No posts available</p>
        </div>
      );
    }

    return posts.map((post) => (
      <Card key={post.id} className="bg-white hover:shadow-md transition-shadow mb-4 border border-gray-100">
        <CardContent className="p-4">
          <div className="flex items-start">
            <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden shrink-0 mr-4">
              {post.imageUrl ? (
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
              ) : source === "Whatzduck" ? (
                <div className="flex items-center justify-center h-full bg-yellow-100">
                  <span className="text-yellow-600 text-xl" role="img" aria-label="duck">🦆</span>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full bg-purple-100">
                  <img 
                    src="https://growthhackacademy.com/wp-content/uploads/2025/03/GHA-new.png" 
                    alt="GHA" 
                    className="w-10 h-10 object-contain"
                  />
                </div>
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center text-xs text-gray-500 mb-1">
                <span className={`inline-block px-2 py-0.5 rounded-full mr-2 ${
                  source === "Whatzduck" 
                    ? "bg-yellow-100 text-yellow-600" 
                    : "bg-purple-100 text-purple-600"
                }`}>
                  {source}
                </span>
                <Clock className="w-3 h-3 mr-1" />
                <span>{formatDate(post.publishDate)}</span>
              </div>
              <h3 className="text-base font-medium mb-1 line-clamp-2">{post.title}</h3>
              <div className="flex justify-between items-center">
                <a href={post.link} target="_blank" rel="noreferrer" className="text-purple-600 text-sm flex items-center hover:underline">
                  Read <ArrowRight className="w-3 h-3 ml-1" />
                </a>
                
                {source === "Whatzduck" && (
                  <a href="https://whatzduck.com/subscribe" target="_blank" rel="noreferrer" className="text-yellow-600 text-xs flex items-center">
                    <Send className="w-3 h-3 mr-1" />
                    Subscribe
                  </a>
                )}
                
                {source === "Growth Hack Academy" && (
                  <a href="https://growthhackacademy.com/blog" target="_blank" rel="noreferrer" className="text-purple-600 text-xs flex items-center">
                    <Send className="w-3 h-3 mr-1" />
                    Subscribe
                  </a>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    ));
  };

  return (
    <section id="blog" className="py-8">
      <h2 className="text-2xl font-bold mb-6 text-gradient">Latest Articles</h2>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <Card key={i} className="bg-white border-gray-100 h-24 animate-pulse">
                <CardContent className="p-4 flex">
                  <div className="w-16 h-16 bg-gray-200 rounded mr-4"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded mb-1 w-1/2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <Card key={i} className="bg-white border-gray-100 h-24 animate-pulse">
                <CardContent className="p-4 flex">
                  <div className="w-16 h-16 bg-gray-200 rounded mr-4"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded mb-1 w-1/2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-purple-600">Growth Hack Academy</h3>
            {renderPosts(ghaFeedPosts, "Growth Hack Academy")}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center text-yellow-600">
              Whatzduck
              <span className="ml-2 text-xl">🦆</span>
            </h3>
            {renderPosts(whatzduckPosts, "Whatzduck")}
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogSection;
