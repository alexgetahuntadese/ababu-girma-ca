import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationSection = () => {
  return (
    <section id="location" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <p className="text-accent text-sm font-medium text-center mb-2">Our Location</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          Visit Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map embed */}
          <div className="rounded-xl overflow-hidden border border-border shadow-card aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15762.5!2d38.78!3d9.01!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) brightness(0.8) contrast(1.2)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nathay Hotel Location"
            />
          </div>

          {/* Info card */}
          <div className="bg-gradient-card rounded-xl p-10 border border-border shadow-card flex flex-col justify-center">
            <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-6">
              <MapPin className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">Nathay Hotel</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Bole Sub-City, Addis Ababa, Ethiopia.
              <br />
              Conveniently located near Bole International Airport with easy access to the city center.
            </p>
            <Button
              asChild
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground border-0 w-fit gap-2"
            >
              <a
                href="https://www.google.com/maps/search/Bole+Addis+Ababa+Hotel"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
