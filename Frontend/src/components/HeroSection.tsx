import { motion } from "framer-motion";
import { Shield, Database, Brain, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center 
                        bg-black overflow-hidden">

      {/* 🔥 Left → Right Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r 
                      from-black via-primary/5 to-black opacity-60" />

      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 
                      -translate-x-1/2 -translate-y-1/2 
                      w-[800px] h-[800px] 
                      rounded-full bg-primary/5 blur-3xl" />
      
      <div className="relative z-10 flex justify-center w-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl w-full text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 
                       border border-primary/20
                       bg-gradient-to-r from-primary/10 via-primary/5 to-transparent
                       backdrop-blur-md rounded-full"
          >
            <span className="w-2 h-2 rounded-full bg-primary pulse-dot" />
            <span className="text-lg font-mono text-muted-foreground">
              Privacy-Preserving Medical AI
            </span>
          </motion.div>

          {/* Title */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold 
                         tracking-tight mb-6 leading-[0.95]">
            <span className="gradient-text text-white">MedFed</span>
          </h1>

          <p className="text-xl sm:text-2xl font-light text-foreground/80 
                        mb-4 max-w-2xl mx-auto leading-relaxed">
            Verifiable Federated Learning for
            <br />
            <span className="text-primary font-medium">
              Collaborative Medical Intelligence
            </span>
          </p>

          <p className="text-base text-muted-foreground 
                        max-w-xl mx-auto mb-10">
            Train predictive models across institutions without sharing patient data. 
            Blockchain-verified. Fully auditable.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row 
                          items-center justify-center gap-4">
            <Button size="lg" className="gap-2 px-8 text-base font-semibold hover:bg-primary/50">
              Get Started <ArrowRight className="w-4 h-4" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="gap-2 px-8 text-base text-white
                         border-primary/30 
                         hover:bg-primary/10"
            >
              Read Whitepaper
            </Button>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid grid-cols-3 gap-10 mt-20 
                       max-w-lg mx-auto"
          >
            {[
              { icon: Shield, label: "Zero Data Leakage" },
              { icon: Database, label: "Blockchain Verified" },
              { icon: Brain, label: "Federated AI" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-lg 
                                bg-primary/10 
                                border border-primary/20 
                                flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-mono text-muted-foreground">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;