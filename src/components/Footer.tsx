import { Zap } from "lucide-react";

const Footer = () => (
  <footer className="py-12 border-t border-border bg-background">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Zap className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-bold text-foreground">
            Ammonia<span className="text-primary">Drive</span>
          </span>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Platform</a>
          <a href="#comparison" className="hover:text-foreground transition-colors">Technology</a>
          <a href="#roadmap" className="hover:text-foreground transition-colors">Roadmap</a>
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">ISO 23223</a>
        </div>
        <p className="text-xs text-muted-foreground">
          © 2026 AmmoniaDrive. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
