import { motion } from "framer-motion";
import { MapPin, Clock, ExternalLink, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const getIsOpen = () => {
  const now = new Date();
  // EAT is UTC+3
  const eatHour = (now.getUTCHours() + 3) % 24;
  const day = now.getUTCDay();
  // Mon-Fri 8:30 AM - 5:30 PM, Sat 9 AM - 1 PM
  if (day >= 1 && day <= 5) return eatHour >= 8 && eatHour < 18;
  if (day === 6) return eatHour >= 9 && eatHour < 13;
  return false;
};

const MapSection = () => {
  const isOpen = getIsOpen();

  return (
    <section id="contact" className="py-20 md:py-28 bg-purple-surface">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Find Us</span>
          <h2 className="font-display font-800 text-3xl md:text-5xl text-foreground mt-3 tracking-tight">
            The Addis Hub
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden shadow-purple-lg border border-border/50"
        >
          {/* Map iframe */}
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d38.763!3d9.015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDAnNTQuMCJOIDM4wrA0NSc0Ni44IkU!5e0!3m2!1sen!2set!4v1700000000000"
            className="w-full h-[350px] md:h-[450px] grayscale-[30%] contrast-[1.1]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
          />

          {/* Floating card */}
          <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-auto md:w-[380px]">
            <div className="bg-card/95 backdrop-blur-xl rounded-2xl p-6 shadow-purple-lg border border-border/50">
              <div className="flex items-center gap-2 mb-4">
                <div
                  className={`w-3 h-3 rounded-full ${
                    isOpen ? "bg-green-500 animate-pulse" : "bg-muted-foreground"
                  }`}
                />
                <span className={`text-sm font-semibold ${isOpen ? "text-green-600" : "text-muted-foreground"}`}>
                  {isOpen ? "Open Now" : "Currently Closed"}
                </span>
              </div>

              <h3 className="font-display font-bold text-lg text-foreground mb-1">Abyssinia Advisory</h3>

              <div className="space-y-2 mt-4 text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                  <span>Nani Building, 12th Floor, Kazanchis, Addis Ababa, Ethiopia</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-primary shrink-0" />
                  <span>Mon–Fri: 8:30 AM – 5:30 PM · Sat: 9 AM – 1 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-primary shrink-0" />
                  <span>+251 11 551 2345</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-primary shrink-0" />
                  <span>info@abyssinia-advisory.com</span>
                </div>
              </div>

              <Button asChild className="w-full mt-5 gradient-purple text-primary-foreground border-0 shadow-purple">
                <a
                  href="https://www.google.com/maps/dir//Kazanchis,+Addis+Ababa,+Ethiopia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Google Maps
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;
