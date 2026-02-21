import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BarndominiumPage from "./pages/BarndominiumPage";
import LoanProgramPage from "./pages/LoanProgramPage";
import { WhyFscapPage, ResourcesPage, AboutPage, ContactPage, ApplyPage } from "./pages/PlaceholderPages";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/barndominium-financing-texas" element={<BarndominiumPage />} />
          <Route path="/farm-ranch-loans-texas" element={<LoanProgramPage />} />
          <Route path="/hobby-farm-financing-texas" element={<LoanProgramPage />} />
          <Route path="/equestrian-property-loans-texas" element={<LoanProgramPage />} />
          <Route path="/hunting-land-loans-texas" element={<LoanProgramPage />} />
          <Route path="/country-home-loans-texas" element={<LoanProgramPage />} />
          <Route path="/raw-land-loans-texas" element={<LoanProgramPage />} />
          <Route path="/construction-loans-texas-rural" element={<LoanProgramPage />} />
          <Route path="/refinance-rural-property-texas" element={<LoanProgramPage />} />
          <Route path="/dairy-livestock-facility-loans-texas" element={<LoanProgramPage />} />
          <Route path="/why-fscap" element={<WhyFscapPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
