
import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Clock } from "lucide-react";
import { fetchBlogPosts } from "@/utils/rssUtils";

interface Post {
  id: string;
  title: string;
  link: string;
  publishDate: string;
  description: string;
  imageUrl?: string;
}

const BlogSection = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlogPosts = async () => {
      setLoading(true);
      // Replace with actual RSS feed URL
      const feedUrl = "https://growthhackacademy.com/feed/";
      const fetchedPosts = await fetchBlogPosts(feedUrl);
      setPosts(fetchedPosts);
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
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Latest Articles</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights and strategies to help you scale your digital presence and growth.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-secondary/40 border-gray-700 h-96 animate-pulse">
                <div className="h-48 bg-gray-700/50 rounded-t-lg"></div>
                <CardContent className="p-6">
                  <div className="h-6 bg-gray-700/50 rounded mb-4 w-3/4"></div>
                  <div className="h-4 bg-gray-700/50 rounded mb-2 w-full"></div>
                  <div className="h-4 bg-gray-700/50 rounded mb-2 w-5/6"></div>
                  <div className="h-4 bg-gray-700/50 rounded w-4/6"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {posts.map((post) => (
              <Card key={post.id} className="bg-secondary/40 border-gray-700 overflow-hidden card-hover">
                <div className="h-48 bg-gray-700 relative">
                  {post.imageUrl ? (
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full bg-brand-purple/20">
                      <span className="text-2xl font-bold text-gradient">GHA</span>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{formatDate(post.publishDate)}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-300 line-clamp-3">{post.description}</p>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <a href={post.link} target="_blank" rel="noreferrer" className="w-full">
                    <Button variant="outline" className="w-full border-gray-600 hover:bg-gray-800 flex items-center gap-2">
                      <span>Read Article</span>
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
              Failed to load blog posts. Please try again later or visit the blog directly.
            </p>
            <a 
              href="https://growthhackacademy.com/blog" 
              target="_blank" 
              rel="noreferrer"
              className="text-brand-purple hover:text-brand-blue mt-4 inline-block"
            >
              Visit Blog
            </a>
          </div>
        )}
        
        <div className="text-center mt-12">
          <a 
            href="https://growthhackacademy.com/blog" 
            target="_blank" 
            rel="noreferrer"
            className="inline-block"
          >
            <Button variant="secondary" className="flex items-center gap-2">
              <span>View All Articles</span>
              <ExternalLink className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
