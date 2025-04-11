
import { Card, CardContent } from "@/components/ui/card";
import { ChartBar, Settings, Database } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2 text-gradient">About Mahmoud</h2>
        <p className="text-base text-gray-600 max-w-2xl mx-auto">
          Growth strategist and digital marketing expert with a passion for data-driven solutions and automation.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <Card className="bg-white shadow-sm border-gray-100 card-hover">
          <CardContent className="p-4 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mb-3">
              <ChartBar className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="text-base font-semibold mb-1">Growth Marketing</h3>
            <p className="text-sm text-gray-600">
              Creating scalable growth strategies across channels.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-white shadow-sm border-gray-100 card-hover">
          <CardContent className="p-4 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-3">
              <Settings className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-base font-semibold mb-1">Automation</h3>
            <p className="text-sm text-gray-600">
              Building systems that automate repetitive tasks.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-white shadow-sm border-gray-100 card-hover">
          <CardContent className="p-4 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-3">
              <Database className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-base font-semibold mb-1">Data Driven</h3>
            <p className="text-sm text-gray-600">
              Leveraging analytics to optimize performance and ROI.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
