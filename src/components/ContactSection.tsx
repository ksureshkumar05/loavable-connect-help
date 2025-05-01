
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Need Assistance?</h2>
            <p className="text-gray-600 mb-6">
              Our technical support team is available to help you with your Amazon Connect chat widget integration. 
              Fill out the form, and we'll get back to you as soon as possible.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <Input id="subject" placeholder="How can we help?" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <Textarea id="message" placeholder="Describe your issue or question" className="min-h-[120px]" />
                </div>
                
                <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Alternative Support Channels</h3>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-lg mb-2">Documentation</h4>
                <p className="text-gray-600 mb-4">
                  Explore our comprehensive guides and tutorials for step-by-step integration instructions.
                </p>
                <Button variant="outline" className="text-blue-500 border-blue-500 hover:bg-blue-50">
                  View Documentation
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-lg mb-2">Live Chat Support</h4>
                <p className="text-gray-600 mb-4">
                  Connect with our support team instantly through our live chat service.
                </p>
                <Button variant="outline" className="text-blue-500 border-blue-500 hover:bg-blue-50">
                  Start Chat
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-lg mb-2">Email Support</h4>
                <p className="text-gray-600 mb-4">
                  Send your questions directly to our technical support team.
                </p>
                <Button variant="outline" className="text-blue-500 border-blue-500 hover:bg-blue-50">
                  support@lovable.dev
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
