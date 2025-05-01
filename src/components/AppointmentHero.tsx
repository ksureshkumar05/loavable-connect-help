
import React from "react";
import { Button } from "@/components/ui/button";

const AppointmentHero = () => {
  return (
    <div className="relative bg-blue-50 overflow-hidden">
      <div className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            We Provide <span className="text-blue-500">Medical</span> Services That You Can <span className="text-blue-500">Trust!</span>
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            Our team of experienced healthcare providers is dedicated to delivering exceptional care with compassion and expertise, ensuring your health needs are met with the highest standard of service.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-blue-500 hover:bg-blue-600 text-lg py-6 px-8">
              Get Appointment
            </Button>
            <Button variant="outline" className="border-2 border-gray-800 hover:bg-gray-100 text-gray-800 text-lg py-6 px-8">
              Learn More
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <img 
            src="/lovable-uploads/0e89cef9-4cc2-46de-aa3a-fab4923647db.png" 
            alt="Doctor with stethoscope" 
            className="rounded-lg shadow-xl max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentHero;
