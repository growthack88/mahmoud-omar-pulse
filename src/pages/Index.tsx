
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import YouTubeSection from "@/components/YouTubeSection";
import PodcastSection from "@/components/PodcastSection";
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
        <link rel="icon" href="https://i.ibb.co/HRFq0Zv/my-notion-face-customized.png" type="image/png" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mahmoudomar.com/" />
        <meta property="og:title" content="Mahmoud Omar - Growth Marketing Specialist" />
        <meta property="og:description" content="Growth Manager, Social Commerce Expert & eCommerce Specialist with data-driven strategies to help your business grow." />
        <meta property="og:image" content="https://i.ibb.co/HRFq0Zv/my-notion-face-customized.png" />
        <meta property="og:image:alt" content="Mahmoud Omar" />
        <meta property="og:site_name" content="Mahmoud Omar" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@growthack88" />
        <meta name="twitter:title" content="Mahmoud Omar - Growth Marketing Specialist" />
        <meta name="twitter:description" content="Growth Manager, Social Commerce Expert & eCommerce Specialist with data-driven strategies to help your business grow." />
        <meta name="twitter:image" content="https://i.ibb.co/HRFq0Zv/my-notion-face-customized.png" />
        
        {/* WhatsApp specific (uses Open Graph but benefits from explicit dimension specifications) */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Helmet>
      
      <Header />
      <main>
        <HeroSection />
        <div className="container mx-auto px-4 mt-8">
          {/* Duck Logo Section */}
          <div className="flex justify-center mb-8">
            <a 
              href="https://whatzduck.com" 
              target="_blank" 
              rel="noreferrer"
              className="block"
            >
              <div className="bg-white shadow-sm border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow duration-300 card-hover">
                <div className="flex flex-col items-center text-center">
                  <img 
                    src="/lovable-uploads/7f3a032d-df5e-48ee-a3fa-2baafc518a00.png" 
                    alt="Duck Logo" 
                    className="w-16 h-16 mb-3"
                  />
                  <h2 className="text-xl font-bold text-gradient font-tajawal">صوت البطة</h2>
                </div>
              </div>
            </a>
          </div>
          <AboutSection />
        </div>
        <div className="container mx-auto px-4 mt-8">
          <div className="flex flex-col gap-6">
            <ProjectsSection />
            <div className="grid grid-cols-1 gap-6" id="articles">
              <PodcastSection />
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
