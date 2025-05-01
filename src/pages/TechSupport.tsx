
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import IntegrationSteps from "@/components/IntegrationSteps";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const TechSupport = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <IntegrationSteps />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default TechSupport;
