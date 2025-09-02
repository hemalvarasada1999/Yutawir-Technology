import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const values = [
  {
    title: "Reliability",
    description: "We build systems that work flawlessly, ensuring your business operations run without interruption."
  },
  {
    title: "Security", 
    description: "Every solution we deliver incorporates enterprise-grade security from the ground up."
  },
  {
    title: "Velocity",
    description: "We accelerate your time-to-market while maintaining the highest quality standards."
  },
  {
    title: "Impact",
    description: "Our focus is on delivering measurable business outcomes that drive real growth."
  }
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                About Yutawir
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                We're a Dubai-based software company that transforms complex technological 
                challenges into reliable, scalable solutions that drive business growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-heading font-bold mb-6">
                  Why Yutawir Exists
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  In today's rapidly evolving digital landscape, businesses need more than just software—they need 
                  intelligent solutions that can adapt, scale, and secure their operations while driving measurable growth.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We founded Yutawir to bridge the gap between cutting-edge technology and practical business outcomes. 
                  Our expertise in computer vision, cybersecurity, and algorithmic trading allows us to tackle the most 
                  complex challenges across industries.
                </p>
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Enterprise-Grade Solutions</h3>
                    <p className="text-muted-foreground">Built to scale with your business</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="aspect-square bg-gradient-primary rounded-3xl p-8 text-white">
                  <div className="text-6xl font-bold mb-4">50+</div>
                  <div className="text-2xl font-heading mb-4">Successful Projects</div>
                  <p className="text-white/90">
                    Delivered across computer vision, cybersecurity, and fintech solutions
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Our Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                These principles guide every decision we make and every solution we deliver.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full card-hover">
                    <CardHeader>
                      <CardTitle className="text-xl font-heading">
                        {value.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-heading font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower businesses with cutting-edge, secure, and scalable software solutions 
                  that drive growth and efficiency. We turn complex problems into reliable, 
                  growth-driven products that give our clients a competitive advantage.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-4xl font-heading font-bold mb-6">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the leading technology partner for businesses seeking intelligent, 
                  secure, and scalable solutions. We envision a future where advanced 
                  technology seamlessly integrates with business operations to create 
                  unprecedented value and growth opportunities.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 tech-grid-bg opacity-20" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Let's Talk About Your Project
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Ready to transform your business with intelligent technology solutions?
              </p>
              <Button 
                asChild 
                variant="secondary" 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
              >
                <Link to="/contact">
                  Start a Conversation
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;