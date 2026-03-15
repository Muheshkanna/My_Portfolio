import { useEffect, useRef } from "react";
import heroImage from "@/assets/hero-tactical.jpg";

const HeroSection = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!gridRef.current) return;
      const rect = gridRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      gridRef.current.style.setProperty("--mouse-x", `${x}px`);
      gridRef.current.style.setProperty("--mouse-y", `${y}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      {/* Tactical grid overlay */}
      <div
        ref={gridRef}
        className="absolute inset-0 tactical-grid z-[1]"
        style={{
          maskImage: "radial-gradient(circle 300px at var(--mouse-x, 50%) var(--mouse-y, 50%), black, transparent)",
          WebkitMaskImage: "radial-gradient(circle 300px at var(--mouse-x, 50%) var(--mouse-y, 50%), black, transparent)",
        }}
      />

      {/* Scan line */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
        <div className="w-full h-px bg-primary/10 animate-scan-line" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <p className="section-label mb-6">Full-Stack Developer</p>
        </div>

        <h1
          className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-foreground glow-text opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.3s", textWrap: "balance" } as React.CSSProperties}
        >

          <span className="text-primary">Muhesh Kanna M</span>

        </h1>

        <p
          className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-body leading-relaxed opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          Worked on different kinds of domains from the likes of Healthcare, Fintech and Tourism.
        </p>

        <div
          className="mt-12 flex items-center justify-center gap-4 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.7s" }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-tactical-inner bg-primary text-primary-foreground font-display text-sm font-bold tracking-wider uppercase transition-all duration-200 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.4)]"
          >
            View Tactical Plays
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-tactical-inner border border-border text-foreground font-display text-sm font-bold tracking-wider uppercase transition-all duration-200 hover:border-primary/50 hover:text-primary"
          >
            Connect
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
