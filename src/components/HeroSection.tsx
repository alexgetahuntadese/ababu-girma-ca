import { Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-hotel.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 glass-light rounded-full px-5 py-2 mb-8 animate-fade-in">
          <span className="text-accent text-sm">✦</span>
          <span className="text-muted-foreground text-sm font-medium">Premium Hotel — Ethiopia</span>
          <span className="text-accent text-sm">✦</span>
        </div>

        <h1 className="font-display text-6xl md:text-8xl font-bold text-foreground leading-tight mb-4 animate-fade-in-up">
          Nathay
          <br />
          <span className="text-gradient">Hotel</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground font-display mb-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Premium Hospitality
        </p>

        <p className="text-muted-foreground text-sm md:text-base mb-10 max-w-lg mx-auto animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          Luxury · Comfort · Excellence — Your premier destination in Addis Ababa
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Button
            onClick={() => (window.location.href = "tel:+251911000000")}
            className="bg-gradient-primary hover:opacity-90 text-primary-foreground border-0 gap-2 px-8 py-6 text-base"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </Button>
          <Button
            onClick={() => (window.location.href = "mailto:info@nathayhotel.com")}
            variant="outline"
            className="border-border text-foreground hover:bg-secondary gap-2 px-8 py-6 text-base"
          >
            <Mail className="w-5 h-5" />
            Send Email
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default HeroSection;
