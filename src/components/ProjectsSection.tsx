
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Clock, Briefcase, LineChart } from "lucide-react";

const ProjectsSection = () => {
  const consultationServices = [
    {
      id: 1,
      title: "Growth 45 Minute Meeting",
      price: "$45",
      description: "In this focused 45-minute session, we will dive into your growth and eCommerce challenges. I'll provide tailored advice on building scalable eCommerce systems, automating workflows, and leveraging growth strategies.",
      icon: <Clock className="w-5 h-5 text-purple-600" />,
      link: "https://tidycal.com/growthack88/growth-minute-meeting",
    },
    {
      id: 2,
      title: "Growth & Performance Career Coach",
      price: "$45",
      description: "Professional mentorship services to help individuals develop their career paths and achieve their goals in growth and digital marketing. Through personalized guidance and support.",
      icon: <Briefcase className="w-5 h-5 text-blue-600" />,
      link: "https://tidycal.com/growthack88/growth-and-performance-career-coach-mpqwo0q",
    },
    {
      id: 3,
      title: "Online Campaigns Performance Audit",
      price: "$45",
      description: "Comprehensive audit and feedback for your online campaigns. This service helps businesses optimize their digital marketing efforts and achieve higher ROI through detailed analysis and expert insights.",
      icon: <LineChart className="w-5 h-5 text-green-600" />,
      link: "https://tidycal.com/growthack88/online-campaigns-performance-audit-and-feedback-meeting-1jozx86",
    }
  ];

  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-6 text-gradient font-tajawal">خدمات الاستشارات</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {consultationServices.map((service) => (
          <a 
            key={service.id} 
            href={service.link} 
            target="_blank" 
            rel="noreferrer"
            className="block"
          >
            <Card 
              className="overflow-hidden transition-all duration-300 hover:shadow-md border border-gray-100 bg-white h-full"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="mb-4 flex justify-between items-center">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <span className="text-lg font-bold text-purple-600">{service.price}</span>
                </div>
                
                <h3 className="text-lg font-semibold mb-2 text-gray-800 font-tajawal">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow font-tajawal">{service.description}</p>
                
                <div className="mt-auto">
                  <Button 
                    variant="outline" 
                    className="w-full text-sm border-gray-200 bg-white hover:bg-purple-50 hover:text-purple-700 flex items-center justify-center gap-1"
                  >
                    <span className="font-tajawal">احجز موعد</span>
                    <ExternalLink className="w-3 h-3" />
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
