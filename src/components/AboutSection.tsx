
import { Card, CardContent } from "@/components/ui/card";
import { ChartBar, Briefcase, Database, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const projects = [
    {
      id: 1,
      title: "Templify",
      description: "Free Growth & Marketing Templates to accelerate your business growth.",
      icon: <ChartBar className="w-5 h-5 text-purple-600" />,
      link: "https://templify.pro",
    },
    {
      id: 2,
      title: "Internship Opportunity",
      description: "Apply for an exciting internship at Growth Hack Academy and work with industry experts.",
      icon: <Briefcase className="w-5 h-5 text-blue-600" />,
      link: "https://growthhackacademy.com/internship",
    },
    {
      id: 3,
      title: "Building a Growth Machine",
      description: "Learn how to build a scalable growth system for your business with proven frameworks.",
      icon: <Database className="w-5 h-5 text-green-600" />,
      link: "#",
    },
  ];

  return (
    <section id="about" className="py-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2 text-gradient">About Mahmoud</h2>
        <p className="text-base text-gray-600 max-w-2xl mx-auto">
          Growth strategist and digital marketing expert with a passion for data-driven solutions and automation.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <a 
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            <Card className="bg-white shadow-sm border-gray-100 card-hover h-full">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                  {project.icon}
                </div>
                <h3 className="text-base font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-3">
                  {project.description}
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="mt-auto text-sm border-gray-200 bg-white hover:bg-gray-50 hover:text-gray-900 flex items-center gap-1"
                >
                  <span className="font-tajawal">استكشف</span>
                  <ExternalLink className="w-3 h-3" />
                </Button>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
