import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-primary opacity-90" />
      <div className="absolute inset-0 tech-grid-bg opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Ready to Build Something
            <br />
            <span className="text-accent">Extraordinary?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Let's discuss your project and discover how our expertise can accelerate your growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
              variant="secondary" 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
            >
              <Link to="/contact">
                Get a Proposal
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="secondary" 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
            >
              <Link to="/services">
                Explore Services
              </Link>
            </Button>
          </div>

          <motion.div
            className="mt-8 text-white/80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Free consultation • No commitment required
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;