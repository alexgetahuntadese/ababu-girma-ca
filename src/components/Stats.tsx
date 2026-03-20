import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Years of Practice" },
  { value: "800+", label: "Cases Handled" },
  { value: "97%", label: "Success Rate" },
  { value: "350+", label: "Clients Represented" },
];

const Stats = () => {
  return (
    <section id="stats" className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Track Record</span>
          <h2 className="font-display font-800 text-3xl md:text-5xl text-foreground mt-3 tracking-tight">
            Results That Build Confidence
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center p-6 md:p-8 rounded-2xl bg-card border border-border/50 shadow-purple"
            >
              <div className="font-display font-900 text-3xl md:text-5xl text-gradient-purple tabular-nums">
                {stat.value}
              </div>
              <div className="mt-2 text-sm md:text-base text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-muted-foreground"
        >
          {["Ethiopian Bar Association", "AALCC Member", "ICC Arbitration", "ADR Certified"].map((badge) => (
            <div key={badge} className="flex items-center gap-2 text-sm font-medium">
              <div className="w-2 h-2 rounded-full bg-primary/60" />
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
