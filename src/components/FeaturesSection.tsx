
import { CheckCircle } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      title: "Quick Integration",
      description: "Easily integrate Amazon Connect chat widgets with your lovable.dev projects in minutes."
    },
    {
      title: "Real-time Support",
      description: "Connect your customers with support agents in real-time through a seamless chat interface."
    },
    {
      title: "Customizable Interface",
      description: "Personalize the chat widget to match your brand's colors, style, and messaging."
    },
    {
      title: "Analytics Dashboard",
      description: "Track engagement metrics and customer satisfaction through comprehensive analytics."
    },
    {
      title: "Multi-device Compatibility",
      description: "Provide support across desktop, tablet, and mobile devices with responsive design."
    },
    {
      title: "Secure Communications",
      description: "Ensure customer data protection with enterprise-grade security protocols."
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Amazon Connect Integration Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <CheckCircle className="text-blue-500 mr-2 flex-shrink-0" size={20} />
                <h3 className="font-semibold text-xl">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
