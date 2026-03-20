import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="text-accent text-sm font-medium mb-2">Ready to Book?</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
          Experience Luxury at Nathay Hotel
        </h2>
        <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
          Book your stay today. Premium rooms, exceptional service, and the finest Ethiopian hospitality await you.
        </p>
        <Button
          onClick={() => (window.location.href = "tel:+251911000000")}
          className="bg-gradient-primary hover:opacity-90 text-primary-foreground border-0 gap-2 px-10 py-6 text-lg shadow-glow"
        >
          <Phone className="w-5 h-5" />
          Book Now
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
