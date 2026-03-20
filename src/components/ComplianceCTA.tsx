import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

const legalNeeds = [
  "Contract Drafting & Review",
  "Litigation & Dispute Resolution",
  "Mergers & Acquisitions",
  "Company Formation & Licensing",
  "Tax & Customs Advisory",
  "Other",
];

const industries = [
  "Manufacturing",
  "Import/Export",
  "Technology",
  "Banking & Finance",
  "Real Estate",
  "Energy & Mining",
  "Construction",
  "Other",
];

const urgencyLevels = [
  "Immediate — active dispute or deadline",
  "Within 30 days",
  "Within 3 months",
  "Planning ahead",
  "Just exploring options",
];

const ComplianceCTA = () => {
  const [step, setStep] = useState(0);
  const [legalNeed, setLegalNeed] = useState("");
  const [industry, setIndustry] = useState("");
  const [urgency, setUrgency] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const progress = ((step + 1) / 3) * 100;

  const canProceed =
    (step === 0 && legalNeed) || (step === 1 && industry) || (step === 2 && urgency);

  const handleSubmit = () => {
    setSubmitted(true);
    toast({
      title: "Consultation Requested! ✅",
      description: "Our legal team will reach out within 24 hours to schedule your consultation.",
    });
  };

  if (submitted) {
    return (
      <section id="cta" className="py-20 md:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center gradient-purple-dark rounded-3xl p-10 md:p-16"
          >
            <CheckCircle2 size={56} className="text-primary-foreground mx-auto mb-6" />
            <h3 className="font-display font-bold text-2xl md:text-3xl text-primary-foreground mb-3">
              Your Consultation Is Confirmed
            </h3>
            <p className="text-primary-foreground/80 text-lg">
              We'll review your {legalNeed.toLowerCase()} matter in the {industry.toLowerCase()} sector and connect you with the right attorney within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="cta" className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Free Consultation</span>
            <h2 className="font-display font-800 text-3xl md:text-5xl text-foreground mt-3 tracking-tight">
              Get Expert Legal Advice
            </h2>
            <p className="text-muted-foreground mt-3 text-lg">
              3 questions. 60 seconds. Connect with the right attorney for your case.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="gradient-purple-dark rounded-3xl p-8 md:p-12 shadow-purple-lg"
          >
            {/* Progress */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-primary-foreground/70 mb-2">
                <span>Step {step + 1} of 3</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2 bg-primary-foreground/20 [&>div]:gradient-purple" />
            </div>

            <AnimatePresence mode="wait">
              {step === 0 && (
                <motion.div
                  key="step0"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-display font-bold text-xl text-primary-foreground mb-6">
                    What legal service do you need?
                  </h3>
                  <div className="grid gap-3">
                    {legalNeeds.map((r) => (
                      <button
                        key={r}
                        onClick={() => setLegalNeed(r)}
                        className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all text-sm font-medium ${
                          legalNeed === r
                            ? "border-accent bg-accent/20 text-primary-foreground"
                            : "border-primary-foreground/20 text-primary-foreground/80 hover:border-primary-foreground/40"
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-display font-bold text-xl text-primary-foreground mb-6">
                    What industry is your business in?
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {industries.map((ind) => (
                      <button
                        key={ind}
                        onClick={() => setIndustry(ind)}
                        className={`text-left px-5 py-4 rounded-xl border-2 transition-all text-sm font-medium ${
                          industry === ind
                            ? "border-accent bg-accent/20 text-primary-foreground"
                            : "border-primary-foreground/20 text-primary-foreground/80 hover:border-primary-foreground/40"
                        }`}
                      >
                        {ind}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-display font-bold text-xl text-primary-foreground mb-6">
                    How urgent is your matter?
                  </h3>
                  <div className="grid gap-3">
                    {urgencyLevels.map((e) => (
                      <button
                        key={e}
                        onClick={() => setUrgency(e)}
                        className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all text-sm font-medium ${
                          urgency === e
                            ? "border-accent bg-accent/20 text-primary-foreground"
                            : "border-primary-foreground/20 text-primary-foreground/80 hover:border-primary-foreground/40"
                        }`}
                      >
                        {e}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <Button
                variant="ghost"
                onClick={() => setStep(step - 1)}
                disabled={step === 0}
                className="text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10"
              >
                <ArrowLeft size={16} className="mr-1" />
                Back
              </Button>

              {step < 2 ? (
                <Button
                  onClick={() => setStep(step + 1)}
                  disabled={!canProceed}
                  className="gradient-purple text-primary-foreground border-0 shadow-purple"
                >
                  Next
                  <ArrowRight size={16} className="ml-1" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!canProceed}
                  className="gradient-purple text-primary-foreground border-0 shadow-purple animate-pulse-glow"
                >
                  Request Consultation
                  <ArrowRight size={16} className="ml-1" />
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceCTA;
