import { motion } from "framer-motion";
import { Check, X, AlertTriangle } from "lucide-react";

const rows = [
  {
    feature: "Pre-Approval Speed",
    fscap: "48 hours",
    farmCredit: "2-4 weeks",
    bank: "1-3 weeks",
  },
  {
    feature: "Time to Close",
    fscap: "2-3 weeks",
    farmCredit: "4-8+ weeks",
    bank: "4-6 weeks",
  },
  {
    feature: "Barndominium Expertise",
    fscap: { value: "Dedicated program", status: "yes" },
    farmCredit: { value: "Blog articles only", status: "no" },
    bank: { value: "Usually declined", status: "no" },
  },
  {
    feature: "Hobby Farm / Equestrian",
    fscap: { value: "Dedicated programs", status: "yes" },
    farmCredit: { value: "No specific product", status: "no" },
    bank: { value: "Usually declined", status: "no" },
  },
  {
    feature: "Minimum Acreage",
    fscap: "Flexible",
    farmCredit: "Often 10+ acres",
    bank: "Varies",
  },
  {
    feature: "Decision Making",
    fscap: { value: "Direct to decision maker", status: "yes" },
    farmCredit: { value: "Loan committee review", status: "warn" },
    bank: { value: "Branch approval chain", status: "warn" },
  },
  {
    feature: "Broker Referral Fees",
    fscap: { value: "Yes (RESPA exempt 25+ ac)", status: "yes" },
    farmCredit: { value: "Prohibited by law", status: "no" },
    bank: { value: "Prohibited by law", status: "no" },
  },
  {
    feature: "Rate Transparency",
    fscap: { value: "Published ranges", status: "yes" },
    farmCredit: { value: "Hidden", status: "no" },
    bank: { value: "Hidden", status: "no" },
  },
  {
    feature: "Service Area",
    fscap: "TX, NM, OK",
    farmCredit: "TX only (most)",
    bank: "Local only",
  },
];

const renderCell = (value: string | { value: string; status: string }) => {
  if (typeof value === "string") return <span className="text-sm">{value}</span>;

  return (
    <div className="flex items-center gap-1.5">
      {value.status === "yes" && <Check className="h-4 w-4 text-primary shrink-0" />}
      {value.status === "no" && <X className="h-4 w-4 text-destructive shrink-0" />}
      {value.status === "warn" && <AlertTriangle className="h-4 w-4 text-secondary shrink-0" />}
      <span className="text-sm">{value.value}</span>
    </div>
  );
};

const ComparisonTable = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
            Why Texas Land Buyers & Brokers Choose FSCAP
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Speed, expertise, and transparency — see how we stack up.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="overflow-x-auto rounded-xl border border-border shadow-elevated"
        >
          <table className="w-full min-w-[640px]">
            <thead>
              <tr className="bg-primary">
                <th className="text-left py-4 px-5 text-sm font-semibold text-primary-foreground font-sans">Feature</th>
                <th className="text-left py-4 px-5 text-sm font-semibold text-gold font-sans">FSCAP</th>
                <th className="text-left py-4 px-5 text-sm font-semibold text-primary-foreground/70 font-sans">Farm Credit</th>
                <th className="text-left py-4 px-5 text-sm font-semibold text-primary-foreground/70 font-sans">Traditional Banks</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? "bg-card" : "bg-accent/50"}>
                  <td className="py-3.5 px-5 text-sm font-medium text-foreground">{row.feature}</td>
                  <td className="py-3.5 px-5 font-medium text-primary">{renderCell(row.fscap)}</td>
                  <td className="py-3.5 px-5 text-muted-foreground">{renderCell(row.farmCredit)}</td>
                  <td className="py-3.5 px-5 text-muted-foreground">{renderCell(row.bank)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonTable;
