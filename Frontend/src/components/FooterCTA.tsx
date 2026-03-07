import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FooterCTA = () => {
  return (
    <section className="relative py-32 bg-black overflow-hidden">

      {/* 🔥 Same Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r 
                      from-black via-primary/5 to-black opacity-60" />

      <div className="container relative z-10 px-20 ">

        {/* CTA BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto w-full max-w-3xl text-center mr-18
           p-12 sm:p-16 rounded-2xl
           border border-primary/20
           bg-gradient-to-br from-primary/10 via-primary/5 to-transparent
           backdrop-blur-md
           shadow-lg shadow-primary/10
           hover:shadow-primary/30
           hover:border-primary/40
           hover:-translate-y-2
           transition-all duration-500"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">
            Ready to <span className="gradient-text">Collaborate Securely?</span>
          </h2>

          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Join institutions already using MedFed to advance medical AI without compromising patient privacy.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="gap-2 px-8 font-semibold text-white hover:bg-primary/50">
              Request Access <ArrowRight className="w-4 h-4" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="px-8 border-primary/30 text-foreground text-white
                         hover:bg-primary/10 hover:border-primary/70"
            >
              View Documentation
            </Button>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <div className="mt-20 ml-20 pt-8 border-t border-primary/20 
                        flex flex-col sm:flex-row 
                        items-center justify-between 
                        text-xs text-muted-foreground font-mono">

          <span>© 2026 MedFed. Privacy-First Medical AI.</span>

          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-primary transition-colors">
              Documentation
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              GitHub
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FooterCTA;