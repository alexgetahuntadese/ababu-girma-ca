import { motion } from "framer-motion";
import { Scale, Gavel, Building2 } from "lucide-react";

const services = [
  {
    icon: Scale,
    title: "Litigation & Arbitration",
    description:
      "Experienced representation in complex disputes before courts and arbitration tribunals. We handle commercial litigation, contract disputes, and enforcement proceedings.",
    features: ["Commercial Litigation", "Arbitration", "Contract Disputes"],
  },
  {
    icon: Gavel,
    title: "Corporate & Commercial",
    description:
      "Strategic counsel on mergers and acquisitions, company formation, banking, competition law, and regulatory compliance for local and foreign clients.",
    features: ["Mergers & Acquisitions", "Banking & Finance", "Company Law"],
  },
  {
    icon: Building2,
    title: "Sector Expertise",
    description:
      "Deep knowledge across energy, infrastructure, real estate, mining, ICT, intellectual property, employment law, procurement, and tax and customs matters.",
    features: ["Energy & Infrastructure", "Real Estate & Mining", "Tax & Customs"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-purple-surface">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Practice Areas</span>
          <h2 className="font-display font-800 text-3xl md:text-5xl text-foreground mt-3 tracking-tight">
            Three Pillars of Legal Excellence
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group bg-card rounded-2xl p-8 shadow-purple hover:shadow-purple-lg transition-shadow border border-border/50"
            >
              <div className="w-14 h-14 rounded-xl gradient-purple flex items-center justify-center mb-6 group-hover:animate-pulse-glow transition-all">
                <service.icon size={26} className="text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm mb-5">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
