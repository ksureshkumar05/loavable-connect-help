
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServiceCards = () => {
  const services = [
    {
      title: "Emergency Cases",
      description: "Immediate medical attention for urgent health concerns, available 24/7 with our dedicated emergency team.",
      bgColor: "bg-blue-500"
    },
    {
      title: "Doctor's Timetable",
      description: "View our physicians' schedules to book appointments with your preferred healthcare specialist.",
      bgColor: "bg-blue-500"
    },
    {
      title: "Opening Hours",
      description: "Monday - Friday: 8:00-20:00\nSaturday: 9:00-18:00\nSunday: 10:00-16:00",
      bgColor: "bg-blue-500"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`${service.bgColor} text-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300`}>
              <CardHeader>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-line">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
