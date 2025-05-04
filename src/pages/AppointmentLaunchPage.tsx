
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AppointmentLaunchPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Virtual Healthcare <span className="text-blue-500">When You Need It</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Connect with our healthcare professionals through our seamless appointment scheduling system. Get the care you deserve, when you need it most.
                </p>
                <div className="flex gap-4">
                  <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 px-8">
                    <Link to="/appointments">Schedule Now <ArrowRight className="ml-2" /></Link>
                  </Button>
                  <Button variant="outline" size="lg" className="border-gray-800 text-gray-800 hover:bg-gray-100 px-8">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="/lovable-uploads/0e89cef9-4cc2-46de-aa3a-fab4923647db.png" 
                  alt="Doctor consulting with patient" 
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Appointment System</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-blue-50">
                <div className="h-16 w-16 rounded-full bg-blue-500 flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Easy Scheduling</h3>
                <p className="text-gray-600">Book appointments in minutes with our intuitive scheduling interface.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-blue-50">
                <div className="h-16 w-16 rounded-full bg-blue-500 flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">24/7 Availability</h3>
                <p className="text-gray-600">Access healthcare services any time of day with our around-the-clock support.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-blue-50">
                <div className="h-16 w-16 rounded-full bg-blue-500 flex items-center justify-center mb-4">
                  <User className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Personalized Care</h3>
                <p className="text-gray-600">Receive healthcare tailored to your specific needs from our specialist doctors.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Get Started CTA */}
        <section className="py-16 bg-blue-500 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Take the first step towards better healthcare management. Schedule your appointment today.
            </p>
            <Button asChild size="lg" variant="outline" className="bg-white text-blue-500 hover:bg-gray-100 border-white px-10">
              <Link to="/appointments">Schedule Appointment</Link>
            </Button>
          </div>
        </section>

        {/* Amazon Connect Integration Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                <h2 className="text-3xl font-bold mb-6">Need Help?</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Have questions about your appointment or need assistance? Connect with our support team through Amazon Connect.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our support agents are ready to assist you with any questions you may have about the appointment scheduling process.
                </p>
                <Button asChild className="bg-blue-500 hover:bg-blue-600">
                  <Link to="/support">Contact Support</Link>
                </Button>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Amazon Connect Chat Support</h3>
                  <p className="text-gray-600 mb-6">
                    Click the button below to initiate a chat with our support team through Amazon Connect.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg text-center">
                    <p className="text-gray-700 italic mb-4">[Amazon Connect Chat Widget Placeholder]</p>
                    <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">
                      Start Chat
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AppointmentLaunchPage;
