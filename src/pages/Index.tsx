import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import RoomGallery from "@/components/RoomGallery";
import ServicesSection from "@/components/ServicesSection";
import BookingSection from "@/components/BookingSection";
import WhyUsSection from "@/components/WhyUsSection";
import ContactSection from "@/components/ContactSection";
import LocationSection from "@/components/LocationSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <RoomGallery />
      <ServicesSection />
      <BookingSection />
      <WhyUsSection />
      <ContactSection />
      <LocationSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
