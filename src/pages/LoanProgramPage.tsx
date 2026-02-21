import SiteLayout from "@/components/SiteLayout";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const loanPages: Record<string, { title: string; subtitle: string; description: string }> = {
  "/farm-ranch-loans-texas": {
    title: "Texas Farm & Ranch Loans",
    subtitle: "30-Year Fixed Rates for Working Operations",
    description: "Finance your working agricultural operation with long-term fixed rates designed for Texas producers. From small family farms to large-scale ranches, FSCAP has the expertise and speed to get you funded.",
  },
  "/hobby-farm-financing-texas": {
    title: "Texas Hobby Farm Financing",
    subtitle: "5 to 50 Acres of Your Own",
    description: "5-20 acres with a barn, a garden, and a dream? We finance the lifestyle properties that other lenders call 'too complicated.' Hobby farms are our specialty.",
  },
  "/equestrian-property-loans-texas": {
    title: "Texas Equestrian Property Loans",
    subtitle: "Arenas, Stables & Horse Land Loans",
    description: "Finance arenas, stables, paddocks, training facilities, and residential-equestrian combo properties. Texas is a $12 billion equestrian economy — and we know how to finance it.",
  },
  "/hunting-land-loans-texas": {
    title: "Texas Hunting & Recreational Land Loans",
    subtitle: "Finance Your Getaway",
    description: "From 20-acre deer leases to 500-acre hunting ranches. 30-year fixed rates with no agricultural use required. We finance recreational land because we understand it.",
  },
  "/country-home-loans-texas": {
    title: "Texas Country Home Loans",
    subtitle: "Your Home on Acreage",
    description: "Long-term fixed rates for primary residences and second homes with land. Your country home deserves a lender who understands rural properties.",
  },
  "/raw-land-loans-texas": {
    title: "Texas Raw Land Loans",
    subtitle: "Finance Vacant Acreage",
    description: "Buying land now, building later? We finance vacant tracts with flexible terms and competitive rates. No ag use required.",
  },
  "/dairy-livestock-facility-loans-texas": {
    title: "Texas Dairy & Livestock Facility Financing",
    subtitle: "Purpose-Built Lending for Agricultural Facilities",
    description: "Specialized financing for dairy operations, livestock facilities, and agricultural infrastructure across Texas.",
  },
  "/construction-loans-texas-rural": {
    title: "Texas Rural Construction Loans",
    subtitle: "Build on Your Land",
    description: "One-close construction-to-permanent financing. Build on your land with a single loan, a single closing, and a lender who moves fast.",
  },
  "/refinance-rural-property-texas": {
    title: "Refinance Your Texas Rural Property",
    subtitle: "Tap Your Land Equity",
    description: "Lower your rate, shorten your term, or access your equity. Refinancing rural property requires a lender who understands rural appraisals.",
  },
};

const LoanProgramPage = () => {
  const location = useLocation();
  const page = loanPages[location.pathname];

  if (!page) {
    return (
      <SiteLayout>
        <div className="pt-32 pb-20 text-center container mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold mb-4">Page Coming Soon</h1>
          <p className="text-muted-foreground mb-8">This loan program page is under development.</p>
          <Link to="/"><Button variant="gold">Back to Home</Button></Link>
        </div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="bg-primary pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-primary-foreground mb-4">
            {page.title}
          </h1>
          <p className="text-xl text-gold font-serif mb-6">{page.subtitle}</p>
          <p className="text-primary-foreground/70 text-lg mb-8 max-w-2xl mx-auto">{page.description}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/apply">
              <Button variant="gold" size="lg" className="text-base px-8 py-6">Get Pre-Approved in 48 Hours</Button>
            </Link>
            <a href="tel:8884841256">
              <Button variant="heroOutline" size="lg" className="text-base px-8 py-6">
                <Phone className="h-4 w-4 mr-2" /> Call 888-484-1256
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Content Placeholder */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl font-serif font-bold mb-4">Full Page Coming Soon</h2>
          <p className="text-muted-foreground mb-8">
            This page will feature comprehensive content about our {page.title.toLowerCase()} program, including eligibility details, comparison tables, FAQs, and client testimonials.
          </p>
          <Link to="/">
            <Button variant="outline">← Back to Home</Button>
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
};

export default LoanProgramPage;
