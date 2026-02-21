import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-ranch.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Texas ranch landscape at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight mb-6">
            Texas Farm & Ranch Lending —{" "}
            <span className="text-gradient-gold">Pre-Approved in 48 Hours</span>
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8 max-w-2xl font-sans leading-relaxed">
            Barndominiums. Hobby Farms. Equestrian Properties. Hunting Ranches.
            We finance what others won't — and close in weeks, not months.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/apply">
              <Button variant="gold" size="lg" className="text-base px-8 py-6">
                Get Pre-Approved Now
              </Button>
            </Link>
            <Link to="/barndominium-financing-texas">
              <Button variant="heroOutline" size="lg" className="text-base px-8 py-6">
                Explore Loan Programs
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 flex flex-wrap gap-x-6 gap-y-2 text-sm text-primary-foreground/60"
        >
          <span>Since 1993</span>
          <span className="hidden sm:inline">•</span>
          <span>NMLS #217672</span>
          <span className="hidden sm:inline">•</span>
          <span>BBB Accredited</span>
          <span className="hidden sm:inline">•</span>
          <span>Equal Housing Lender</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
