import { motion } from "framer-motion";
import { Link2, Brain, ShieldAlert, Calculator } from "lucide-react";

const features = [
  {
    icon: Link2,
    title: "Fuel Intensity Tracker",
    subtitle: "Scope 3 Verification",
    description:
      "Every gallon is UUID-tracked from the solar farm to the engine. Blockchain-backed custody chain prevents greenwashing and provides audit-ready carbon credit reports.",
    highlights: ["Batch UUID tracking", "Hyperledger Fabric ledger", "Carbon credit ready"],
  },
  {
    icon: Brain,
    title: "AI Route & Range Optimizer",
    subtitle: "Eliminating Range Anxiety",
    description:
      "Dynamic range calculation factoring payload, elevation, and temperature. Automatically plots routes through certified NH₃ hubs with a 20% safety buffer.",
    highlights: ["Payload-aware routing", "Topographic analysis", "20% safety buffer"],
  },
  {
    icon: ShieldAlert,
    title: "Safety & Telemetry",
    subtitle: "Real-Time IoT Monitoring",
    description:
      "Sensor fusion via CAN bus monitors pressure, temperature, and PPM levels. Automatic geofencing and emergency response with wind-direction evacuation.",
    highlights: ["CAN bus integration", "Auto-geofencing", "MSDS alert dispatch"],
  },
  {
    icon: Calculator,
    title: "Enterprise ROI Engine",
    subtitle: "TCO Comparison Tool",
    description:
      "Public-facing calculator comparing ammonia vs diesel: fuel costs, maintenance intervals, carbon tax savings, and total cost of ownership.",
    highlights: ["TCO analysis", "Maintenance savings", "Carbon tax modeling"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturesSection = () => (
  <section id="features" className="py-24 bg-ghost">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
          Core Platform
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
          Four Engines of the Transition
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          From fuel provenance to emergency response, AmmoniaDrive covers every
          link in the green ammonia logistics chain.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-6"
      >
        {features.map((f) => (
          <motion.div
            key={f.title}
            variants={item}
            className="group bg-background rounded-2xl p-8 shadow-card hover:shadow-orange transition-shadow duration-300 border border-transparent hover:border-primary/20"
          >
            <div className="w-12 h-12 rounded-xl bg-safety-orange-light flex items-center justify-center mb-5">
              <f.icon className="w-6 h-6 text-primary" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">
              {f.subtitle}
            </p>
            <h3 className="text-xl font-bold text-foreground mb-3">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              {f.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {f.highlights.map((h) => (
                <span
                  key={h}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground"
                >
                  {h}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default FeaturesSection;
