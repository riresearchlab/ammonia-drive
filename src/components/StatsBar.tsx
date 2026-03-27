import { motion } from "framer-motion";

const stats = [
  { value: "12.7", unit: "MJ/L", label: "Energy Density" },
  { value: "−33°C", unit: "", label: "Storage Temp" },
  { value: "<50", unit: "ms", label: "Alert Latency" },
  { value: "20%", unit: "", label: "Safety Buffer" },
];

const StatsBar = () => (
  <section className="py-16 bg-accent text-accent-foreground">
    <div className="container">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <p className="text-3xl sm:text-4xl font-extrabold">
              {s.value}
              {s.unit && (
                <span className="text-lg font-medium text-accent-foreground/60 ml-1">
                  {s.unit}
                </span>
              )}
            </p>
            <p className="text-sm text-accent-foreground/60 mt-1">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsBar;
