
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Templify",
      description: "Free Growth & Marketing Templates to accelerate your business growth.",
      image: "/lovable-uploads/31ee53e0-99e0-495e-92b0-06b5650dfdae.png",
      link: "https://templify.pro",
      color: "bg-[#F8F9FA]"
    },
    {
      id: 2,
      title: "Internship Opportunity",
      description: "Apply for an exciting internship at Growth Hack Academy and work with industry experts.",
      image: "https://growthhackacademy.com/wp-content/uploads/2025/03/GHA-new.png",
      link: "https://growthhackacademy.com/internship",
      color: "bg-[#F8F9FA]"
    },
    {
      id: 3,
      title: "Schedule Meeting",
      description: "Book a consultation or collaboration session directly on my calendar.",
      link: "https://tidycal.com/growthack88",
      color: "bg-[#F8F9FA]"
    },
    {
      id: 4,
      title: "Explore Content",
      description: "Check out my latest articles, blogs and educational content.",
      link: "#articles",
      isInternal: true,
      color: "bg-[#F8F9FA]"
    }
  ];

  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-6 text-gradient font-tajawal">المشاريع والخدمات</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <a 
            key={project.id} 
            href={project.link} 
            target={project.isInternal ? "_self" : "_blank"} 
            rel="noreferrer"
            className="block"
          >
            <Card 
              className={`overflow-hidden transition-all duration-300 hover:shadow-md border border-gray-100 ${project.color} h-full`}
            >
              <div className="p-6 flex flex-col h-full">
                {project.image && (
                  <div className="mb-4 flex justify-center">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                )}
                
                <h3 className="text-lg font-semibold mb-2 text-center text-gray-800 font-tajawal">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 text-center flex-grow font-tajawal">{project.description}</p>
                
                <div className="text-center mt-auto">
                  <Button 
                    variant="outline" 
                    className="text-sm border-gray-200 bg-white hover:bg-gray-50 hover:text-gray-900 flex items-center gap-1"
                  >
                    <span className="font-tajawal">استكشف</span>
                    {project.isInternal ? (
                      <Calendar className="w-3 h-3" />
                    ) : (
                      <ExternalLink className="w-3 h-3" />
                    )}
                  </Button>
                </div>
              </div>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
