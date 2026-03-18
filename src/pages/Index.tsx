import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import ComplianceCTA from "@/components/ComplianceCTA";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <ComplianceCTA />
      <MapSection />
      <Footer />
    </div>
  );
};

export default Index;
