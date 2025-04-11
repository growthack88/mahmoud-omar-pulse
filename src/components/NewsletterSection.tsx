
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
    <section id="newsletter" className="py-6">
      <h2 className="text-2xl font-bold mb-4 text-gradient">Newsletter</h2>
      <Card className="bg-white border-gray-100">
        <CardContent className="p-4">
          <div className="flex space-x-2 mb-4">
            <button
              type="button"
              onClick={() => setSelectedNewsletter("whatzduck")}
              className={`flex-1 text-center py-2 px-3 rounded-md text-sm transition-colors ${
                selectedNewsletter === "whatzduck"
                  ? "bg-purple-100 text-purple-700 font-medium"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Whatzduck
            </button>
            <button
              type="button"
              onClick={() => setSelectedNewsletter("gha")}
              className={`flex-1 text-center py-2 px-3 rounded-md text-sm transition-colors ${
                selectedNewsletter === "gha"
                  ? "bg-purple-100 text-purple-700 font-medium"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              GHA
            </button>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
              <Input
                type="email"
                placeholder="Your email"
                className="pl-9 bg-gray-50 border-gray-200 text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting || isSubmitted}
              />
              <Button 
                type="submit" 
                className="mt-2 w-full bg-gradient-to-r from-[#8B5CF6] to-[#3182CE] hover:opacity-90 text-sm h-9"
                disabled={isSubmitting || isSubmitted || !selectedNewsletter}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Subscribing...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center justify-center">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Subscribed!
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <Send className="mr-2 h-4 w-4" />
                    Subscribe
                  </span>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};

export default NewsletterSection;
