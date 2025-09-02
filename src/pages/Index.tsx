import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import Stats from "@/components/home/Stats";
import Process from "@/components/home/Process";
import CTA from "@/components/home/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <ServicesOverview />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
