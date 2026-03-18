import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-purple-deep py-14 md:py-20">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-purple flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold">A</span>
              </div>
              <span className="font-display font-bold text-lg text-primary-foreground tracking-tight">
                Ababu Girma Accounting
              </span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-sm">
              Ababu Girma Authorized Accounting Firm — a trusted accounting and tax advisory practice in Gulele (Addisu Gebeya area), Addis Ababa. Serving Ethiopian businesses with integrity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground text-sm uppercase tracking-widest mb-4">Services</h4>
            <ul className="space-y-2">
              {["Audit & Assurance", "Tax Advisory", "Outsourcing", "Compliance"].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground text-sm uppercase tracking-widest mb-4">Connect</h4>
            <ul className="space-y-2">
              {[
                { label: "LinkedIn", href: "#" },
                { label: "Telegram", href: "#" },
                { label: "Email Us", href: "mailto:info@ababugirma-accounting.com" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors inline-flex items-center gap-1"
                  >
                    {item.label}
                    <ArrowUpRight size={12} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Ababu Girma Authorized Accounting Firm. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
