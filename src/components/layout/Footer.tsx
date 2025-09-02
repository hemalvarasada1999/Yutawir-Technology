import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Globe } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <span className="text-2xl font-heading font-bold text-primary">
                Yutawir
              </span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Empowering businesses with cutting-edge, secure, and scalable software solutions 
              that drive growth and efficiency.
            </p>
            <p className="text-sm text-muted-foreground">
              Secure. Intelligent. Scalable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/services" className="hover:text-foreground transition-colors">Computer Vision</Link></li>
              <li><Link to="/services" className="hover:text-foreground transition-colors">Cybersecurity</Link></li>
              <li><Link to="/services" className="hover:text-foreground transition-colors">Algorithmic Trading</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:hello@yutawir.com" className="hover:text-foreground transition-colors">
                  hello@yutawir.com
                </a>
              </li>
              {/* <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+971-XXX-XXX-XXX</span>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Yutawir Technologies. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;