import { motion } from "framer-motion";
import { ShieldCheck, Lock, Eye, Award } from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "Zero Data Transmission",
    desc: "Raw medical records never leave hospital premises. Only encrypted model gradients are shared.",
  },
  {
    icon: ShieldCheck,
    title: "Blockchain Integrity",
    desc: "Every model update is cryptographically hashed and recorded on an immutable ledger.",
  },
  {
    icon: Eye,
    title: "Poisoning Detection",
    desc: "Server-side validation identifies and rejects anomalous or adversarial model updates.",
  },
  {
    icon: Award,
    title: "Contribution Scoring",
    desc: "On-chain contribution tracking incentivizes honest participation across institutions.",
  },
];

const SecuritySection = () => {
  return (
    <section className="relative py-32 bg-black overflow-hidden">

      {/* 🔥 Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r 
                      from-black via-primary/5 to-black opacity-60" />

      <div className="container relative z-10 px-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 ml-20"
        >
          <span className="text-lg font-mono text-primary mb-3 block">
            SECURITY & TRUST
          </span>

          <h2 className="text-3xl sm:text-5xl text-primary font-bold mb-4">
            Built on <span className="gradient-text">Verifiable Trust</span>
          </h2>

          <p className="text-muted-foreground max-w-lg mx-auto">
            Every layer is designed with privacy and auditability as first-class concerns.
          </p>
        </motion.div>

        {/* 🔷 Premium Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-20 max-w-10xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-10 rounded-2xl
                         border border-primary/20
                         bg-gradient-to-br from-primary/10 via-primary/5 to-transparent
                         backdrop-blur-md
                         shadow-lg shadow-primary/5
                         hover:shadow-primary/20
                         hover:border-primary/40
                         hover:-translate-y-2
                         transition-all duration-500 group"
            >
              {/* Icon Box */}
              <div className="w-14 h-14 rounded-xl 
                              bg-primary/10 border border-primary/20
                              flex items-center justify-center mb-6
                              group-hover:bg-primary/20 
                              group-hover:shadow-md
                              transition-all duration-300">
                <f.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-2xl font-semibold mb-3 text-primary">
                {f.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SecuritySection;