
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppointmentHero from "@/components/AppointmentHero";
import ServiceCards from "@/components/ServiceCards";
import DoctorsSection from "@/components/DoctorsSection";
import AppointmentForm from "@/components/AppointmentForm";

const AppointmentScheduling = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AppointmentHero />
        <ServiceCards />
        <DoctorsSection />
        <AppointmentForm />
      </main>
      <Footer />
    </div>
  );
};

export default AppointmentScheduling;
