import { motion } from "framer-motion";
import { Building2, Server, Link2, MonitorDot } from "lucide-react";

const layers = [
  {
    icon: Building2,
    title: "Client Layer",
    subtitle: "Hospital Nodes",
    items: [
      "Maintain local datasets",
      "Train ML models independently",
      "Send model updates to server",
    ],
  },
  {
    icon: Server,
    title: "Federated Server",
    subtitle: "FastAPI Backend",
    items: [
      "Initializes global model",
      "Verifies incoming updates",
      "Performs federated averaging",
    ],
  },
  {
    icon: Link2,
    title: "Blockchain Layer",
    subtitle: "Smart Contract",
    items: [
      "Stores cryptographic hashes",
      "Logs hospital contributions",
      "Immutable audit trail",
    ],
  },
  {
    icon: MonitorDot,
    title: "React Dashboard",
    subtitle: "Visualization",
    items: [
      "Displays global accuracy",
      "Per-hospital contribution",
      "Training round analytics",
    ],
  },
];

const ArchitectureSection = () => {
  return (
    <section className="relative py-40 bg-black overflow-hidden">

      {/* 🔥 Same Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r 
                      from-black via-primary/5 to-black opacity-60" />

      <div className="relative z-10 flex justify-center px-6">

        <div className="w-full max-w-6xl text-center">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <span className="text-lg font-mono text-primary mb-3 block">
              ARCHITECTURE
            </span>

            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              Three-Layer <span className="gradient-text">System Design</span>
            </h2>

            <p className="text-white/70 max-w-lg mx-auto">
              Hospitals never transmit raw data. Only model weights are exchanged.
            </p>
          </motion.div>

          {/* Layer Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">

            {layers.map((layer, i) => (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl
                           border border-primary/20
                           bg-gradient-to-br from-primary/10 via-primary/5 to-transparent
                           backdrop-blur-md
                           shadow-lg shadow-primary/10
                           hover:shadow-primary/30
                           hover:border-primary/40
                           hover:-translate-y-2
                           transition-all duration-500"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl 
                                bg-primary/10 border border-primary/20
                                flex items-center justify-center mb-6">
                  <layer.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-1">
                  {layer.title}
                </h3>

                <p className="text-xs font-mono text-primary/70 mb-4">
                  {layer.subtitle}
                </p>

                {/* Items */}
                <ul className="space-y-2">
                  {layer.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-white/80"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;