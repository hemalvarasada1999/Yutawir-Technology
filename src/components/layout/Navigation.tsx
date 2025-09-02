import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/Yutawir.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "Contact", href: "/contact" }
  ];

  const NavLinks = ({ className = "", onClick }: { className?: string; onClick?: () => void }) => (
    <div className={`flex gap-8 ${className}`}>
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className="text-muted-foreground hover:text-foreground transition-colors duration-200"
          onClick={onClick}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}  
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-heading font-bold text-primary">
              <img src={logo} alt="Yutawir" className="w-56 h-20" />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLinks />
            <Button asChild className="btn-hero">
              <Link to="/contact">Book a Discovery Call</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-6 mt-6">
                  <NavLinks 
                    className="flex-col items-start" 
                    onClick={() => setIsOpen(false)} 
                  />
                  <Button asChild className="btn-hero w-full">
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                      Book a Discovery Call
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;