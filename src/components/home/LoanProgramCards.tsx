import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Wheat, Home, Trees, Crosshair, Tractor,
  Building, HardHat, RefreshCw, Fence
} from "lucide-react";

const programs = [
  {
    icon: Wheat,
    name: "Farm & Ranch Loans",
    description: "30-year fixed rates designed for Texas producers and working agricultural operations.",
    path: "/farm-ranch-loans-texas",
  },
  {
    icon: Home,
    name: "Barndominium Financing",
    description: "Build your dream barndo with a lender who actually understands metal-frame construction.",
    path: "/barndominium-financing-texas",
    featured: true,
  },
  {
    icon: Fence,
    name: "Hobby Farm Loans",
    description: "5-20 acres with a barn, a garden, and a dream? We finance the lifestyle properties others call 'too complicated.'",
    path: "/hobby-farm-financing-texas",
  },
  {
    icon: Tractor,
    name: "Equestrian Property Loans",
    description: "Arenas, stables, paddocks, and pasture. We finance horse properties because we understand them.",
    path: "/equestrian-property-loans-texas",
  },
  {
    icon: Crosshair,
    name: "Hunting & Recreational Land",
    description: "From 20-acre deer leases to 500-acre hunting ranches. 30-year fixed rates, no ag use required.",
    path: "/hunting-land-loans-texas",
  },
  {
    icon: Building,
    name: "Country Home Loans",
    description: "Your home on acreage. Long-term fixed rates for primary residences and second homes with land.",
    path: "/country-home-loans-texas",
  },
  {
    icon: Trees,
    name: "Raw / Undeveloped Land",
    description: "Buying land now, building later? We finance vacant tracts with flexible terms.",
    path: "/raw-land-loans-texas",
  },
  {
    icon: HardHat,
    name: "Construction Loans",
    description: "Build on your land with one-close construction-to-permanent financing.",
    path: "/construction-loans-texas-rural",
  },
];

const LoanProgramCards = () => {
  return (
    <section className="bg-section-cream py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
            What Are You Looking to Finance?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We specialize in the properties that other lenders turn away. Every loan program is built for Texas rural land.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {programs.map((program, i) => (
            <motion.div
              key={program.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <Link
                to={program.path}
                className={`group block h-full rounded-xl border p-6 transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 ${
                  program.featured
                    ? "border-gold bg-card shadow-gold"
                    : "border-border bg-card hover:border-gold/40"
                }`}
              >
                <div className={`w-11 h-11 rounded-lg flex items-center justify-center mb-4 ${
                  program.featured ? "bg-gold/20" : "bg-accent"
                }`}>
                  <program.icon className={`h-5 w-5 ${program.featured ? "text-gold" : "text-primary"}`} />
                </div>
                <h3 className="font-serif text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                  {program.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {program.description}
                </p>
                {program.featured && (
                  <span className="inline-block mt-3 text-xs font-sans font-bold uppercase tracking-wider text-gold">
                    ★ Flagship Program
                  </span>
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoanProgramCards;
