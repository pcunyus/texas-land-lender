import SiteLayout from "@/components/SiteLayout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, Check, X, AlertTriangle, ClipboardList, Clock, Search, Home as HomeIcon, FileCheck } from "lucide-react";
import barndoHero from "@/assets/barndominium-hero.jpg";

const steps = [
  { icon: ClipboardList, title: "Quick Application", desc: "10-minute online form or phone call." },
  { icon: Clock, title: "48-Hour Pre-Approval", desc: "Know your buying power fast." },
  { icon: Search, title: "Property Review", desc: "We understand barndo construction and rural appraisals." },
  { icon: FileCheck, title: "Closing", desc: "2-3 weeks from complete file, not 2-3 months." },
  { icon: HomeIcon, title: "Move In", desc: "Start living the Texas barndo dream." },
];

const comparisonRows = [
  { feature: "Dedicated barndo program", fscap: "yes", fc: "no", bank: "no", cu: "no" },
  { feature: "Construction-to-perm", fscap: "yes", fc: "warn", bank: "warn", cu: "no" },
  { feature: "Time to close", fscap: "2-3 weeks", fc: "4-8 weeks", bank: "4-6 weeks", cu: "3-5 weeks" },
  { feature: "Rural appraisal expertise", fscap: "yes", fc: "yes", bank: "no", cu: "no" },
  { feature: "Acreage with barndo", fscap: "Flexible", fc: "10+ typical", bank: "Max 10", cu: "Max 5-10" },
  { feature: "Pre-approval speed", fscap: "48 hours", fc: "2-4 weeks", bank: "1-2 weeks", cu: "1-2 weeks" },
];

const faqs = [
  { q: "Can I get a loan for a barndominium in Texas?", a: "Yes. FSCAP has a dedicated barndominium financing program with 30-year fixed rates. We've been financing rural Texas properties since 1993 and understand the unique aspects of barndo construction." },
  { q: "What credit score do I need for a barndominium loan?", a: "Credit requirements vary by program, but we work with a range of credit profiles. Contact us for a quick pre-qualification that won't affect your credit score." },
  { q: "How much down payment is required for a barndominium?", a: "Down payment requirements depend on the loan amount, property type, and your financial profile. We offer competitive down payment options for qualified borrowers." },
  { q: "Can I finance land and barndominium construction together?", a: "Yes. Our one-close construction-to-permanent loan lets you finance the land purchase and barndo construction in a single loan with one closing, saving you time and closing costs." },
  { q: "How long does it take to close a barndominium loan?", a: "FSCAP typically closes barndominium loans in 2-3 weeks from a complete file. Compare that to 4-8+ weeks with Farm Credit lenders." },
  { q: "What's the difference between a barndominium loan and a traditional mortgage?", a: "Barndominiums require lenders with experience in metal-frame construction, rural appraisals, and non-traditional property types. Many traditional lenders decline barndos because they lack this expertise. FSCAP has a dedicated program." },
  { q: "Can I refinance my existing barndominium?", a: "Absolutely. We offer refinance and cash-out options for existing barndominium owners looking to lower their rate, shorten their term, or access their equity." },
  { q: "Does FSCAP finance barndominiums in New Mexico and Oklahoma?", a: "Yes. FSCAP serves Texas, New Mexico, and Oklahoma for barndominium financing and other rural property loans." },
];

const StatusIcon = ({ status }: { status: string }) => {
  if (status === "yes") return <Check className="h-4 w-4 text-primary" />;
  if (status === "no") return <X className="h-4 w-4 text-destructive" />;
  if (status === "warn") return <AlertTriangle className="h-4 w-4 text-secondary" />;
  return <span className="text-sm text-muted-foreground">{status}</span>;
};

const CellContent = ({ value }: { value: string }) => {
  if (["yes", "no", "warn"].includes(value)) return <StatusIcon status={value} />;
  return <span className="text-sm">{value}</span>;
};

