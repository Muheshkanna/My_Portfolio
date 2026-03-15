const skillClusters = [
  {
    position: "Prolific",
    skills: ["Python", "Full-Stack Development", "Problem Solving"],
    description: "Core technical arsenal — the creative engine driving solutions forward.",
  },
  {
    position: "Pivotal",
    skills: ["Leadership", "Communication", "Teamwork"],
    description: "On-field command — orchestrating teams and aligning stakeholders.",
  },
  {
    position: "Creative",
    skills: ["Innovation", "Analytical Reasoning", "Writer"],
    description: "Vision and creativity — seeing patterns others miss.",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-4">Field Positions</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tighter text-foreground mb-20">
          Expertise Clusters
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {skillClusters.map((cluster, index) => (
            <div
              key={cluster.position}
              className="group relative card-tactical p-8 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              {/* Tactical marker */}
              <div className="w-3 h-3 rounded-full bg-primary mb-6 animate-pulse-glow" />

              <p className="font-display text-xs tracking-[0.3em] text-primary uppercase mb-2">
                {cluster.position}
              </p>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {cluster.description}
              </p>

              <div className="space-y-3">
                {cluster.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3"
                  >
                    <svg width="6" height="6" viewBox="0 0 6 6" className="text-primary flex-shrink-0">
                      <polygon points="3,0 6,3 3,6 0,3" fill="currentColor" />
                    </svg>
                    <span className="font-display text-sm text-foreground tracking-wide">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
