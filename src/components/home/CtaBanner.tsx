import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const CtaBanner = () => {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-8">
            Pre-approval takes 10 minutes. Close in weeks, not months.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/apply">
              <Button variant="gold" size="lg" className="text-base px-8 py-6">
                Apply Now
              </Button>
            </Link>
            <a href="tel:8884841256">
              <Button variant="heroOutline" size="lg" className="text-base px-8 py-6">
                <Phone className="h-4 w-4 mr-2" /> Call 888-484-1256
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="heroOutline" size="lg" className="text-base px-8 py-6">
                <Calendar className="h-4 w-4 mr-2" /> Schedule Consultation
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBanner;
