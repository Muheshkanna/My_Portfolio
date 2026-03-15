const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-4">Scouting Report</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tighter text-foreground mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-foreground/80 text-lg leading-relaxed">
              Results-driven developer skilled in Python and full-stack technologies, with hands-on experience delivering multiple end-to-end projects.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Known for strong logical reasoning, effective leadership, and a creative mindset. Also an active writer currently developing a book series — because seeing the whole field means telling stories that matter.
            </p>
          </div>

          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
            <div className="card-tactical p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-display text-xs tracking-[0.2em] text-muted-foreground uppercase">Status</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                  <span className="font-display text-sm text-primary">Open to Opportunities</span>
                </div>
              </div>
              <div className="tactical-line" />
              <div className="flex items-center justify-between">
                <span className="font-display text-xs tracking-[0.2em] text-muted-foreground uppercase">Focus</span>
                <span className="font-display text-sm text-foreground">Full-Stack & AI/ML</span>
              </div>
              <div className="tactical-line" />
              <div className="flex items-center justify-between">
                <span className="font-display text-xs tracking-[0.2em] text-muted-foreground uppercase">Role</span>
                <span className="font-display text-sm text-foreground">Developer & Writer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
