import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "FSCAP closed our barndominium loan in 18 days when two other lenders told us it would take 60+ days. They understand rural properties like no one else.",
    name: "Mike & Sarah T.",
    location: "Williamson County, TX",
    type: "Barndominium Financing",
    rating: 5,
  },
  {
    quote: "As a land broker, I refer all my clients to FSCAP. The speed is unmatched, the communication is outstanding, and the RESPA-exempt referral program is a game-changer.",
    name: "James R.",
    location: "Central Texas",
    type: "Broker Partner",
    rating: 5,
  },
  {
    quote: "We bought 40 acres for our hobby farm and FSCAP made it happen in under three weeks. No other lender even wanted to look at our property because of the mixed-use.",
    name: "Linda & Carlos M.",
    location: "Guadalupe County, TX",
    type: "Hobby Farm Loan",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-section-cream py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground">
            Real results from real Texas land buyers and brokers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card rounded-xl border border-border p-6 shadow-sm hover:shadow-elevated transition-shadow duration-300"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="text-sm text-card-foreground leading-relaxed mb-5 italic">
                "{t.quote}"
              </blockquote>
              <div className="border-t border-border pt-4">
                <p className="font-sans font-semibold text-sm text-card-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
                <p className="text-xs text-gold font-medium mt-1">{t.type}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
