import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import nexusLogo from "@/assets/nexus-x-logo.png";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/company", label: "Company" },
  { href: "/contact", label: "Contact" },
];

export const Footer = () => {
  return (
    <footer className="bg-space-deep border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img 
                src={nexusLogo} 
                alt="Nexus X Industries" 
                className="h-10 w-auto"
              />
              <span className="font-display font-semibold text-xl text-foreground">
                Nexus X Industries
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
              Building the orbital intelligence layer for emerging markets. 
              Space-based infrastructure delivering resilient connectivity 
              and precision services.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Connect
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:contact@nexusxindustries.com"
                className="text-sm text-muted-foreground hover:text-primary transition-colors block"
              >
                contact@nexusxindustries.com
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <p className="text-sm text-muted-foreground">
                Lagos, Nigeria
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nexus X Industries. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Building infrastructure for the next generation.
          </p>
        </div>
      </div>
    </footer>
  );
};
