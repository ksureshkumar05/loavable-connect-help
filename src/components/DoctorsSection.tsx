
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DoctorsSection = () => {
  const doctors = [
    {
      name: "Dr. Amanda Chen",
      specialty: "Cardiologist",
      description: "Specializing in heart health with over 15 years of experience in treating cardiovascular conditions.",
      availability: "Mon, Wed, Fri"
    },
    {
      name: "Dr. Michael Rodriguez",
      specialty: "Pediatrician",
      description: "Dedicated to children's health with a gentle approach and expertise in developmental pediatrics.",
      availability: "Tue, Thu, Sat"
    },
    {
      name: "Dr. Sarah Patel",
      specialty: "Neurologist",
      description: "Expert in neurological disorders with specialized training in headache management and stroke care.",
      availability: "Mon, Tue, Thu"
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Specialist Doctors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <Card key={index} className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="border-b pb-0">
                <div className="w-24 h-24 rounded-full bg-blue-100 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-blue-500 text-4xl font-light">
                    {doctor.name.split(' ').map(word => word[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-center">{doctor.name}</h3>
                <p className="text-blue-500 text-center">{doctor.specialty}</p>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-gray-600 text-center">{doctor.description}</p>
                <p className="text-gray-500 text-center mt-4">
                  <span className="font-semibold">Available:</span> {doctor.availability}
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button className="bg-blue-500 hover:bg-blue-600">Book Appointment</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorsSection;
