const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-4">Professional Record</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tighter text-foreground mb-20">
          Experience
        </h2>

        <div className="space-y-6">
          {/* Machine Learning Intern */}
          <div className="card-tactical p-8 md:p-12 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div>
                <p className="font-display text-xs tracking-[0.3em] text-primary uppercase mb-3">
                  Jun 2026 – Jul 2026
                </p>
                <h3 className="font-display text-xl font-bold tracking-tight text-foreground mb-2">
                  Machine Learning Intern
                </h3>
                <p className="text-muted-foreground">
                  Gradtwin, Chennai
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
            <ul className="mt-6 text-muted-foreground leading-relaxed text-sm space-y-3 list-none">
              <li className="flex gap-3">
                <span className="text-primary">▸</span>
                Compressed a large teacher model into a lightweight student model while preserving accuracy for faster inference, model while targeting a Full-Stack, or ML Developer role.
              </li>
              <li className="flex gap-3">
                <span className="text-primary">▸</span>
                Built the end-to-end training pipeline in Python: data prep, teacher–student loss configuration, and evaluation.
              </li>
              <li className="flex gap-3">
                <span className="text-primary">▸</span>
                Recognized by HR for dedication, professionalism, and technical contribution.
              </li>
            </ul>
          </div>

          {/* Data Analytics Intern */}
          <div className="card-tactical p-8 md:p-12 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div>
                <p className="font-display text-xs tracking-[0.3em] text-primary uppercase mb-3">
                  Mar 2026 – Apr 2026
                </p>
                <h3 className="font-display text-xl font-bold tracking-tight text-foreground mb-2">
                  Data Analytics Intern
                </h3>
                <p className="text-muted-foreground">
                  IBM Cognos Analytics
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
            <ul className="mt-6 text-muted-foreground leading-relaxed text-sm space-y-3 list-none">
              <li className="flex gap-3">
                <span className="text-primary">▸</span>
                Built multi-source datasets and authored reports aligned with enterprise BI standards.
              </li>
              <li className="flex gap-3">
                <span className="text-primary">▸</span>
                Supported decision-making dashboards to visualize operational KPIs.
              </li>
              <li className="flex gap-3">
                <span className="text-primary">▸</span>
                Collaborated on AI-powered analytics at IBM Cognos Analytics Ltd.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
