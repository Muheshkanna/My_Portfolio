const EducationSection = () => {
  return (
    <section id="education" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-4">Training Ground</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tighter text-foreground mb-20">
          Formation History
        </h2>

        <div className="space-y-6">
          {/* Engineering */}
          <div className="card-tactical p-8 md:p-12 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div>
                <p className="font-display text-xs tracking-[0.3em] text-primary uppercase mb-3">
                  2023 — 2027
                </p>
                <h3 className="font-display text-xl font-bold tracking-tight text-foreground mb-2">
                  Engineering in Computer Science
                </h3>
                <p className="text-muted-foreground">
                  Nadar Saraswathi College of Engineering and Technology
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                <span className="font-display text-sm text-primary tracking-wider uppercase">
                  Active
                </span>
              </div>
            </div>
            <p className="mt-6 text-muted-foreground leading-relaxed text-sm">
              Currently pursuing bachelor's degree in Computer Science Engineering, focusing on Federated Intelligence, Environmental Computing, and Full-Stack Development.
            </p>
          </div>

          {/* Higher School */}
          <div className="card-tactical p-8 md:p-12 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div>
                <p className="font-display text-xs tracking-[0.3em] text-primary uppercase mb-3">
                  2021 — 2023
                </p>
                <h3 className="font-display text-xl font-bold tracking-tight text-foreground mb-2">
                  Higher School Education
                </h3>
                <p className="text-muted-foreground">
                  Santiniketan Matric Higher Secondary School, Theni
                </p>
              </div>
              <div className="flex items-center gap-2">
                <svg width="8" height="8" viewBox="0 0 8 8" className="text-primary">
                  <polygon points="4,0 8,4 4,8 0,4" fill="currentColor" />
                </svg>
                <span className="font-display text-sm text-muted-foreground tracking-wider uppercase">
                  Completed
                </span>
              </div>
            </div>
            <p className="mt-6 text-muted-foreground leading-relaxed text-sm">
              Completed higher school education with 86% in 12th standard.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
