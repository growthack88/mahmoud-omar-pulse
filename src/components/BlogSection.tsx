
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Clock, ArrowRight, Send } from "lucide-react";
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
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlogPosts = async () => {
      setLoading(true);
      try {
        // Fetch from Growth Hack Academy feed - direct WordPress URL
        const ghaFeedUrl = "https://growthhackacademy.com/blog/feed";
        const ghaFeedPosts = await fetchBlogPosts(ghaFeedUrl);
        
        // Fetch from Whatzduck feed
        const whatzduckFeedUrl = "https://rss.beehiiv.com/feeds/PgJumZUfwU.xml";
        const whatzduckFeedPosts = await fetchBlogPosts(whatzduckFeedUrl);
        
        // Add source to each post
        const ghaPostsWithSource = ghaFeedPosts.map(post => ({
          ...post,
          source: "Growth Hack Academy"
        }));
        
        const whatzduckPostsWithSource = whatzduckFeedPosts.map(post => ({
          ...post,
          source: "Whatzduck"
        }));
        
        // Combine and sort all posts by date
        const allPosts = [...ghaPostsWithSource, ...whatzduckPostsWithSource]
          .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
          .slice(0, 5); // Get only 5 most recent posts
          
        setPosts(allPosts);
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

  return (
    <section id="blog" className="py-8">
      <h2 className="text-2xl font-bold mb-6 text-gradient">Latest Articles</h2>

      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
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
      ) : posts.length > 0 ? (
        <div className="space-y-4">
          {posts.map((post) => (
            <Card key={post.id} className="bg-white border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden shrink-0 mr-4">
                    {post.imageUrl ? (
                      <img 
                        src={post.imageUrl} 
                        alt={post.title} 
                        className="w-full h-full object-cover"
                      />
                    ) : post.source === "Whatzduck" ? (
                      <div className="flex items-center justify-center h-full bg-yellow-100">
                        <span className="text-yellow-600 text-xl" role="img" aria-label="duck">🦆</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-full bg-purple-100">
                        <span className="text-sm font-bold text-purple-600">
                          GHA
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center text-xs text-gray-500 mb-1">
                      <span className={`inline-block px-2 py-0.5 rounded-full mr-2 ${
                        post.source === "Whatzduck" 
                          ? "bg-yellow-100 text-yellow-600" 
                          : "bg-gray-100 text-gray-600"
                      }`}>
                        {post.source}
                      </span>
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{formatDate(post.publishDate)}</span>
                    </div>
                    <h3 className="text-base font-medium mb-1 line-clamp-2">{post.title}</h3>
                    <div className="flex justify-between items-center">
                      <a href={post.link} target="_blank" rel="noreferrer" className="text-purple-600 text-sm flex items-center hover:underline">
                        Read <ArrowRight className="w-3 h-3 ml-1" />
                      </a>
                      
                      {post.source === "Whatzduck" && (
                        <a href="https://whatzduck.com/subscribe" target="_blank" rel="noreferrer" className="text-yellow-600 text-xs flex items-center">
                          <Send className="w-3 h-3 mr-1" />
                          Subscribe
                        </a>
                      )}
                      
                      {post.source === "Growth Hack Academy" && (
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
          ))}
        </div>
      ) : (
        <div className="text-center p-6 bg-purple-50 rounded-lg">
          <p className="text-gray-600">
            Failed to load blog posts. Please try again later or visit the blog directly.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a 
              href="https://growthhackacademy.com/blog" 
              target="_blank" 
              rel="noreferrer"
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              Visit GHA Blog
            </a>
            <a 
              href="https://whatzduck.com" 
              target="_blank" 
              rel="noreferrer"
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              Visit Whatzduck
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogSection;
