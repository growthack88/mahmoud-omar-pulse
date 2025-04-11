
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send, CheckCircle } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [selectedNewsletter, setSelectedNewsletter] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }
    
    if (!selectedNewsletter) {
      toast({
        title: "Error",
        description: "Please select a newsletter.",
        variant: "destructive"
      });
      return;
    }
    
    // Simulate form submission
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      toast({
        title: "Success!",
        description: `You're now subscribed to ${selectedNewsletter === "whatzduck" ? "Whatzduck" : "Growth Hack Academy"}.`,
        variant: "default"
      });
      
      // Reset the form
      setEmail("");
      
      // Reset the submission state after a delay
      setTimeout(() => {
        setIsSubmitted(false);
        setSelectedNewsletter(null);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="newsletter" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Join My Newsletter</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get exclusive growth hacking tips, strategies, and insights delivered to your inbox.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card 
              className={`border-0 card-hover cursor-pointer ${selectedNewsletter === "whatzduck" ? "ring-2 ring-brand-purple" : ""}`}
              onClick={() => setSelectedNewsletter("whatzduck")}
            >
              <CardContent className="p-8 bg-white text-brand-darkGray rounded-lg">
                <div className="flex flex-col items-center text-center">
                  <img 
                    src="https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/publication/logo/8338372e-c910-4fa7-bed4-5f73cf10471a/What_duck__1_.png" 
                    alt="Whatzduck Logo" 
                    className="w-20 h-auto mb-6"
                  />
                  <h3 className="text-2xl font-bold mb-3">Whatzduck</h3>
                  <p className="text-lg font-medium mb-3">Sarcastic Marketing & Growth Tips</p>
                  <p className="text-gray-600 mb-6">
                    Get your dose of witty, sarcastic, and actionable marketing tips. Perfect for growth hackers who love a good laugh while learning.
                  </p>
                  {selectedNewsletter === "whatzduck" && (
                    <div className="text-brand-purple">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
            
            <Card 
              className={`border-0 card-hover cursor-pointer ${selectedNewsletter === "gha" ? "ring-2 ring-brand-purple" : ""}`}
              onClick={() => setSelectedNewsletter("gha")}
            >
              <CardContent className="p-8 bg-white text-brand-darkGray rounded-lg">
                <div className="flex flex-col items-center text-center">
                  <img 
                    src="https://growthhackacademy.com/wp-content/uploads/2025/03/GHA-new.png" 
                    alt="Growth Hack Academy Newsletter Logo" 
                    className="w-20 h-auto mb-6"
                  />
                  <h3 className="text-2xl font-bold mb-3">Growth Hack Academy</h3>
                  <p className="text-lg font-medium mb-3">Educational Content for Digital Growth</p>
                  <p className="text-gray-600 mb-6">
                    Dive into in-depth guides, strategies, and insights for digital marketing, eCommerce, and growth hacking. Learn, grow, and succeed.
                  </p>
                  {selectedNewsletter === "gha" && (
                    <div className="text-brand-purple">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="border-0">
            <CardContent className="p-8 bg-secondary/40 rounded-lg">
              <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <div className="w-full max-w-md">
                  <div className="flex gap-3 mb-6">
                    <div className="relative flex-1">
                      <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="pl-10 bg-background border-gray-700 focus:border-brand-purple h-12"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isSubmitting || isSubmitted}
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 h-12 px-6"
                      disabled={isSubmitting || isSubmitted}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing
                        </span>
                      ) : isSubmitted ? (
                        <span className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Subscribed!
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-4 w-4" />
                          Subscribe
                        </span>
                      )}
                    </Button>
                  </div>
                  
                  <div className="text-center text-sm text-gray-400">
                    {selectedNewsletter ? (
                      <p>
                        You've selected: <span className="text-white font-medium">
                          {selectedNewsletter === "whatzduck" ? "Whatzduck" : "Growth Hack Academy"}
                        </span>
                      </p>
                    ) : (
                      <p>Please select a newsletter above.</p>
                    )}
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
