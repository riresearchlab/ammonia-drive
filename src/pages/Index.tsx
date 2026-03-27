import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import FeaturesSection from "@/components/FeaturesSection";
import ComparisonTable from "@/components/ComparisonTable";
import MapSection from "@/components/MapSection";
import RoadmapSection from "@/components/RoadmapSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <StatsBar />
    <FeaturesSection />
    <ComparisonTable />
    <MapSection />
    <RoadmapSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
