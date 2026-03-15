import argosImage from "@/assets/argos-project.png";
import forestFireImage from "@/assets/forest-fire-project.png";
import jharkhandTourismImage from "@/assets/jharkhand-tourism.png";
import stockPredictorImage from "@/assets/stock-predictor.png";

const projects = [
  {
    id: "argos",
    label: "TACTICAL SOLUTION 01",
    title: "ARGOS — Federated Clinical Intelligence",
    description:
      "Privacy-preserving data synthesis across distributed nodes. A federated learning system that enables clinical institutions to collaboratively train models without exposing sensitive patient data.",
    tags: ["Federated Learning", "Privacy", "Clinical AI", "Python"],
    image: argosImage,
  },
  {
    id: "forest-fire",
    label: "TACTICAL SOLUTION 02",
    title: "Forest Fire Detection",
    description:
      "Real-time spatial analysis and early-warning deployment. An intelligent monitoring system that leverages satellite imagery and sensor data for rapid fire detection and response coordination.",
    tags: ["Computer Vision", "Real-time", "Environmental", "ML"],
    image: forestFireImage,
  },
  {
    id: "jharkhand",
    label: "TACTICAL SOLUTION 03",
    title: "Jharkhand Tourism Application",
    description:
      "End-to-end tourism platform showcasing the natural beauty and cultural heritage of Jharkhand. Built with full-stack technologies for seamless user experience and content management.",
    tags: ["Full-Stack", "Tourism", "UI/UX", "React"],
    image: jharkhandTourismImage,
  },
  {
    id: "Stock Predictor",
    label: "TACTICAL SOLUTION 04",
    title: "AI-Powered Stock Price Predictor",
    description:
      "AI-powered financial analytics platform with authentication, machine learning predictions, AI insights, and modern dashboards that demonstrates advanced skills in machine learning, fintech analytics.",
    tags: ["Deep Learning", "Computer Vision", "Accessibility", "Python"],
    image: stockPredictorImage,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-4">Tactical Solutions</p>
        <h2
          className="font-display text-3xl md:text-4xl font-bold tracking-tighter text-foreground mb-20"
        >
          Projects Deployed
        </h2>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="card-tactical p-2 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                {project.image && (
                  <div className="overflow-hidden rounded-tactical-inner">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 md:h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                    />
                  </div>
                )}

                {/* Content */}
                <div className={`p-8 md:p-12 flex flex-col justify-center ${!project.image ? 'md:col-span-2' : ''}`}>
                  <p className="font-display text-xs tracking-[0.3em] text-primary mb-4">
                    {project.label}
                  </p>
                  <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight text-foreground mb-4">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-display tracking-wider uppercase bg-secondary text-secondary-foreground rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
