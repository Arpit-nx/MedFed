import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import {useNavigate} from "react-router-dom"

const Nav = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/dashboard");
  };



  return (

    
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-xl"
    >
      <div className="container px-6 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
            <span className="text-primary/100 font-bold text-l">M</span>
          </div>
          <span className="font-bold p-10 text-2xl text-white tracking-tight">MedFed</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground font-mono">
          <a href="#architecture" className="hover:text-primary text-2xl transition-colors">Architecture</a>
          <a href="#lifecycle" className="hover:text-primary text-2xl transition-colors">Lifecycle</a>
          <a href="#security" className="hover:text-primary text-2xl transition-colors">Security</a>
           <div className="ml-auto">
    <button
      className="bg-primary text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-primary/80 transition-colors"
      onClick={() =>handleClick() }
    >
      Get Started
    </button>
  </div>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden border-t border-border/30 bg-background/95 backdrop-blur-xl"
        >
          <div className="container px-6 py-4 flex flex-col gap-4 text-sm font-mono">
            <a href="#architecture" className="text-muted-foreground text-4xl p-5 hover:text-primary" onClick={() => setOpen(false)}>Architecture</a>
            <a href="#lifecycle" className="text-muted-foreground hover:text-primary" onClick={() => setOpen(false)}>Lifecycle</a>
            <a href="#security" className="text-muted-foreground hover:text-primary" onClick={() => setOpen(false)}>Security</a>
            <a href="#" className="text-primary font-semibold">Get Started</a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Nav;