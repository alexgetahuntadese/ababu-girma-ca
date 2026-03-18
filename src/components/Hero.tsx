import { motion } from "framer-motion";
import { ArrowRight, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container">
        <div className="max-w-3xl mx-auto text-center md:text-left md:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6"
          >
            <Shield size={14} className="text-primary" />
            Trusted by 500+ Ethiopian Businesses
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-900 text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-foreground"
          >
            Precision Accounting for the{" "}
            <span className="text-gradient-purple">Addis Ababa</span>{" "}
            Growth Engine
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Navigate Ethiopia's evolving tax landscape with confidence. From audit readiness to full compliance — we protect your growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Button asChild size="lg" className="gradient-purple border-0 text-primary-foreground shadow-purple-lg hover:shadow-purple transition-all text-base h-13 px-8 rounded-xl">
              <a href="#cta">
                Calculate Your Tax Exposure
                <ArrowRight size={18} className="ml-1" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-13 px-8 rounded-xl text-base border-border hover:bg-secondary">
              <a href="#services">
                <TrendingUp size={18} className="mr-1 text-primary" />
                Explore Services
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
