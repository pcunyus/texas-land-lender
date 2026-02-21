import SiteLayout from "@/components/SiteLayout";
import HeroSection from "@/components/home/HeroSection";
import SpeedBar from "@/components/home/SpeedBar";
import LoanProgramCards from "@/components/home/LoanProgramCards";
import ComparisonTable from "@/components/home/ComparisonTable";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaBanner from "@/components/home/CtaBanner";

const Index = () => {
  return (
    <SiteLayout>
      <HeroSection />
      <SpeedBar />
      <LoanProgramCards />
      <ComparisonTable />
      <TestimonialsSection />
      <CtaBanner />
    </SiteLayout>
  );
};

export default Index;
