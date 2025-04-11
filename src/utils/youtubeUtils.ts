
interface YouTubeVideo {
  id: string;
  title: string;
  thumbnailUrl: string;
  publishedAt: string;
  videoUrl: string;
}

// Function to fetch recent YouTube videos from a channel
export const fetchYouTubeVideos = async (
  channelId: string = "@GrowthHackAcademy",
  maxResults: number = 5
): Promise<YouTubeVideo[]> => {
  try {
    // Since we don't have a real API key, this is a mock function that returns placeholder data
    // In a real implementation, you would use the YouTube Data API with an API key
    
    // For demonstration, we'll return mock data for the Growth Hack Academy channel
    const mockVideos: YouTubeVideo[] = [
      {
        id: "video1",
        title: "How to Create Viral Content for Social Commerce",
        thumbnailUrl: "https://i.ytimg.com/vi/placeholder1/maxresdefault.jpg",
        publishedAt: "2025-04-08T12:00:00Z",
        videoUrl: `https://www.youtube.com/watch?v=placeholder1`
      },
      {
        id: "video2",
        title: "Top 5 eCommerce Growth Strategies for 2025",
        thumbnailUrl: "https://i.ytimg.com/vi/placeholder2/maxresdefault.jpg",
        publishedAt: "2025-04-02T15:30:00Z",
        videoUrl: `https://www.youtube.com/watch?v=placeholder2`
      },
      {
        id: "video3",
        title: "Marketing Automation Tools You Need to Know",
        thumbnailUrl: "https://i.ytimg.com/vi/placeholder3/maxresdefault.jpg",
        publishedAt: "2025-03-25T09:45:00Z",
        videoUrl: `https://www.youtube.com/watch?v=placeholder3`
      },
      {
        id: "video4",
        title: "Growth Hacking for Beginners: Ultimate Guide",
        thumbnailUrl: "https://i.ytimg.com/vi/placeholder4/maxresdefault.jpg",
        publishedAt: "2025-03-18T14:15:00Z",
        videoUrl: `https://www.youtube.com/watch?v=placeholder4`
      },
      {
        id: "video5",
        title: "The Future of Social Commerce in 2025",
        thumbnailUrl: "https://i.ytimg.com/vi/placeholder5/maxresdefault.jpg",
        publishedAt: "2025-03-12T11:30:00Z",
        videoUrl: `https://www.youtube.com/watch?v=placeholder5`
      }
    ];
    
    return mockVideos;
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return [];
  }
};

// Helper to format dates
export const formatPublishedDate = (isoDate: string): string => {
  try {
    const date = new Date(isoDate);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    }).format(date);
  } catch (error) {
    return isoDate;
  }
};
