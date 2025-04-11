
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import YouTubeSection from "@/components/YouTubeSection";
import ProjectsSection from "@/components/ProjectsSection";
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
          <div className="flex flex-col gap-6">
            <BlogSection />
            <ProjectsSection />
            <YouTubeSection />
          </div>
        </div>
      </main>
      <ScrollToTop />
    </div>
  );
};

export default Index;