const BarndominiumPage = () => {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img src={barndoHero} alt="Texas barndominium at sunset" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>
        <div className="relative container mx-auto px-4 py-32">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight mb-6">
              Texas Barndominium Financing —{" "}
              <span className="text-gradient-gold">The Lender Who Actually Knows Barndos</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl font-sans">
              We've been financing rural Texas properties since 1993. Barndominiums aren't new to us — and we don't treat them like they're weird.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/apply">
                <Button variant="gold" size="lg" className="text-base px-8 py-6">Get Barndominium Pre-Approval</Button>
              </Link>
              <a href="tel:8884841256">
                <Button variant="heroOutline" size="lg" className="text-base px-8 py-6">
                  <Phone className="h-4 w-4 mr-2" /> Call 888-484-1256
                </Button>
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-primary-foreground/60">
              <span>Since 1993</span><span className="hidden sm:inline">•</span>
              <span>30-Year Fixed Rates</span><span className="hidden sm:inline">•</span>
              <span>No Loan Committee Delays</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-serif font-bold mb-6">Why Barndominium Financing Is Different</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4 font-sans">
              <p>Barndominiums are booming across Texas — and for good reason. They're cost-effective, durable, customizable, and perfectly suited for the Texas lifestyle. But most lenders don't understand them.</p>
              <p>Traditional banks see a metal building and say no. Farm Credit may offer a blog post about barndos, but no dedicated program. That's where FSCAP is different.</p>
              <p>As a portfolio lender specializing in rural Texas properties since 1993, we have the expertise in rural appraisals, metal-frame construction, and land-based lending that barndominium buyers need. We don't just finance barndos — we understand them.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Finance */}
      <section className="bg-section-cream py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-serif font-bold mb-8">How FSCAP Finances Barndominiums</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Construction-to-permanent loans (one-close)",
                "Purchase of existing barndominiums",
                "Land + barndominium packages",
                "Refinance for existing barndo owners",
                "30-year fixed rates available",
                "Competitive LTV ratios",
                "Flexible down payment options",
                "Slab-on-grade & pier-and-beam eligible",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 bg-card rounded-lg border border-border p-4">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-card-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">Barndominium Financing Comparison</h2>
          <div className="overflow-x-auto rounded-xl border border-border shadow-elevated">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-primary">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-primary-foreground font-sans">Feature</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gold font-sans">FSCAP</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-primary-foreground/70 font-sans">Farm Credit</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-primary-foreground/70 font-sans">Traditional Bank</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-primary-foreground/70 font-sans">Credit Union</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-card" : "bg-accent/50"}>
                    <td className="py-3 px-4 text-sm font-medium">{row.feature}</td>
                    <td className="py-3 px-4 font-medium text-primary"><CellContent value={row.fscap} /></td>
                    <td className="py-3 px-4 text-muted-foreground"><CellContent value={row.fc} /></td>
                    <td className="py-3 px-4 text-muted-foreground"><CellContent value={row.bank} /></td>
                    <td className="py-3 px-4 text-muted-foreground"><CellContent value={row.cu} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-section-cream py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-serif font-bold mb-10 text-center">Your Path to a Barndominium</h2>
          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-5"
              >
                <div className="shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg font-sans">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-serif font-bold mb-10 text-center">Barndominium Financing FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-card rounded-xl border border-border p-5">
                <summary className="font-sans font-semibold text-card-foreground cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-muted-foreground group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary-foreground mb-4">
            Your Barndo Dream Shouldn't Wait on a Slow Lender
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
            Get pre-approved in 48 hours. Close in weeks, not months.
          </p>
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

      {/* Related Links */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h3 className="font-serif text-xl font-bold mb-4">Related Resources</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link to="/construction-loans-texas-rural" className="block p-4 rounded-lg border border-border hover:border-gold/40 transition-colors">
              <span className="text-sm font-medium text-foreground">Construction Loans for Texas Properties →</span>
            </Link>
            <Link to="/country-home-loans-texas" className="block p-4 rounded-lg border border-border hover:border-gold/40 transition-colors">
              <span className="text-sm font-medium text-foreground">Country Home Loans →</span>
            </Link>
            <Link to="/refinance-rural-property-texas" className="block p-4 rounded-lg border border-border hover:border-gold/40 transition-colors">
              <span className="text-sm font-medium text-foreground">Refinance Your Rural Property →</span>
            </Link>
            <Link to="/resources" className="block p-4 rounded-lg border border-border hover:border-gold/40 transition-colors">
              <span className="text-sm font-medium text-foreground">Texas Land Buying Guide →</span>
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default BarndominiumPage;
