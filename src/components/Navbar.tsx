import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
        }`}
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <a href="#" className="font-display text-sm font-bold tracking-wider text-primary">
          <span className="text-foreground">Portfolio</span>
        </a>

        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-display text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
