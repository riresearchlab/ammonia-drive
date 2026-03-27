import { motion } from "framer-motion";
import { MapPin, Fuel, Thermometer } from "lucide-react";
import mapImg from "@/assets/map-routes.jpg";

const MapSection = () => (
  <section id="map" className="py-24 bg-ghost">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
          Route Intelligence
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
          Houston → Chicago, Zero Emissions
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          AI-optimized routes through certified NH₃ refueling hubs with
          real-time fuel intensity tracking.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-5xl mx-auto"
      >
        <div className="rounded-2xl overflow-hidden shadow-card border border-border relative">
          <img
            src={mapImg}
            alt="Route map from Houston to Chicago with NH3 refueling hubs"
            width={1280}
            height={720}
            loading="lazy"
            className="w-full h-auto"
          />

          {/* Floating tooltips */}
          <motion.div
            className="absolute top-[20%] left-[15%] bg-background shadow-card rounded-xl p-3 flex items-center gap-3"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="w-8 h-8 rounded-lg bg-safety-orange-light flex items-center justify-center">
              <MapPin className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-xs font-bold text-foreground">Houston Hub</p>
              <p className="text-[10px] text-muted-foreground">Departure • Full Tank</p>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-[35%] right-[20%] bg-background shadow-card rounded-xl p-3 flex items-center gap-3"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
          >
            <div className="w-8 h-8 rounded-lg bg-success-green-light flex items-center justify-center">
              <Fuel className="w-4 h-4 text-success-green" />
            </div>
            <div>
              <p className="text-xs font-bold text-foreground">12 gCO₂/MJ</p>
              <p className="text-[10px] text-muted-foreground">Fuel Intensity • Verified</p>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-[15%] left-[40%] bg-background shadow-card rounded-xl p-3 flex items-center gap-3"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          >
            <div className="w-8 h-8 rounded-lg bg-safety-orange-light flex items-center justify-center">
              <Thermometer className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-xs font-bold text-foreground">185 PSI • −33°C</p>
              <p className="text-[10px] text-muted-foreground">Tank Vitals • Nominal</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default MapSection;
