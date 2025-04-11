
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import YouTubeSection from "@/components/YouTubeSection";
import ProjectsSection from "@/components/ProjectsSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <BlogSection />
        <YouTubeSection />
        <NewsletterSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
