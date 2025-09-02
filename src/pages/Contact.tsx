import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      });
    }, 2000);
  };

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
                Let's Build Something Great Together
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Ready to transform your business? Get in touch and let's discuss how 
                our expertise can accelerate your growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-heading font-bold mb-8">
                  Get in Touch
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Visit Us</h3>
                      <p className="text-muted-foreground">
                      1861, Burjuman Business Tower,<br />
                       Bur Dubai. UAE
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Email Us</h3>
                      <a 
                        href="mailto:hello@yutawir.com" 
                        className="text-primary hover:underline"
                      >
                        hello@yutawir.com
                      </a>
                    </div>
                  </div>

                  {/* <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Call Us</h3>
                      <p className="text-muted-foreground">
                        +971-XXX-XXX-XXX
                      </p>
                    </div>
                  </div> */}
                </div>

                <div className="mt-12 p-6 bg-muted/50 rounded-2xl">
                  <h3 className="font-semibold mb-3">Book a Discovery Call</h3>
                  <p className="text-muted-foreground mb-4">
                    Schedule a free 30-minute consultation to discuss your project requirements.
                  </p>
                  <Button className="btn-hero">
                    Schedule Call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>

              {/* Contact Form */}
              {/* <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Card className="bg-gradient-card border-border/50">
                  <CardHeader>
                    <CardTitle className="text-2xl font-heading">
                      Send us a Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input id="firstName" required className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input id="lastName" required className="mt-1" />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email">Work Email *</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          required 
                          className="mt-1" 
                        />
                      </div>

                      <div>
                        <Label htmlFor="company">Company *</Label>
                        <Input id="company" required className="mt-1" />
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" className="mt-1" />
                      </div>

                      <div>
                        <Label htmlFor="service">What do you need? *</Label>
                        <Select required>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="computer-vision">Computer & Machine Vision</SelectItem>
                            <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                            <SelectItem value="algorithmic-trading">Algorithmic Trading</SelectItem>
                            <SelectItem value="consultation">General Consultation</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="message">Project Details *</Label>
                        <Textarea 
                          id="message" 
                          required 
                          className="mt-1 min-h-[120px]" 
                          placeholder="Tell us about your project, timeline, and requirements..."
                        />
                      </div>

                      <div className="flex items-start space-x-2">
                        <Checkbox id="consent" required />
                        <Label htmlFor="consent" className="text-sm leading-tight">
                          I consent to being contacted by Yutawir Technologies regarding my inquiry. 
                          We respect your privacy and will never share your information.
                        </Label>
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full btn-hero" 
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                        {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        Typically respond within 24 hours • Free consultation • No commitment required
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </motion.div> */}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
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
                Frequently Asked Questions
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {[
                {
                  question: "How long do projects typically take?",
                  answer: "Project timelines vary based on complexity, but most projects range from 8-24 weeks. We provide detailed timelines during our discovery phase."
                },
                {
                  question: "Do you work with startups?",
                  answer: "Yes! We work with startups, SMBs, and enterprises. We offer flexible engagement models to fit different budget requirements."
                },
                {
                  question: "What's included in your security solutions?",
                  answer: "Our security services include assessment, implementation, monitoring, and compliance support. We provide end-to-end security solutions."
                },
                {
                  question: "Can you help with existing systems?",
                  answer: "Absolutely. We can integrate with, enhance, or modernize existing systems while ensuring minimal disruption to your operations."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg font-heading">
                        {faq.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;