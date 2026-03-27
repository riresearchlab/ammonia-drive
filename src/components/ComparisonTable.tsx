import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

const rows = [
  {
    metric: "Energy Density",
    unit: "MJ/L",
    ammonia: "12.7",
    hydrogen: "8.5",
    diesel: "38.3",
    ammoniaWins: false,
  },
  {
    metric: "Storage Temperature",
    unit: "",
    ammonia: "−33°C or pressurized",
    hydrogen: "−253°C (cryogenic)",
    diesel: "Ambient",
    ammoniaWins: true,
  },
  {
    metric: "Carbon Intensity",
    unit: "",
    ammonia: "Near Zero",
    hydrogen: "Near Zero",
    diesel: "94 gCO₂e/MJ",
    ammoniaWins: true,
  },
  {
    metric: "Infrastructure",
    unit: "",
    ammonia: "Existing (Fertilizer)",
    hydrogen: "Experimental",
    diesel: "Mature",
    ammoniaWins: true,
  },
  {
    metric: "Transport Safety",
    unit: "",
    ammonia: "Established protocols",
    hydrogen: "High explosion risk",
    diesel: "Flammable",
    ammoniaWins: true,
  },
  {
    metric: "Scalability",
    unit: "",
    ammonia: "Global production",
    hydrogen: "Limited capacity",
    diesel: "Peak / declining",
    ammoniaWins: true,
  },
];

const ComparisonTable = () => (
  <section id="comparison" className="py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
          Technical Specs
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
          The Energy Density Gap
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Why green ammonia is the pragmatic bridge fuel for heavy-duty
          logistics—not hydrogen, not diesel.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="overflow-x-auto rounded-2xl shadow-card bg-background">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-5 font-semibold text-muted-foreground">
                  Metric
                </th>
                <th className="p-5 font-bold text-primary text-center bg-safety-orange-light rounded-tl-none">
                  Green NH₃
                </th>
                <th className="p-5 font-semibold text-muted-foreground text-center">
                  Liquid H₂
                </th>
                <th className="p-5 font-semibold text-muted-foreground text-center">
                  Diesel (ULSD)
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={r.metric}
                  className={`border-b border-border/50 ${
                    i % 2 === 0 ? "bg-background" : "bg-muted/30"
                  }`}
                >
                  <td className="p-5 font-medium text-foreground">
                    {r.metric}
                    {r.unit && (
                      <span className="text-muted-foreground ml-1 text-xs">
                        ({r.unit})
                      </span>
                    )}
                  </td>
                  <td className="p-5 text-center font-semibold text-foreground bg-safety-orange-light/50">
                    {r.ammonia}
                  </td>
                  <td className="p-5 text-center text-muted-foreground">
                    {r.hydrogen}
                  </td>
                  <td className="p-5 text-center text-muted-foreground">
                    {r.diesel}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ComparisonTable;
