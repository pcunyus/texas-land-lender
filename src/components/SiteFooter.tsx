import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const loanLinks = [
  { name: "Farm & Ranch Loans", path: "/farm-ranch-loans-texas" },
  { name: "Barndominium Financing", path: "/barndominium-financing-texas" },
  { name: "Hobby Farm Loans", path: "/hobby-farm-financing-texas" },
  { name: "Equestrian Property Loans", path: "/equestrian-property-loans-texas" },
  { name: "Hunting & Recreational Land", path: "/hunting-land-loans-texas" },
  { name: "Country Home Loans", path: "/country-home-loans-texas" },
  { name: "Raw Land Loans", path: "/raw-land-loans-texas" },
  { name: "Construction Loans", path: "/construction-loans-texas-rural" },
  { name: "Refinance & Cash-Out", path: "/refinance-rural-property-texas" },
];

const companyLinks = [
  { name: "About FSCAP", path: "/about" },
  { name: "Why Choose FSCAP", path: "/why-fscap" },
  { name: "Testimonials", path: "/about#testimonials" },
  { name: "Service Areas", path: "/service-areas" },
  { name: "Broker Referral Program", path: "/broker-referral-program" },
  { name: "Careers", path: "/loan-officer-opportunities" },
];

const resourceLinks = [
  { name: "Blog & Articles", path: "/resources" },
  { name: "Loan Calculator", path: "/resources#calculator" },
  { name: "FAQ Center", path: "/resources#faq" },
  { name: "Texas Land Buying Guide", path: "/resources#guide" },
  { name: "Pre-Qualification Checklist", path: "/resources#checklist" },
];

const SiteFooter = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold">FSCAP</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              First Source Capital Mortgage, Inc. Texas rural land financing since 1993. Faster, smarter, done right.
            </p>
            <div className="space-y-2.5 text-sm">
              <a href="tel:8884841256" className="flex items-center gap-2 text-primary-foreground/80 hover:text-gold transition-colors">
                <Phone className="h-4 w-4 shrink-0" /> 888-484-1256
              </a>
              <a href="mailto:dan@fscap.com" className="flex items-center gap-2 text-primary-foreground/80 hover:text-gold transition-colors">
                <Mail className="h-4 w-4 shrink-0" /> dan@fscap.com
              </a>
              <div className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>4602 92nd St<br />Lubbock, TX 79424</span>
              </div>
            </div>
          </div>

          {/* Loan Programs */}
          <div>
            <h4 className="font-sans font-semibold text-sm uppercase tracking-wider mb-4 text-gold">
              Loan Programs
            </h4>
            <ul className="space-y-2">
              {loanLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans font-semibold text-sm uppercase tracking-wider mb-4 text-gold">
              Company
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-sans font-semibold text-sm uppercase tracking-wider mb-4 text-gold">
              Resources
            </h4>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-primary-foreground/50">
            <span>NMLS #217672</span>
            <span>•</span>
            <span>Equal Housing Lender</span>
            <span>•</span>
            <span>BBB Accredited</span>
            <span>•</span>
            <span>TX Alliance of Land Brokers Member</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/40">
            <p>© {new Date().getFullYear()} First Source Capital Mortgage, Inc. All rights reserved.</p>
            <div className="flex gap-4">
              <Link to="/privacy" className="hover:text-primary-foreground/70 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary-foreground/70 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
