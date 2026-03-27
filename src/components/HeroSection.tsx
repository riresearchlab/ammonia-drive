import { motion } from "framer-motion";
import { ArrowRight, Shield, Leaf, Route } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-truck.jpg";

const HeroSection = () => {
  return (
    <section className="relative pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="relative container py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-safety-orange-light text-primary text-sm font-semibold mb-6">
              <Leaf className="w-4 h-4" />
              Green Ammonia Logistics
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
              Powering the Long Haul with{" "}
              <span className="text-gradient-orange">Green Chemistry</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
              The enterprise platform that transitions heavy-duty Middle Mile
              logistics from diesel to green ammonia—safely, verifiably, and
              profitably.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Button size="lg" className="shadow-orange gap-2">
                Request a Demo <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                View Platform
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              {[
                { icon: Shield, text: "Zero-Leak Standard" },
                { icon: Leaf, text: "Scope 3 Verified" },
                { icon: Route, text: "AI Route Optimization" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  <item.icon className="w-4 h-4 text-primary" />
                  {item.text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={heroImg}
                alt="Green ammonia refueling station with Class 8 truck"
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
              {/* Floating stat */}
              <motion.div
                className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-md rounded-xl p-4 shadow-card"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-xs text-muted-foreground mb-1">Fuel Intensity</p>
                <p className="text-2xl font-bold text-foreground">
                  12<span className="text-sm font-medium text-muted-foreground ml-1">gCO₂/MJ</span>
                </p>
              </motion.div>
              <motion.div
                className="absolute top-4 right-4 bg-success-green text-primary-foreground rounded-lg px-3 py-1.5 text-sm font-semibold"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                ✓ Near-Zero Carbon
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
