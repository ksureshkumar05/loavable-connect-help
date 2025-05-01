
import { Button } from "@/components/ui/button";

const IntegrationSteps = () => {
  const steps = [
    {
      number: "01",
      title: "Create Amazon Connect Instance",
      description: "Set up your Amazon Connect instance in the AWS Management Console."
    },
    {
      number: "02",
      title: "Configure Chat Widget",
      description: "Customize your chat widget settings in the Amazon Connect admin panel."
    },
    {
      number: "03",
      title: "Generate Integration Code",
      description: "Get your unique widget code from the Amazon Connect communication channel settings."
    },
    {
      number: "04",
      title: "Add to Lovable.dev",
      description: "Implement the widget code in your lovable.dev project with our simple integration tool."
    }
  ];

  return (
    <div className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">How It Works</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Follow these simple steps to integrate Amazon Connect chat widget with your lovable.dev project.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-blue-50 p-6 rounded-lg h-full">
                <div className="text-blue-500 font-bold text-3xl mb-4">{step.number}</div>
                <h3 className="font-semibold text-xl mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-4 h-4 rotate-45 border-t-2 border-r-2 border-blue-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="default" className="bg-blue-500 hover:bg-blue-600 text-white rounded-full py-6 px-8">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IntegrationSteps;
