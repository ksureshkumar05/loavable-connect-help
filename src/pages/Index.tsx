
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Welcome to Lovable</h1>
        <p className="text-xl text-gray-600 mb-8">
          The intelligent platform for building amazing web applications. Need help with Amazon Connect integration?
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button asChild className="bg-blue-500 hover:bg-blue-600">
            <Link to="/support">Technical Support</Link>
          </Button>
          <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
