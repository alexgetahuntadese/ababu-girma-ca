import { Bed, UtensilsCrossed, Car, Wifi, Dumbbell, Sparkles } from "lucide-react";

const services = [
  { icon: Bed, title: "Luxury Rooms", desc: "Spacious, elegantly furnished rooms with premium amenities and city views." },
  { icon: UtensilsCrossed, title: "Fine Dining", desc: "Exquisite Ethiopian and international cuisine prepared by expert chefs." },
  { icon: Car, title: "Airport Transfer", desc: "Complimentary airport pickup and drop-off for all our guests." },
  { icon: Wifi, title: "High-Speed WiFi", desc: "Stay connected with complimentary high-speed internet throughout the hotel." },
  { icon: Dumbbell, title: "Fitness Center", desc: "State-of-the-art gym and wellness facilities for your health routine." },
  { icon: Sparkles, title: "Event Spaces", desc: "Elegant conference halls and banquet rooms for any occasion." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <p className="text-accent text-sm font-medium text-center mb-2">What We Offer</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
          Our Services
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          Comprehensive hospitality services designed to make your stay unforgettable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="bg-gradient-card rounded-xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 shadow-card"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-5">
                <s.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
