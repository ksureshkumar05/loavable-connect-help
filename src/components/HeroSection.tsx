
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="py-12 px-6 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img 
            src="/lovable-uploads/c7bb9bca-014f-4dfb-a06a-70bfc576eb08.png"
            alt="Technical Support Specialist" 
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-500 mb-6">Technical Support</h1>
          <p className="text-gray-600 mb-8 text-lg">
            Get expert assistance with your Amazon Connect chat widget integration on lovable.dev. Our technical support team is ready to help you implement and optimize your customer service solutions.
          </p>
          <Button variant="default" className="bg-blue-500 hover:bg-blue-600 text-white rounded-full py-6 px-8 w-fit">
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
