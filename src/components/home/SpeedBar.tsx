import { motion } from "framer-motion";
import { Clock, Zap, UserCheck } from "lucide-react";

const items = [
  {
    icon: Clock,
    title: "48-Hour Pre-Approval",
    description: "Know your buying power before you shop.",
  },
  {
    icon: Zap,
    title: "Close in 2-3 Weeks",
    description: "While Farm Credit takes 4-8 weeks, we move when you're ready.",
  },
  {
    icon: UserCheck,
    title: "Direct Decision Maker",
    description: "No loan committees. Talk to the person who says yes.",
  },
];

const SpeedBar = () => {
  return (
    <section className="bg-section-green">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="flex items-start gap-4"
            >
              <div className="shrink-0 w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center">
                <item.icon className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-sm opacity-70">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeedBar;
