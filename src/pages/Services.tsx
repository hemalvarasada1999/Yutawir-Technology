import { motion } from "framer-motion";
import { Brain, Shield, TrendingUp, ArrowRight } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Brain,
    title: "Computer & Machine Vision",
    description: "Transform visual data into intelligent decisions with cutting-edge computer vision solutions.",
    capabilities: [
      "Object Detection & Classification",
      "Quality Inspection Systems",
      "OCR & Document Processing", 
      "Real-time Video Analysis",
      "Edge & Embedded Deployment",
      "Custom Model Training"
    ],
    technologies: ["Python/C++", "OpenCV", "CUDA", "ONNX", "TensorRT", "Industrial Cameras"],
    deliverables: ["Trained Models", "API Services", "Analytics Dashboards", "MLOps Pipelines"]
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your applications, data, and infrastructure.",
    capabilities: [
      "Application Security Testing",
      "API Security & Protection",
      "Identity & Access Management",
      "SIEM/SOC Setup & Management",
      "Threat Modeling & Assessment",
      "Cloud Security Hardening"
    ],
    technologies: ["OWASP Standards", "Zero Trust Architecture", "SIEM/SOAR", "Cloud Security", "Compliance Frameworks"],
    deliverables: ["Security Assessments", "Hardened Infrastructure", "Monitoring Systems", "Compliance Reports"]
  },
  {
    icon: TrendingUp,
    title: "Algorithmic Trading",
    description: "Data-driven trading strategies with low-latency execution and comprehensive risk management.",
    capabilities: [
      "Strategy Design & Development",
      "Market Data Ingestion & Analysis",
      "Low-latency Order Management",
      "Risk Management Systems",
      "Backtesting Infrastructure",
      "Performance Monitoring"
    ],
    technologies: ["Python/C++", "Market Data APIs", "FIX Protocol", "High-Frequency Systems", "Risk Analytics"],
    deliverables: ["Trading Algorithms", "Execution Systems", "Risk Controls", "Performance Analytics"]
  }
];

const Services = () => {
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
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Cutting-edge technology solutions designed to transform your business 
                and accelerate growth across critical domains.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    
                    <h2 className="text-4xl font-heading font-bold mb-4">
                      {service.title}
                    </h2>
                    
                    <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <Button asChild className="btn-hero">
                      <Link to="/contact">
                        Discuss Your Use Case
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <Card className="bg-gradient-card border-border/50">
                      <CardHeader>
                        <CardTitle className="text-2xl font-heading">
                          What We Deliver
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3">Capabilities</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.capabilities.map((capability) => (
                              <Badge key={capability} variant="secondary">
                                {capability}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech) => (
                              <Badge key={tech} className="bg-primary/10 text-primary hover:bg-primary/20">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">Deliverables</h4>
                          <ul className="space-y-2">
                            {service.deliverables.map((deliverable) => (
                              <li key={deliverable} className="flex items-center text-muted-foreground">
                                <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
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
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Let's discuss your specific requirements and design the perfect solution for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  variant="secondary" 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
                >
                  <Link to="/contact">
                    Book a Discovery Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="secondary" 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
                >
                  <Link to="/solutions">
                    View Case Studies
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;