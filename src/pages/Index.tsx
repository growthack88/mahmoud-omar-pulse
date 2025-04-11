
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import YouTubeSection from "@/components/YouTubeSection";
import ProjectsSection from "@/components/ProjectsSection";
import NewsletterSection from "@/components/NewsletterSection";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <HeroSection />
        <div className="container mx-auto px-4">
          <div className="relative z-10 -mt-20">
            <AboutSection />
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/3">
              <BlogSection />
            </div>
            <div className="md:w-1/3">
              <ProjectsSection />
              <div className="mt-6">
                <NewsletterSection />
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 my-8">
          <YouTubeSection />
        </div>
      </main>
      <ScrollToTop />
    </div>
  );
};

export default Index;
