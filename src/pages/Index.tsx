
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import YouTubeSection from "@/components/YouTubeSection";
import ProjectsSection from "@/components/ProjectsSection";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-tajawal">
      <Header />
      <main>
        <HeroSection />
        <div className="container mx-auto px-4">
          <div className="relative z-10 -mt-20">
            <AboutSection />
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8">
          <div className="flex flex-col gap-6">
            <ProjectsSection />
            <div className="grid grid-cols-1 gap-6" id="articles">
              <BlogSection />
              <YouTubeSection />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
