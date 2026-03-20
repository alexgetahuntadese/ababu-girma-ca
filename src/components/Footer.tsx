const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center font-display font-bold text-primary-foreground text-xs">
            NH
          </div>
          <span className="font-display text-sm font-semibold text-foreground">Nathay Hotel</span>
        </div>
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} Nathay Hotel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
