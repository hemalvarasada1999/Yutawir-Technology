import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    title: "Manufacturing Quality Control",
    category: "Computer Vision",
    outcome: "Reduced manual QA by 72%",
    image: "/api/placeholder/400/250",
    problem: "A leading electronics manufacturer struggled with inconsistent quality control, relying on manual inspection that was slow and error-prone.",
    approach: "Implemented computer vision system with real-time defect detection using custom CNN models trained on 50K+ product images.",
    stack: ["Python", "OpenCV", "PyTorch", "CUDA", "Industrial Cameras", "Edge Computing"],
    results: {
      accuracy: "99.2% defect detection accuracy",
      speed: "72% reduction in inspection time",
      cost: "€450K annual savings in labor costs",
      roi: "280% ROI within 12 months"
    }
  },
  {
    title: "Financial Services Security",
    category: "Cybersecurity",
    outcome: "Zero security incidents in 24 months",
    image: "/api/placeholder/400/250",
    problem: "A fintech startup needed enterprise-grade security to handle sensitive financial data while maintaining rapid development cycles.",
    approach: "Implemented comprehensive security framework with automated testing, API protection, and continuous monitoring.",
    stack: ["OWASP Standards", "AWS Security", "SIEM/SOAR", "Zero Trust", "Automated Testing", "Compliance Tools"],
    results: {
      security: "100% compliance with PCI DSS",
      incidents: "Zero security breaches",
      testing: "90% reduction in security testing time",
      certification: "SOC 2 Type II certification achieved"
    }
  },
  {
    title: "Crypto Trading Algorithm",
    category: "Algorithmic Trading",
    outcome: "15.3% monthly returns with 0.12 Sharpe ratio",
    image: "/api/placeholder/400/250",
    problem: "A hedge fund wanted to automate their cryptocurrency trading strategy while maintaining strict risk controls.",
    approach: "Developed multi-timeframe algorithmic trading system with real-time risk management and portfolio optimization.",
    stack: ["Python", "C++", "Market Data APIs", "Machine Learning", "Risk Analytics", "Low-latency Infrastructure"],
    results: {
      returns: "15.3% average monthly returns",
      sharpe: "Sharpe ratio of 0.12",
      latency: "Sub-millisecond execution",
      uptime: "99.97% system uptime"
    }
  },
  {
    title: "Retail Analytics Platform",
    category: "Computer Vision",
    outcome: "35% increase in conversion rates",
    image: "/api/placeholder/400/250",
    problem: "Retail chain needed insights into customer behavior and inventory management across 200+ stores.",
    approach: "Built comprehensive analytics platform with people counting, behavior analysis, and inventory tracking.",
    stack: ["Computer Vision", "Edge Computing", "Cloud Analytics", "Real-time Dashboards", "Mobile Apps"],
    results: {
      conversion: "35% increase in conversion rates",
      inventory: "40% reduction in stockouts",
      insights: "Real-time analytics across all stores",
      satisfaction: "95% customer satisfaction improvement"
    }
  }
];

const Solutions = () => {
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
                Solutions & Case Studies
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Real projects, measurable results. See how we've helped businesses transform 
                their operations with intelligent technology solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card className="cursor-pointer card-hover h-full">
                        <CardHeader>
                          <div className="flex justify-between items-start mb-2">
                            <Badge variant="secondary">{study.category}</Badge>
                            <ExternalLink className="h-4 w-4 text-muted-foreground" />
                          </div>
                          <CardTitle className="text-xl font-heading">
                            {study.title}
                          </CardTitle>
                          <CardDescription>
                            {study.outcome}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                            <span className="text-muted-foreground text-sm">Project Showcase</span>
                          </div>
                          <p className="text-muted-foreground text-sm">
                            Click to view detailed case study →
                          </p>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-heading">
                          {study.title}
                        </DialogTitle>
                        <DialogDescription>
                          <Badge className="mr-2">{study.category}</Badge>
                          {study.outcome}
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-6">
                        {/* Problem */}
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Challenge</h3>
                          <p className="text-muted-foreground">{study.problem}</p>
                        </div>

                        {/* Approach */}
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Our Approach</h3>
                          <p className="text-muted-foreground">{study.approach}</p>
                        </div>

                        {/* Tech Stack */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3">Technology Stack</h3>
                          <div className="flex flex-wrap gap-2">
                            {study.stack.map((tech) => (
                              <Badge key={tech} className="bg-primary/10 text-primary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Results */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3">Key Results</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {Object.entries(study.results).map(([key, value]) => (
                              <div key={key} className="bg-muted/50 rounded-lg p-4">
                                <div className="text-2xl font-bold text-primary mb-1">
                                  {typeof value === 'string' && value.match(/\d+/) ? 
                                    value.match(/\d+/)?.[0] : '✓'}
                                </div>
                                <div className="text-sm text-muted-foreground capitalize">
                                  {value}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                          <Button asChild className="btn-hero">
                            <Link to="/contact">
                              Discuss Your Project
                            </Link>
                          </Button>
                          {/* <Button variant="outline">
                            Request Full Case Study PDF
                          </Button> */}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
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
                Common Use Cases
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore how our solutions can be applied across different industries and scenarios.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                "Manufacturing Vision QA",
                "Retail Analytics & Insights",
                "SOC & Threat Monitoring",
                "KYC/AML & Risk Management", 
                "Market Data ETL Pipelines",
                "Edge AI Deployment"
              ].map((useCase, index) => (
                <motion.div
                  key={useCase}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="card-hover">
                    <CardHeader>
                      <CardTitle className="text-lg font-heading">
                        {useCase}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/contact">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
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
                Your Success Story Starts Here
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Ready to achieve similar results? Let's discuss how we can transform your business.
              </p>
              <Button 
                asChild 
                variant="secondary" 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
              >
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
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

export default Solutions;