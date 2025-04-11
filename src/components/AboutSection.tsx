
import { Card, CardContent } from "@/components/ui/card";
import { ChartBar, Settings, Database } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">About Mahmoud</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Growth strategist and digital marketing expert with a passion for data-driven solutions and automation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="bg-secondary/40 border-gray-700 card-hover">
            <CardContent className="p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-brand-purple/20 flex items-center justify-center mb-6">
                <ChartBar className="w-8 h-8 text-brand-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Growth Marketing</h3>
              <p className="text-gray-300">
                Specialized in creating scalable growth strategies that deliver measurable results across channels.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-secondary/40 border-gray-700 card-hover">
            <CardContent className="p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-brand-blue/20 flex items-center justify-center mb-6">
                <Settings className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Automation</h3>
              <p className="text-gray-300">
                Building systems that automate repetitive tasks, allowing businesses to focus on strategic growth.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-secondary/40 border-gray-700 card-hover">
            <CardContent className="p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-brand-green/20 flex items-center justify-center mb-6">
                <Database className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Data Driven</h3>
              <p className="text-gray-300">
                Leveraging analytics and insights to make informed decisions that optimize performance and ROI.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
