import { Shield, MapPin, Heart } from "lucide-react";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "5000+", label: "Happy Guests" },
  { value: "100%", label: "Satisfaction Rate" },
  { value: "4.8★", label: "Guest Rating" },
];

const features = [
  { icon: Shield, title: "Premium Quality", desc: "Every detail crafted for excellence — from linens to dining, we maintain the highest standards." },
  { icon: MapPin, title: "Prime Location", desc: "Centrally located in Addis Ababa with easy access to business districts and cultural landmarks." },
  { icon: Heart, title: "Ethiopian Hospitality", desc: "Experience genuine warmth and care rooted in Ethiopia's rich tradition of welcoming guests." },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <p className="text-accent text-sm font-medium text-center mb-2">Why Choose Us</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          Trust & Excellence
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((s) => (
            <div key={s.label} className="text-center glass rounded-xl p-6">
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">{s.value}</div>
              <p className="text-muted-foreground text-sm">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-gradient-card rounded-xl p-8 border border-border shadow-card">
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-5">
                <f.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
