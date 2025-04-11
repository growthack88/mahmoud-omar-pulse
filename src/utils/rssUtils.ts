
interface Post {
  id: string;
  title: string;
  link: string;
  publishDate: string;
  description: string;
  imageUrl?: string;
}

// Function to convert XML to JSON
const convertXmlToJson = (xml: string) => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xml, "application/xml");
  return xmlDoc;
};

// Function to extract blog posts from RSS feed
export const fetchBlogPosts = async (feedUrl: string): Promise<Post[]> => {
  try {
    // Use CORS proxy for cross-origin requests
    const corsProxy = "https://api.allorigins.win/get?url=";
    const response = await fetch(`${corsProxy}${encodeURIComponent(feedUrl)}`);
    const data = await response.json();
    
    if (!data.contents) {
      throw new Error("Failed to fetch RSS feed");
    }
    
    const xmlDoc = convertXmlToJson(data.contents);
    const items = xmlDoc.querySelectorAll("item");
    const posts: Post[] = [];
    
    items.forEach((item, index) => {
      // Skip if we've already collected 5 posts
      if (index >= 5) return;
      
      const title = item.querySelector("title")?.textContent || "";
      const link = item.querySelector("link")?.textContent || "";
      const publishDate = item.querySelector("pubDate")?.textContent || "";
      const description = item.querySelector("description")?.textContent || "";
      
      // Try to extract image from description or media:content
      let imageUrl = "";
      const mediaContent = item.querySelector("media\\:content, content");
      if (mediaContent) {
        imageUrl = mediaContent.getAttribute("url") || "";
      } else if (description) {
        // Try to get image from description HTML
        const imgMatch = description.match(/<img[^>]+src="([^">]+)"/);
        if (imgMatch && imgMatch[1]) {
          imageUrl = imgMatch[1];
        }
      }
      
      // For Whatzduck, check for enclosure tag which often contains the image
      if (!imageUrl) {
        const enclosure = item.querySelector("enclosure");
        if (enclosure && enclosure.getAttribute("type")?.startsWith("image/")) {
          imageUrl = enclosure.getAttribute("url") || "";
        }
      }
      
      posts.push({
        id: `post-${index}-${new Date().getTime()}${Math.random().toString(36).substring(2, 15)}`,
        title,
        link,
        publishDate,
        description: description.replace(/<[^>]*>/g, "").substring(0, 100) + "...",
        imageUrl
      });
    });
    
    return posts;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
};
