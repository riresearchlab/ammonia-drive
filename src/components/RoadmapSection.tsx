import { motion } from "framer-motion";
import { Beaker, Leaf, Globe } from "lucide-react";

const phases = [
  {
    icon: Beaker,
    phase: "Phase 1",
    time: "Q1–Q2 2026",
    title: "The Pilot",
    description:
      "10-truck pilot fleet with gray ammonia to stress-test sensor durability, CAN bus integration, and the Safety Monitoring Interface.",
    status: "In Progress",
  },
  {
    icon: Leaf,
    phase: "Phase 2",
    time: "Q3–Q4 2026",
    title: "The Green Switch",
    description:
      "Blockchain ledger integration with Gulf Coast green ammonia producers. Route Optimizer beta launched with select logistics partners.",
    status: "Upcoming",
  },
  {
    icon: Globe,
    phase: "Phase 3",
    time: "2027+",
    title: "The Global Network",
    description:
      "Expansion to maritime shipping (AmmoniaDrive Sea) for trans-oceanic freight carbon intensity tracking.",
    status: "Planned",
  },
];

const RoadmapSection = () => (
  <section id="roadmap" className="py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
          Roadmap
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
          From Pilot to Global Scale
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

        <div className="space-y-8">
          {phases.map((p, i) => (
            <motion.div
              key={p.phase}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative flex gap-6 md:pl-16"
            >
              {/* Dot */}
              <div className="hidden md:flex absolute left-0 w-12 h-12 rounded-full bg-safety-orange-light items-center justify-center z-10">
                <p.icon className="w-5 h-5 text-primary" />
              </div>

              <div className="bg-background rounded-2xl p-6 shadow-card border border-border/50 flex-1">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    {p.phase}
                  </span>
                  <span className="text-xs text-muted-foreground">{p.time}</span>
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      p.status === "In Progress"
                        ? "bg-safety-orange-light text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {p.status}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default RoadmapSection;
