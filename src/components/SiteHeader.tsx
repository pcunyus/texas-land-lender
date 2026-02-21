import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const loanPrograms = [
  { name: "Farm & Ranch Loans", path: "/farm-ranch-loans-texas" },
  { name: "Barndominium Financing", path: "/barndominium-financing-texas" },
  { name: "Hobby Farm Loans", path: "/hobby-farm-financing-texas" },
  { name: "Equestrian Property Loans", path: "/equestrian-property-loans-texas" },
  { name: "Hunting & Recreational Land", path: "/hunting-land-loans-texas" },
  { name: "Country Home Loans", path: "/country-home-loans-texas" },
  { name: "Raw / Undeveloped Land", path: "/raw-land-loans-texas" },
  { name: "Construction Loans", path: "/construction-loans-texas-rural" },
  { name: "Refinance & Cash-Out", path: "/refinance-rural-property-texas" },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Why FSCAP", path: "/why-fscap" },
  { name: "Resources", path: "/resources" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loanMenuOpen, setLoanMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setLoanMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-elevated"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className={`font-serif text-xl lg:text-2xl font-bold tracking-tight transition-colors ${scrolled ? "text-primary" : "text-primary-foreground"}`}>
            FSCAP
          </span>
          <span className={`hidden sm:block text-xs font-sans transition-colors ${scrolled ? "text-muted-foreground" : "text-primary-foreground/70"}`}>
            First Source Capital
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link
            to="/"
            className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
              scrolled ? "text-foreground hover:text-primary" : "text-primary-foreground/90 hover:text-primary-foreground"
            }`}
          >
            Home
          </Link>

          {/* Loan Programs Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setLoanMenuOpen(true)}
            onMouseLeave={() => setLoanMenuOpen(false)}
          >
            <button
              className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                scrolled ? "text-foreground hover:text-primary" : "text-primary-foreground/90 hover:text-primary-foreground"
              }`}
            >
              Loan Programs <ChevronDown className="h-3 w-3" />
            </button>
            <AnimatePresence>
              {loanMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-1 w-72 rounded-lg bg-card border border-border shadow-elevated p-2"
                >
                  {loanPrograms.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-3 py-2.5 text-sm text-card-foreground rounded-md hover:bg-accent transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                scrolled ? "text-foreground hover:text-primary" : "text-primary-foreground/90 hover:text-primary-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:8884841256" className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground/90"}`}>
            <Phone className="h-4 w-4" />
            888-484-1256
          </a>
          <Link to="/apply">
            <Button variant="gold" size="sm">Apply Now</Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-card border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 space-y-1">
              <Link to="/" className="block px-3 py-2.5 text-sm font-medium text-card-foreground rounded-md hover:bg-accent">
                Home
              </Link>
              <p className="px-3 pt-3 pb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Loan Programs
              </p>
              {loanPrograms.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-3 py-2 text-sm text-card-foreground rounded-md hover:bg-accent pl-6"
                >
                  {item.name}
                </Link>
              ))}
              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block px-3 py-2.5 text-sm font-medium text-card-foreground rounded-md hover:bg-accent"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3 space-y-2">
                <a href="tel:8884841256" className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground">
                  <Phone className="h-4 w-4" /> 888-484-1256
                </a>
                <Link to="/apply" className="block">
                  <Button variant="gold" className="w-full">Apply Now</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default SiteHeader;
