import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center font-display font-bold text-primary-foreground text-sm">
            NH
          </div>
          <span className="font-display text-lg font-semibold text-foreground">Nathay Hotel</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {["rooms", "services", "booking", "why-us", "contact", "location"].map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium capitalize"
            >
              {id === "why-us" ? "Why Us" : id}
            </button>
          ))}
        </div>

        <Button
          onClick={() => (window.location.href = "tel:+251911000000")}
          className="hidden md:flex bg-gradient-primary hover:opacity-90 text-primary-foreground border-0 gap-2"
        >
          <Phone className="w-4 h-4" />
          Call Us
        </Button>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-border px-6 py-4 space-y-3 animate-fade-in">
          {["rooms", "services", "booking", "why-us", "contact", "location"].map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors text-sm font-medium capitalize"
            >
              {id === "why-us" ? "Why Us" : id}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
