import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => (
  <section className="py-24 bg-ghost">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-3xl bg-accent text-accent-foreground p-12 md:p-20 text-center"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-6">
            <Zap className="w-7 h-7 text-primary-foreground" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Ready to Drive Green?
          </h2>
          <p className="text-accent-foreground/70 max-w-xl mx-auto mb-8 text-lg">
            Join the pilot fleet and be among the first to eliminate Scope 3
            emissions from your logistics operations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="shadow-orange gap-2">
              Request a Demo <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent-foreground/20 text-accent-foreground hover:bg-accent-foreground/10"
            >
              Download Whitepaper
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
