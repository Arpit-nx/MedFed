import { motion } from "framer-motion";

const steps = [
  { step: "01", title: "Distribute", desc: "Global model sent to all hospital nodes" },
  { step: "02", title: "Train Locally", desc: "Each hospital trains on private patient data" },
  { step: "03", title: "Return Updates", desc: "Weight updates sent back to federated server" },
  { step: "04", title: "Verify Integrity", desc: "Server validates model updates for poisoning" },
  { step: "05", title: "Hash on Chain", desc: "Update hashes stored on blockchain ledger" },
  { step: "06", title: "Aggregate", desc: "Federated Averaging produces improved model" },
  { step: "07", title: "Broadcast", desc: "Updated global model distributed to all nodes" },
];

const WorkflowSection = () => {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      
      {/* 🔥 Middle Horizontal Line */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-primary/5 -translate-y-1/2 z-0" />

      {/* 🔵 Center Circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-20 h-20 rounded-full 
                      bg-black border border-primary/5 z-10" />

      <div className="container px-70 ml-30 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 ml-30"
        >
          <span className="text-lg font-mono text-primary mb-3 block">
            LIFECYCLE
          </span>

          <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-primary">
            Federated <span className="gradient-text">Training Lifecycle</span>
          </h2>

          <p className="text-muted-foreground max-w-lg mx-auto">
            A complete round of privacy-preserving collaborative learning.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Existing Vertical Timeline */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden sm:block" />

          <div className="space-y-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start ml-20 gap-6 group"
              >
                <div className="relative shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 
                                  flex items-center justify-center 
                                  font-mono text-primary text-sm font-bold 
                                  group-hover:bg-primary/20 transition-all duration-300">
                    {s.step}
                  </div>
                </div>

                <div className="glass-card p-5 flex-1 transition-shadow duration-300">
                  <h3 className="text-2xl text-primary font-semibold mb-1">
                    {s.title}
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;