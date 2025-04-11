
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
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-6 text-gradient">Projects & Services</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <Card 
            key={project.id} 
            className="bg-white overflow-hidden card-hover border border-gray-100 shadow-sm"
          >
            <CardContent className="p-4">
              <div className="flex flex-col h-full">
                <div className="mb-4 flex justify-center">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="h-12 w-auto object-contain"
                    />
                  ) : (
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center text-white`}>
                      {project.icon}
                    </div>
                  )}
                </div>
                
                <h3 className="text-lg font-semibold mb-2 text-center text-gray-800">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 text-center flex-grow">{project.description}</p>
                
                <div className="text-center mt-auto">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <Button variant="outline" className="text-sm border-gray-200 hover:bg-gray-50 hover:text-gray-900 flex items-center gap-1">
                      <span>Explore</span>
                      <ExternalLink className="w-3 h-3" />
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
