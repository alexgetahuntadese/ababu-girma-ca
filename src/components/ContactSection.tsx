import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    value: "+251 911 000 000",
    href: "tel:+251911000000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@nathayhotel.com",
    href: "mailto:info@nathayhotel.com",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <p className="text-accent text-sm font-medium text-center mb-2">Reach Out</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
          Get in Touch
        </h2>
        <p className="text-muted-foreground text-center max-w-lg mx-auto mb-16">
          Ready to book your stay? Contact us for reservations and inquiries.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="bg-gradient-card rounded-xl p-8 border border-border hover:border-primary/30 transition-all text-center group shadow-card"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 mx-auto group-hover:shadow-glow transition-shadow">
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <p className="text-muted-foreground text-sm mb-1">{item.label}</p>
              <p className="text-foreground font-medium text-sm">{item.value}</p>
            </a>
          ))}

          <div className="bg-gradient-card rounded-xl p-8 border border-border text-center shadow-card">
            <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 mx-auto">
              <MapPin className="w-6 h-6 text-primary-foreground" />
            </div>
            <p className="text-muted-foreground text-sm mb-1">Office</p>
            <p className="text-foreground font-medium text-sm">Bole, Addis Ababa, Ethiopia</p>
          </div>

          <div className="bg-gradient-card rounded-xl p-8 border border-border text-center shadow-card">
            <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 mx-auto">
              <Clock className="w-6 h-6 text-primary-foreground" />
            </div>
            <p className="text-muted-foreground text-sm mb-1">Reception</p>
            <p className="text-foreground font-medium text-sm">24/7 Available</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
