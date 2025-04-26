
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import YouTubeSection from "@/components/YouTubeSection";
import ProjectsSection from "@/components/ProjectsSection";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-tajawal">
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mahmoud Omar - Growth Marketing Specialist</title>
        <meta name="description" content="Growth Manager, Social Commerce Expert & eCommerce Specialist with data-driven strategies to help your business grow." />
        <meta name="author" content="Mahmoud Omar" />
        <meta name="keywords" content="growth marketing, social commerce, ecommerce, digital marketing, growth hacking, Mahmoud Omar" />
        
        {/* Favicon */}
        <link rel="icon" href="https://growthhack.pro/mine-notion.png" type="image/png" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mahmoudomar.com/" />
        <meta property="og:title" content="Mahmoud Omar - Growth Marketing Specialist" />
        <meta property="og:description" content="Growth Manager, Social Commerce Expert & eCommerce Specialist with data-driven strategies to help your business grow." />
        <meta property="og:image" content="https://growthhack.pro/mine-notion.png" />
        <meta property="og:image:alt" content="Mahmoud Omar" />
        <meta property="og:site_name" content="Mahmoud Omar" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@growthack88" />
        <meta name="twitter:title" content="Mahmoud Omar - Growth Marketing Specialist" />
        <meta name="twitter:description" content="Growth Manager, Social Commerce Expert & eCommerce Specialist with data-driven strategies to help your business grow." />
        <meta name="twitter:image" content="https://growthhack.pro/mine-notion.png" />
        
        {/* WhatsApp specific (uses Open Graph but benefits from explicit dimension specifications) */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Helmet>
      
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
