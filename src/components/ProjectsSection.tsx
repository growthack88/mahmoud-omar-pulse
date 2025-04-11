
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Briefcase, Calendar } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Growth Hack Academy",
      description: "Educational platform for digital marketers and entrepreneurs to learn growth strategies.",
      image: "https://growthhackacademy.com/wp-content/uploads/2025/03/GHA-new.png",
      link: "https://growthhackacademy.com",
      color: "from-brand-purple to-brand-blue"
    },
    {
      id: 2,
      title: "Templify",
      description: "Free Growth & Marketing Templates to accelerate your business growth.",
      image: "https://templify.pro/_next/image?url=https%3A%2F%2Fassets.super.so%2F99459355-6dfe-4a2c-bf99-dc01e0d1351b%2Fuploads%2Flogo%2Fb9300f8d-5e47-47c6-aaa6-ea724d9fe4da.png&w=384&q=90",
      link: "https://templify.pro",
      color: "from-brand-green to-emerald-400"
    },
    {
      id: 3,
      title: "Internship Opportunity",
      description: "Apply for an exciting internship at Growth Hack Academy and work with industry experts.",
      icon: <Briefcase className="w-12 h-12" />,
      link: "https://growthhackacademy.com/internship",
      color: "from-blue-600 to-blue-400"
    },
    {
      id: 4,
      title: "Schedule a Meeting",
      description: "Book a 1:1 session to discuss growth strategies tailored to your business.",
      icon: <Calendar className="w-12 h-12" />,
      link: "https://tidycal.com/growthack88",
      color: "from-brand-purple to-violet-400"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Projects & Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my projects, tools, and services designed to help businesses grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="overflow-hidden card-hover border-0"
            >
              <div className={`bg-gradient-to-r ${project.color} p-6 h-full`}>
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="flex-1">
                    {project.image ? (
                      <div className="flex justify-center mb-6">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="h-16 w-auto object-contain"
                        />
                      </div>
                    ) : (
                      <div className="flex justify-center mb-6 text-white">
                        {project.icon}
                      </div>
                    )}
                    
                    <h3 className="text-xl font-bold mb-3 text-white text-center">{project.title}</h3>
                    <p className="text-white/90 text-center mb-6">{project.description}</p>
                  </div>
                  
                  <div className="text-center">
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <Button variant="default" className="bg-white text-gray-900 hover:bg-white/90 flex items-center gap-2">
                        <span>Explore</span>
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
